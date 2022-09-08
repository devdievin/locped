import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import Router from 'next/router';

// Components
import HeadComponent from '../components/head';
import NavbarComponent from '../components/navbar';
import MainComponent from '../components/main';
import FooterComponent from '../components/footer';

import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from '../styles/Home.module.css';
import { check } from '../utils/checkData';
import { resetForm } from '../utils/helpers';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ""
      // isLoading: true
    }
  }

  async componentDidMount() {
    this.setState({ ...this.state });
  }

  setCode = (event) => (this.setState({ code: event.target.value }));

  // Limpar Campo de busca ao apertar "ESC"
  handleKeyPress = (event) => {
    if (event.key === 'Escape') {
      this.clearCode();
    }
  }

  clearCode = () => {
    resetForm("search-main");
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { code } = this.state;

    (check(code)) ? Router.push(`/pacotes/${code}`) : alert("Código inválido! Tente Novamente."); this.clearCode();
  }

  render() {
    return (
      <React.Fragment>
        <HeadComponent title={"LocPed"} />
        <NavbarComponent page="home" />

        <MainComponent screen='home'>
          <div className={styles.section_title}>
            <h1 className={styles.title_text}>Localização de Pedidos</h1>
            <h4 className={styles.subtitle_text}>Acompanhe as entregas e saiba sempre onde está sua encomenda!</h4>
          </div>

          <Form onSubmit={this.handleSubmit} className={styles.form_track_code} id="search-main">
            <Form.Group controlId="formBasicName" className={styles.form_group_code}>
              <Form.Label>Código de rastreio:</Form.Label>
              <Form.Control type="text" className={styles.code_input} placeholder="Exemplo: LB123456789HK" onChange={this.setCode} onKeyDown={this.handleKeyPress} required />
            </Form.Group>

            <div className='text-center'>
              <button type="submit" className={styles.btn_track}>
                Rastrear
                <i className="bi bi-search ms-1"></i>
              </button>
            </div>
          </Form>

          {/* Animated Squares */}
          <ul className={styles.circles}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </MainComponent>
        <FooterComponent />
      </React.Fragment >
    );
  }
}

export default Home;
