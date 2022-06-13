import React, { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import Router from 'next/router';
import axios from 'axios';

// Components
import HeadComponent from '../../components/head';
import NavbarComponent from '../../components/navbar';
import MainComponent from '../../components/main';
import CardComponent from '../../components/card';

import styles from './Track.module.css';

class TrackInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code_track: "",
            info: "",
            success: ""
            // isLoading: true
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
        // console.log(response.data.success);
        this.setState({ success: response.data.success, code_track: (response.data.result.objetos[0].codObjeto), info: (response.data.result.objetos[0].eventos) });

        // console.log(this.state.info);

        // if (!response.data.success) return Router.push('/');
        // this.setState({ name: response.data.data.name, price: response.data.data.price, isLoading: false });
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
        const img_src_test = "/images/icon-loc1.svg";
        // console.log(this.getImageSrc("Fiscalização aduaneira finalizada"));
        return (
            <React.Fragment>
                <HeadComponent title={"Informações do Pacote"} />
                <NavbarComponent />
                <MainComponent>
                    <div className={styles.title}>
                        <h4>Seu Pedido: {code_track}</h4>
                    </div>
                    {(info.length !== 0) ?
                        info.map((element, index) => (
                            <CardComponent key={element._id}
                                src={this.getImageSrc(element.descricao)}
                                alt={`ícone ${index}`}
                                title={element.descricao}
                                date={this.dateFormat(element.dtHrCriado)}
                                place={element.unidade.tipo}
                                city={element.unidade.endereco.cidade}
                                uf={element.unidade.endereco.uf} />
                        ))
                        :
                        <h3>Erro</h3>
                    }
                </MainComponent>
            </React.Fragment>
        );
    }
}

export default TrackInfo;