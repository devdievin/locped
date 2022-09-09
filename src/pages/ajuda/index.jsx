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
                <h2><strong>Ajuda</strong></h2>
                
                <Accordion className='w-100 mt-4'>
                    <Accordion.Item eventKey="0" className={`mb-4 ${styles.accord_ask}`}>
                        <Accordion.Header><strong>O que é código de rastreio?</strong></Accordion.Header>
                        <Accordion.Body>
                            É um código composto por letras e números para rastrear sua entrega no sistema da transportadora.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className={`mb-4 ${styles.accord_ask}`}>
                        <Accordion.Header><strong>Quais transportadoras estão no sistema?</strong></Accordion.Header>
                        <Accordion.Body>
                            No momento temos cobertura de entregas feitas apenas pelos Correios.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className={`mb-4 ${styles.accord_ask}`}>
                        <Accordion.Header><strong>Meu pedido não foi encontrado, e agora?</strong></Accordion.Header>
                        <Accordion.Body>
                            <p>Passo 1: Primeiro de tudo, verifique se você digitou o código de rastreio corretamente.</p>
                            <p>Passo 2: Isso ocorre nas primeiras horas para pedidos nacionais e alguns dias para pedidos internacionais. Aguarde até 72 horas, se o status não mudar entre em contato com a transportadora responsável pela entrega.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <p>Qualquer dúvida ou sugestão nos mande no e-mail fulano@email.com</p>

            </MainComponent>
            <FooterComponent />
        </React.Fragment>
    );
}

export default PageHelp;