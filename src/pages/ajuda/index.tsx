import React from 'react';

// Components
import HeadComponent from '../../components/head';
import NavbarComponent from '../../components/navbar';
import MainComponent from '../../components/main';
import FooterComponent from '../../components/footer';
import { Accordion } from 'react-bootstrap';

import styles from './Help.module.css';

const PageHelp = (props) => {
    return (
        <React.Fragment>
            <HeadComponent title="Ajuda - LocPed" />
            <NavbarComponent />
            <MainComponent>
                <h2><strong>Central de Ajuda</strong></h2>

                <Accordion className='w-100 mt-4'>
                    <Accordion.Item eventKey="0" className={`mb-4 ${styles.accord_ask}`}>
                        <Accordion.Header><strong>O que é código de rastreio?</strong></Accordion.Header>
                        <Accordion.Body>
                            É um código composto por letras e números. Ele serve para registrar que uma encomenda foi postada e permite localizá-la durante o processo de envio.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className={`mb-4 ${styles.accord_ask}`}>
                        <Accordion.Header><strong>Onde consigo o código de rastreio?</strong></Accordion.Header>
                        <Accordion.Body>
                            Quando a postagem da encomenda é feita, a transportadora gera um código de rastreio. Ele é enviado ao cliente para poder acompanhar o processo de entrega.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className={`mb-4 ${styles.accord_ask}`}>
                        <Accordion.Header><strong>Quais transportadoras estão no LocPed?</strong></Accordion.Header>
                        <Accordion.Body>
                            No momento temos cobertura de entregas feitas apenas pelos <strong>Correios.</strong>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className={`mb-4 ${styles.accord_ask}`}>
                        <Accordion.Header><strong>É preciso pagar para usar o LocPed?</strong></Accordion.Header>
                        <Accordion.Body>
                            Não, você pode rastrear sua encomenda de forma gratuita.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className={`mb-4 ${styles.accord_ask}`}>
                        <Accordion.Header><strong>Meu pedido não foi encontrado, e agora?</strong></Accordion.Header>
                        <Accordion.Body>
                            <p><strong>Passo 1:</strong> Primeiro de tudo, verifique se você digitou o código de rastreio corretamente.</p>
                            <p><strong>Passo 2:</strong> Isso ocorre nas primeiras horas para pedidos nacionais e alguns dias para pedidos internacionais. Aguarde até 72 horas, se o status não mudar entre em contato com a transportadora responsável pela entrega.</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5" className={`mb-4 ${styles.accord_ask}`}>
                        <Accordion.Header><strong>Quando tento rastrear minha entrega aparece essa mensagem: "Objeto inválido!"</strong></Accordion.Header>
                        <Accordion.Body>
                            <p>Esse erro ocorre quando você tenta inserir um código de rastreio que não existe.</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6" className={`mb-4 ${styles.accord_ask}`}>
                        <Accordion.Header><strong>Não consigo rastrear meu pedido, erro: "Serviço Indisponível!"</strong></Accordion.Header>
                        <Accordion.Body>
                            <p>Esse erro ocorre quando há instabilidades ou o sistema da transportadora está fora do ar. Aguarde um tempo até que as atividades se normalizem.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <p className='mt-3 text-center'>Qualquer dúvida ou sugestão nos mande no e-mail <strong>{process.env.SUPP_EMAIL}</strong></p>

            </MainComponent>
            <FooterComponent />
        </React.Fragment>
    );
}

export default PageHelp;