import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import axios from 'axios';

import 'bootstrap-icons/font/bootstrap-icons.css';

// Components
import HeadComponent from '../../components/head';
import NavbarComponent from '../../components/navbar';
import MainComponent from '../../components/main';
import CardComponent from '../../components/card';
import LineStatusComponent from '../../components/line';
import SpinnerComponent from '../../components/spinner';
import FooterComponent from '../../components/footer';

import styles from './Track.module.css';

class TrackInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code_track: "",
            info: "",
            success: "",
            isLoading: true
        }
    }

    static async getInitialProps({ query }) {
        const code = query.code;
        return {
            code: code,
        }
    }

    async componentDidMount() {
        let response = await axios.get(`/api/pacotes/${this.props.code}`);
        // let response = await axios.get(`/api/test`);

        this.setState({ success: response.data.success, code_track: (response.data.result.objetos[0].codObjeto), info: (response.data.result.objetos[0].eventos), isLoading: false });
    }

    getImageSrc = (type) => {
        const path_img = "/images";
        let img_src = "";

        switch (type) {
            case "Objeto postado":
                img_src = `${path_img}/icon-loc1.svg`;
                break;
            case "Objeto em trânsito - por favor aguarde":
                img_src = `${path_img}/icon-truck-transit.svg`;
                break;
            case "Objeto recebido pelos Correios do Brasil":
                img_src = `${path_img}/icon-truck-ok.svg`;
                break;
            case "Fiscalização aduaneira finalizada":
                img_src = `${path_img}/icon-box-search.svg`;
                break;
            case "Objeto saiu para entrega ao destinatário":
                img_src = `${path_img}/icon-hand-box.svg`;
                break;
            case "Objeto entregue ao destinatário":
                img_src = `${path_img}/icon-box-ok.svg`;
                break;
            default:
                img_src = `${path_img}/icon-default.svg`;
                break;
        }

        return img_src;
    }

    dateFormat = (date) => {
        let aux = "", result = [];
        aux = date.split("T");

        let new_date = new Date(aux[0]);
        result.push(new_date.toLocaleDateString('pt-BR', { timeZone: 'UTC' }));
        result.push(aux[1]);

        return result;
    }

    render() {

        const { isLoading, success, code_track, info } = this.state;
        return (
            <React.Fragment>
                <HeadComponent title={"Informações do Pacote"} />
                <NavbarComponent />
                {(!isLoading) ?
                    <MainComponent>
                        <div className={styles.title}>
                            <h4>Seu Pedido: {code_track}</h4>
                        </div>
                        <div className={styles.section_back}>
                            <Link href="/">
                                <a className={styles.link_back}>
                                    <i className="bi bi-arrow-left"></i>
                                    <span className='ms-1'>Voltar</span>
                                </a>
                            </Link>
                        </div>
                        {(info.length !== 0) ?
                            info.map((element, index) => (
                                <React.Fragment key={index}>
                                    <CardComponent
                                        src={this.getImageSrc(element.descricao)}
                                        alt={`ícone ${index}`}
                                        title={element.descricao}
                                        date={this.dateFormat(element.dtHrCriado)}
                                        place={element.unidade.tipo}
                                        city={element.unidade.endereco.cidade}
                                        uf={element.unidade.endereco.uf} />
                                    {(index < info.length - 1) ? <LineStatusComponent /> : ''}
                                </React.Fragment>
                            ))
                            :
                            <h3>Não há Nenhuma informação no momento</h3>
                        }
                    </MainComponent>
                    :
                    <SpinnerComponent />
                }
                <FooterComponent />
            </React.Fragment>
        );
    }
}

export default TrackInfo;