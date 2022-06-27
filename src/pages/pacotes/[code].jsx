import React, { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
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

        this.setState({ success: this.errorChecking(response), code_track: (response.data.result.objetos[0].codObjeto), info: this.checkEventos(response.data.result.objetos[0].eventos), isLoading: false });
    }

    // Verifica se há informações dos eventos de entrega
    checkEventos = (data) => {
        try {
            if (!data || data == null || data == "") {
                return null;
            }
            return data;
        } catch (err) {
            console.error(err);
        }
    }

    // Verifica se há informações sobre o endereço onde está o pedido
    checkAddress = (city, uf) => {
        try {
            if (city == undefined || uf == undefined) {
                return 'Brasil';
            }

            return `${city}/${uf}`;
        } catch (err) {
            console.error(err);
        }
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
                                        <h6 className='mb-0'>cód. rastreio</h6>
                                        <h3 className={styles.code}>{code_track}</h3>
                                    </div>

                                    <div className={styles.section_back}>
                                        <Link href="/">
                                            <a className={styles.link_back}>
                                                <span className='me-1'>VOLTAR</span>
                                                <i className="bi bi-arrow-right"></i>
                                            </a>
                                        </Link>
                                    </div>

                                    <div className={styles.info}>
                                        <h5 className={styles.title_info}>INFORMAÇÕES:</h5>
                                        {(info !== null)
                                            ?
                                            <p className={styles.text_info}>
                                                Última Atualização: <span>{`${this.dateFormat(info[0].dtHrCriado)[0]} - ${this.dateFormat(info[0].dtHrCriado)[1]}`}</span><br />
                                                Local: <span>{this.checkAddress(info[0].unidade.endereco.cidade, info[0].unidade.endereco.uf)}</span>
                                            </p>
                                            :
                                            // NÃO HÁ DADOS
                                            <p className={styles.text_info}>
                                                Última Atualização: Não há dados<br />
                                                Local: Não há dados
                                            </p>
                                        }
                                    </div>
                                </div>

                                <div className={styles.status_section}>
                                    <h4>STATUS DO PEDIDO:</h4>
                                </div>

                                {(info !== null && info.length > 0) ?
                                    // INFORMAÇÕES SOBRE A ENTREGA
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
                                    // SEM INFORMAÇÕES NO MOMENTO
                                    <React.Fragment>
                                        <div className='text-center'>
                                            <h4>Não há nenhuma informação no momento!</h4>
                                            <div className='my-3'>
                                                <Image
                                                    src={'/images/location-time.svg'}
                                                    alt={'Sem informações!'}
                                                    width={96}
                                                    height={96}
                                                    loading='lazy'
                                                />
                                            </div>
                                            <p>Às vezes as informações demoram de 5 a 10 dias para constar no sistema dos Correios. Volte mais tarde!</p>
                                        </div>
                                    </React.Fragment>
                                }
                            </MainComponent>
                            :
                            // PÁGINA DE ERRO
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