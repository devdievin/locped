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
    }

    setConnectionTimeout = () => {
        const timeout = 5;
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

    copyCode = () => {
        navigator.clipboard.writeText(this.state.code_track);

        // var tooltip = document.getElementById("myTooltip");
        // tooltip.innerHTML = "Copiado: " + code;
        console.log("Copied: " + this.state.code_track);
    }

    outFunc = () => {
        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copy to clipboard";
    }

    render() {
        const { isLoading, success, code_track, info } = this.state;

        let msg_whats = "https://wa.me/?text=Ol%C3%A1.%20Voc%C3%AA%20pode%20rastrear%20o%20seu%20pedido%20de%20c%C3%B3digo%20" + code_track + "%20clicando%20no%20link%20https%3A%2F%2Flocped.vercel.app%2Fpacotes%2F" + code_track;
        let msg_email = "mailto:?subject=Localize seu pacote - LocPed&body=Olá. Você pode rastrear seu pedido de código " + code_track + " no link https://locped.vercel.app/pacotes/" + code_track;
        // https://wa.me/?text=urlencodedtext
        // mailto:[E-MAIL]?subject=[ASSUNTO]&body=[CORPO-DA-MENSAGEM]

        return (
            <React.Fragment>
                <HeadComponent title={"Informações da Entrega - LocPed"} />
                <NavbarComponent />
                {(!isLoading) ?
                    <React.Fragment>
                        {(success === 'Sucesso') ?
                            <MainComponent>
                                <div className={styles.header}>
                                    <div className={styles.title}>
                                        <h6 className='mb-0'>cód. rastreio</h6>
                                        <h3 className={styles.code}>
                                            {code_track}
                                            {/* <button onclick="myFunction()" onmouseout="outFunc()">
                                                <span className={styles.tooltiptext} id="myTooltip">Copy to clipboard</span>
                                                <i className="bi bi-files"></i>
                                            </button> */}
                                            <div className={styles.tooltip}>
                                                <button className={styles.btn_copy} onClick={this.copyCode} onMouseOut={this.outFunc}>
                                                    <span className={styles.tooltiptext} id="myTooltip">Copy to clipboard</span>
                                                    {/* Copiar */}
                                                    <i className="bi bi-files"></i>
                                                </button>
                                            </div>

                                        </h3>
                                        <StatusPacketComponent status={this.getStatus(info[0].descricao)} />
                                        {/* <StatusPacketComponent status={"Obj. Postado"} /> */}
                                    </div>

                                    {/* <div className={styles.section_back}>
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
                                    </div> */}
                                </div>

                                <div className={styles.btns_share}>
                                    <p>Compartilhar:</p>

                                    <a target="_blank" className="btn btn-primary mx-2" href={msg_email}><i class="bi bi-envelope"></i></a>
                                    <a target="_blank" className={styles.btn_whatsapp} href={msg_whats}><i class="bi bi-whatsapp"></i></a>
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
                                            <p>Às vezes as informações demoram de 5 a 10 dias para constar no sistema dos Correios. Volte mais tarde!</p>
                                        </div>
                                    </React.Fragment>
                                }
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