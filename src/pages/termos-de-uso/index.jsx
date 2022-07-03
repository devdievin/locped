import React from 'react';

// Components
import HeadComponent from '../../components/head';
import NavbarComponent from '../../components/navbar';
import MainComponent from '../../components/main';
import FooterComponent from '../../components/footer';

// import styles from './Privacy.module.css';

const TermsOfUse = (props) => {
    return (
        <React.Fragment>
            <HeadComponent title="Termos de Uso - LocPed" />
            <NavbarComponent />
            <MainComponent>
                <h2>Termos de Uso</h2>
            </MainComponent>
            <FooterComponent />
        </React.Fragment>
    );
}

export default TermsOfUse;