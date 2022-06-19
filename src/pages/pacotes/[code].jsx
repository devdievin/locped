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
import ErrorPageComponent from '../../components/error';
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

        this.setState({ success: this.errorChecking(response), code_track: (response.data.result.objetos[0].codObjeto), info: (response.data.result.objetos[0].eventos), isLoading: false });
    }

    errorChecking = (response) => {
        if (response.data.result.objetos[0].mensagem === 'SRO-019: Objeto inválido') {
            return 'Objeto inválido';
        } else if (response.data.result.objetos[0].mensagem === 'SRO-020: Objeto não encontrado na base de dados dos Correios.') {
            return 'Objeto não encontrado';
        } else {
            return 'Sucesso';
        }
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
                <HeadComponent title={"Informações do Pedido - LocPed"} />
                <NavbarComponent />
                {(!isLoading) ?
                    <React.Fragment>
                        {(success === 'Sucesso') ?
                            <MainComponent>
                                <div className={styles.header}>
                                    <div className={styles.title}>
                                        <h3>Status do Pedido</h3>
                                    </div>

                                    <div className={styles.section_back}>
                                        <Link href="/">
                                            <a className={styles.link_back}>
                                                <span className='me-1'>Voltar</span>
                                                <i className="bi bi-arrow-right"></i>
                                            </a>
                                        </Link>
                                    </div>

                                    <div className={styles.info}>
                                        <h5 className={styles.title_info}>Informações:</h5>
                                        <p>
                                            Código de rastreio: <span className={styles.highlight_info}>{code_track}</span><br />
                                            Última Localização: <span className={styles.highlight_info}>{`${info[0].unidade.endereco.cidade}/${info[0].unidade.endereco.uf}`}</span><br />
                                            Última Atualização: <span className={styles.highlight_info}>{`${this.dateFormat(info[0].dtHrCriado)[0]} - ${this.dateFormat(info[0].dtHrCriado)[1]}`}</span>
                                        </p>
                                        {/* <hr /> */}
                                    </div>
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
                            <ErrorPageComponent error={success} />
                        }
                    </React.Fragment>
                    :
                    <SpinnerComponent />
                }
                <FooterComponent />
            </React.Fragment>
        );
    }
}

export default TrackInfo;