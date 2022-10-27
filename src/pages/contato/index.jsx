import React, { Component } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

// Components
import HeadComponent from '../../components/head';
import NavbarComponent from '../../components/navbar';
import MainComponent from '../../components/main';
import ButtonComponent from '../../components/button';
import FooterComponent from '../../components/footer';

import styles from './Contact.module.css';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            msg: '',
            to: 'dievanodantas@gmail.com'
        }
    }

    async componentDidMount() {
        this.setState({ ...this.state });
    }

    setName = (event) => (this.setState({ name: event.target.value }));

    setEmail = (event) => (this.setState({ email: event.target.value }));

    setMsg = (event) => (this.setState({ msg: event.target.value }));

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Enviando...');
    }

    render() {
        const { to } = this.state;
        return (
            <React.Fragment>
                <HeadComponent title={"Contato - LocPed"} />
                <NavbarComponent />

                <MainComponent>
                    <div className={styles.title_section}>
                        <h2 className={styles.contact_title}>Contato</h2>
                    </div>
                    <Form action={`mailto:${to}`} method='post' encType='text/plain' className={styles.form_contact}>
                        <Row>
                            <Form.Group as={Col} sm={12} md={6} controlId="formGridName" className='mb-3'>
                                <Form.Control type="text" placeholder="Seu Nome" required="true" />
                            </Form.Group>

                            <Form.Group as={Col} sm={12} md={6} controlId="formGridEmail" className='mb-3'>
                                <Form.Control type="email" placeholder="Seu E-mail" required="true" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={10} placeholder="Escreva sua mensagem aqui..." required="true" />
                        </Form.Group>

                        <div className={styles.button_section}>
                            <ButtonComponent type="submit" text="Enviar" iconPosition='r-icon' icon='bi bi-chat' />
                        </div>
                    </Form>
                </MainComponent>

                <FooterComponent />
            </React.Fragment>
        );
    }
}

export default Contact;