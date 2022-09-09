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
                <h2><strong>Sobre Nós</strong></h2>
                <div className='mt-3'>
                    <p>O LOCPED começou como um projeto Hobbie para estudo e pela necessidade de um sistema de acompanhamento de entregas personalizado para uma necessidade pessoal.</p>
                    <p>Depois das primeiras linhas de código, pesquisas e prototipação. O projeto foi ganhando forma e gerando motivação para melhora-lo constantemente.</p>
                    <p>Projetado com foco em uma experiência de alta qualidade ao usuário final, seja no desktop ou no mobile. Buscando trazer facilidade, segurança e rapidez.</p>
                    <p>Estamos sempre buscando melhorar e tornar sua experiência a melhor possível. Assim ficamos felizes com seu feedback, para que possamos sempre evoluir.</p>
                    <p>Feito com muito 💖 por Dievin.</p>

                </div>
            </MainComponent>
            <FooterComponent />
        </React.Fragment>
    );
}

export default AboutUs;