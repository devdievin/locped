import React from 'react';

// Components
import HeadComponent from '../../components/head';
import NavbarComponent from '../../components/navbar';
import MainComponent from '../../components/main';
import FooterComponent from '../../components/footer';

import styles from './About.module.css';

const AboutUs = (props) => {
    return (
        <React.Fragment>
            <HeadComponent title="Sobre Nós - LocPed" />
            <NavbarComponent />
            <MainComponent>
                <h2><strong>Sobre Nós</strong></h2>
                <div className='mt-3'>
                    <p>O LOCPED começou como um projeto Hobbie para estudo e pela necessidade de um sistema de acompanhamento de entregas personalizado de interesse pessoal.</p>
                    <p>Depois das primeiras linhas de código, horas de pesquisas e prototipação. O projeto foi ganhando forma e gerando motivação para melhorá-lo constantemente.</p>
                    <p>Projetado com foco em uma experiência de alta qualidade ao usuário final, seja no desktop ou no mobile. Buscando trazer facilidade, segurança e rapidez no rastreamento de entregas.</p>
                    <p>Estamos sempre buscando melhorar e tornar sua experiência a melhor possível. Assim ficamos felizes com seu feedback, para que possamos sempre evoluir.</p>
                    <p>
                        Feito com
                        <span className={`${styles.heart_icon} mx-1`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                        </span>
                        por Dievin.
                    </p>

                </div>
            </MainComponent>
            <FooterComponent />
        </React.Fragment>
    );
}

export default AboutUs;