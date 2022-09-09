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
import TimeOutComponent from '../../components/timeout';
import StatusPacketComponent from '../../components/status-packet';
import ButtonGoTop from '../../components/btnGoTop';
import ErrorPageComponent from '../../components/error';
import FooterComponent from '../../components/footer';

import styles from './Track.module.css';
import { returnMsgEmail, returnMsgWhats } from '../../utils/helpers';

class TrackInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code_track: "",
            info: "",
            success: "",
            showBtnTop: false,
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
        let response;

        // response = await axios.get(`/api/pacotes/${this.props.code}`);
        // response = await axios.get(`/api/test`);
        // await axios.get(`/api/test`)
        //     .then(resp => { this.setConnectionTimeout(); response = resp })
        //     .catch(err => console.error(err))
        //     .finally(() => this.setState({ isLoading: false }));

        await axios.get(`/api/pacotes/${this.props.code}`)
            .then(resp => { this.setConnectionTimeout(); response = resp; })
            .catch(err => console.error(err))
            .finally(() => this.setState({ isLoading: false }));

        // this.setState({ success: this.errorChecking(response), code_track: (response.data.result.objetos[0].codObjeto), info: this.checkEventos(response.data.result.objetos[0].eventos), isLoading: false });
        this.setState({ success: this.errorChecking(response), code_track: this.checkEventos(response.data.result.objetos[0].codObjeto), info: this.checkEventos(response.data.result.objetos[0].eventos) });

        // console.log(window.screen.height);
        window.addEventListener("scroll", () => ((window.scrollY > window.screen.height) ? this.setState({ showBtnTop: true }) : this.setState({ showBtnTop: false })));
    }

    // Timeout de resposta da api
    setConnectionTimeout = () => {
        const timeout = 10;
        let st = setTimeout(() => {
            const { isLoading } = this.state;
            if (isLoading) {
                // console.log(`Acabou os ${timeout} segundos`);
                this.setState({ success: 'Timeout', isLoading: false });
            }
            // console.log(`O timeout foi removido depois de ${timeout} segundos`);
            clearTimeout(st);
        }, (timeout * 1000));
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

    // Verificação de erros na resposta dos dados
    errorChecking = (response) => {
        if (response.data.success === false) {
            return 'Serviço indisponível';
        }
        // if (response.data.result.objetos.length >) {

        // }
        if (response.data.result.objetos[0].mensagem === 'SRO-019: Objeto inválido') {
            return 'Objeto inválido';
        } else if (response.data.result.objetos[0].mensagem === 'SRO-020: Objeto não encontrado na base de dados dos Correios.') {
            return 'Objeto não encontrado';
        } else {
            return 'Sucesso';
        }
    }

    // Retorna uma etiqueta com o status da entrega
    getStatus = (status) => {
        try {
            let result;
            if (status === "Objeto postado") {
                result = "Obj. Postado";
            } else if (status === "Objeto entregue ao destinatário") {
                result = "Entregue";
            } else {
                result = "Em Trânsito";
            }

            return result;
        } catch (err) {
            console.error(err);
        }
    }

    // Retorna ícones de acordo com o status da entrega
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

    // Formata a data para o formato brasileiro
    dateFormat = (date) => {
        let aux = "", result = [];
        aux = date.split("T");

        let new_date = new Date(aux[0]);
        result.push(new_date.toLocaleDateString('pt-BR', { timeZone: 'UTC' }));
        result.push(aux[1]);

        return result;
    }

    // Armazena o código de rastreio na área de transferência
    copyCode = () => {
        navigator.clipboard.writeText(this.state.code_track);

        let tooltip = document.getElementById("myTooltip");
        // tooltip.innerHTML = "Copiado: " + this.state.code_track;
        tooltip.innerHTML = "Copiado!";
    }

    // Reseta tooltip de copiar código rastreio
    outFunc = () => {
        let tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copiar Código";
    }

    render() {
        const { isLoading, success, code_track, info, showBtnTop } = this.state;

        let msg_whats = returnMsgWhats(code_track);
        let msg_email = returnMsgEmail(code_track);

        return (
            <React.Fragment>
                <HeadComponent title={"Informações da Entrega - LocPed"} />
                <NavbarComponent page="info" />
                {(!isLoading) ?
                    <React.Fragment>
                        {(success === 'Sucesso') ?
                            <MainComponent>
                                <div className={styles.header}>
                                    <div className={styles.title}>
                                        <h6 className='mb-0'>cód. rastreio</h6>
                                        <h3 className={styles.code}>
                                            {code_track}
                                            <div className={styles.tooltip}>
                                                <button className={styles.btn_copy} onClick={this.copyCode} onMouseOut={this.outFunc}>
                                                    <span className={styles.tooltiptext} id="myTooltip">Copiar Código</span>
                                                    <i className="bi bi-files"></i>
                                                </button>
                                            </div>

                                        </h3>
                                        <StatusPacketComponent status={this.getStatus(info[0].descricao)} />
                                        {/* <StatusPacketComponent status={"Obj. Postado"} /> */}
                                    </div>
                                </div>

                                <div className={styles.btns_share}>
                                    <p>Compartilhar:</p>

                                    <a target="_blank" className="btn btn-primary mx-2" href={msg_email} rel="noopener noreferrer"><i className="bi bi-envelope"></i></a>
                                    <a target="_blank" className={styles.btn_whatsapp} href={msg_whats} rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>
                                </div>

                                <div className={styles.status_section}>
                                    <h5>LINHA DO TEMPO DA ENTREGA</h5>
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
                                                // loading='lazy'
                                                />
                                            </div>
                                            <p>Às vezes as informações demoram até 3 dias úteis para constar no sistema da transportadora. Volte mais tarde!</p>
                                        </div>
                                    </React.Fragment>
                                }
                                
                                {/* BOTÃO SCROLL TO TOP */}
                                {(showBtnTop === true) ? <ButtonGoTop /> : ""}

                            </MainComponent>
                            : (success === 'Timeout') ?
                                <TimeOutComponent />
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