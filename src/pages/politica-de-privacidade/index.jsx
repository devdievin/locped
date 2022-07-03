import React from 'react';

// Components
import HeadComponent from '../../components/head';
import NavbarComponent from '../../components/navbar';
import MainComponent from '../../components/main';
import FooterComponent from '../../components/footer';

import styles from './Privacy.module.css';

const PrivacyPolicy = (props) => {
    return (
        <React.Fragment>
            <HeadComponent title="Política de Privacidade - LocPed" />
            <NavbarComponent />
            <MainComponent>
                <h2>Política de Privacidade</h2>
            </MainComponent>
            <FooterComponent />
        </React.Fragment>
    );
}

export default PrivacyPolicy;