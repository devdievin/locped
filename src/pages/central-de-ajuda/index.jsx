import React from 'react';
import FooterComponent from '../../components/footer';
import HeadComponent from '../../components/head';
import MainComponent from '../../components/main';
import NavbarComponent from '../../components/navbar';

const Ajuda = (props) => {
    return (
        <React.Fragment>
            <HeadComponent title="FaQ - LocPed" />
            <NavbarComponent page="help" />
            <MainComponent>
                <h2><strong>FaQ - LocPed</strong></h2>
            </MainComponent>
            <FooterComponent />
        </React.Fragment>
    );
}

export default Ajuda;