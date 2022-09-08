import React from 'react';

// Components
import HeadComponent from '../../components/head';
import NavbarComponent from '../../components/navbar';
import MainComponent from '../../components/main';
import FooterComponent from '../../components/footer';

// import styles from './Help.module.css';

const PageHelp = (props) => {
    return (
        <React.Fragment>
            <HeadComponent title="Ajuda - LocPed" />
            <NavbarComponent />
            <MainComponent>
                <h2>Ajuda</h2>
            </MainComponent>
            <FooterComponent />
        </React.Fragment>
    );
}

export default PageHelp;