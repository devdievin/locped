import React from 'react';

// Components
import HeadComponent from '../../components/head';
import NavbarComponent from '../../components/navbar';
import MainComponent from '../../components/main';
import FooterComponent from '../../components/footer';

// import styles from './Privacy.module.css';

const AboutUs = (props) => {
    return (
        <React.Fragment>
            <HeadComponent title="Sobre Nós - LocPed" />
            <NavbarComponent />
            <MainComponent>
                <h2>Sobre Nós</h2>
            </MainComponent>
            <FooterComponent />
        </React.Fragment>
    );
}

export default AboutUs;