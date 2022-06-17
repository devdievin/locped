import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import Router from 'next/router';

// Components
import HeadComponent from '../components/head';
import NavbarComponent from '../components/navbar';
import MainComponent from '../components/main';
import FooterComponent from '../components/footer';

import styles from '../styles/Home.module.css'

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

  handleSubmit = async (event) => {
    event.preventDefault();

    const { code } = this.state;
    // console.log(code);

    Router.push(`/pacotes/${code}`);
  }

  render() {
    // let { code } = this.state;
    return (
      <React.Fragment>
        <HeadComponent title={"Meu Rastreio"} />
        <NavbarComponent />

        <MainComponent>
          <h2>Rastrear Pedido</h2>

          <br />

          <Form onSubmit={this.handleSubmit} className={styles.form_track_code}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Código de rastreio:</Form.Label>
              <Form.Control type="text" placeholder="Exemplo: LB12345678HK" onChange={this.setCode} required />
              <Form.Text className="text-muted">
                Insira o código de rastreio do produto.
              </Form.Text>
            </Form.Group>

            <div className='text-center'>
              <Button type="submit" className={styles.btn_track}>
                Rastrear
              </Button>
            </div>
          </Form>
        </MainComponent>
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default Home;
