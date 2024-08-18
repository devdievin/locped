import React, { useState, useEffect } from 'react';

// Components
import HeadComponent from '../../components/head';
import NavbarComponent from '../../components/navbar';
import MainComponent from '../../components/main';
import FooterComponent from '../../components/footer';
import ButtonGoTop from '../../components/btnGoTop';

import styles from './Term.module.css';

const TermsOfService = (props) => {
    const [showBtnTop, setShowBtnTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => ((window.scrollY > window.screen.height) ? setShowBtnTop(true) : setShowBtnTop(false)));
    })

    return (
        <React.Fragment>
            <HeadComponent title="Termos de Serviço - LocPed" />
            <NavbarComponent />
            <MainComponent>
                <div className='text-center'>
                    <h2><strong>Termos de Serviço</strong></h2>
                </div>
                <br />
                <p className='text-center mb-4'>Seja bem-vindo ao nosso site. Leia com muita atenção todos os termos abaixo.</p>
                <div className='mb-3'>
                    <h4>1. Do objeto</h4>
                    <p>A plataforma visa licenciar o uso de seu software, website, aplicativos e demais ativos de propriedade intelectual, fornecendo ferramentas para auxiliar e dinamizar o dia a dia dos seus usuários.</p>
                    <p>A plataforma caracteriza-se pela prestação do seguinte serviço: rastreamento de entregas.</p>
                    {/* <p>A plataforma realiza a venda à distancia por meio eletrônico dos seguintes produtos ou serviços: _______</p> */}
                    <p>O site LocPed é um serviço apenas para consulta e acompanhamento de entregas. Qualquer dúvida ou problema com sua encomenda, você deverá entrar em contato com a empresa responsável pela sua entrega.</p>
                    <p>Não nos responsabilizamos por atrasos, extravios e quaisquer problemas relacionados as entregas. Prestamos um serviço apenas de consulta das informações de rastreio de entregas.</p>
                    <p>Ao utilizar o nosso site você concorda com os termos e condições de uso aqui descritos.</p>

                    <br />

                    <h4 className='mb-3'>2. Da aceitação</h4>
                    <p>O presente Termo estabelece obrigações contratadas de livre e espontânea vontade, por tempo indeterminado, entre a plataforma e as pessoas físicas ou jurídicas, usuários do site.</p>
                    <p>Ao utilizar a plataforma o usuário aceita integralmente as presentes normas e compromete-se a observá-las, sob o risco de aplicação das penalidade cabíveis.</p>
                    <p>A aceitação do presente instrumento é imprescindível para o acesso e para a utilização de quaisquer serviços fornecidos pela empresa. Caso não concorde com as disposições deste instrumento, o usuário não deve utilizá-los.</p>

                    <br />

                    <h4 className='mb-3'>3. Do acesso dos usuários</h4>
                    <p>Serão utilizadas todas as soluções técnicas à disposição do responsável pela plataforma para permitir o acesso ao serviço 24 (vinte e quatro) horas por dia, 7 (sete) dias por semana. No entanto, a navegação na plataforma ou em alguma das páginas poderá ser interrompida, limitada ou suspensa para atualizações, modificações ou qualquer ação necessária ao seu bom funcionamento.</p>

                    <br />

                    <h4 className='mb-3'>4. Do suporte</h4>
                    <p>Em caso de qualquer dúvida, sugestão ou problema com a utilização da plataforma, o usuário poderá entrar em contato com o suporte, através do email: <strong>{process.env.SUPP_EMAIL}</strong></p>
                    <p>Estes serviços de atendimento ao usuário estarão disponíveis nos seguintes dias e horários: <u>Segunda à Sexta das 09:00 às 17:00</u>.</p>

                    <br />

                    <h4 className='mb-3'>5. Das responsabilidades</h4>
                    <p>É de responsabilidade do usuário:</p>
                    <p>a) defeitos ou vícios técnicos originados no próprio sistema do usuário;</p>
                    <p>b) a correta utilização da plataforma, dos serviços ou produtos oferecidos, prezando pela boa convivência, pelo respeito e cordialidade entre os usuários;</p>
                    <p>c) pelo cumprimento e respeito ao conjunto de regras disposto nesse Termo de Condições Geral de Uso, na respectiva Política de Privacidade e na legislação nacional e internacional;</p>
                    <p>d) pela proteção aos dados de acesso à sua conta/perfil (login e senha).</p>
                    <br />
                    <p>É de responsabilidade da plataforma LocPed:</p>

                    <p>a) indicar as características do serviço ou produto;</p>
                    <p>b) os defeitos e vícios encontrados no serviço ou produto oferecido desde que lhe tenha dado causa;</p>
                    <p>c) as informações que foram por ele divulgadas, sendo que os comentários ou informações divulgadas por usuários são de inteira responsabilidade dos próprios usuários;</p>
                    <p>d) os conteúdos ou atividades ilícitas praticadas através da sua plataforma.</p>
                    <br />
                    <p>A plataforma não se responsabiliza por links externos contidos em seu sistema que possam redirecionar o usuário à ambiente externo a sua rede.</p>
                    <p>Não poderão ser incluídos links externos ou páginas que sirvam para fins comerciais ou publicitários ou quaisquer informações ilícitas, violentas, polêmicas, pornográficas,xenofóbicas, discriminatórias ou ofensivas.</p>

                    <br />

                    <h4 className='mb-3'>6. Dos direitos autorais</h4>
                    <p>O presente Termo de Uso concede aos usuários uma licença não exclusiva, não transferível e não sublicenciável, para acessar e fazer uso da plataforma e dos serviços e produtos por ela disponibilizados.</p>
                    <p>Este Termos de Uso não cede ou transfere ao usuário qualquer direito, de modo que o acesso não gera qualquer direito de propriedade intelectual ao usuário, exceto pela licença limitada ora concedida.</p>
                    <p>O uso da plataforma pelo usuário é pessoal, individual e intransferível, sendo vedado qualquer uso não autorizado, comercial ou não-comercial. Tais usos consistirão em violação dos direitos de propriedade intelectual da razão social LocPed, puníveis nos termos da legislação aplicável.</p>

                    <br />

                    <h4 className='mb-3'>7. Das sanções</h4>
                    <p>Sem prejuízo das demais medidas legais cabíveis, a razão social LocPed poderá, a qualquer momento, advertir, suspender ou cancelar a conta do usuário:</p>

                    <p>a) que violar qualquer dispositivo do presente Termo;</p>
                    <p>b) que descumprir os seus deveres de usuário;</p>
                    <p>c) que tiver qualquer comportamento fraudulento, doloso ou que ofenda a terceiros.</p>

                    <br />

                    <h4 className='mb-3'>8. Da rescisão</h4>
                    <p>A não observância das obrigações pactuadas neste Termo de Uso ou da legislação aplicável poderá, sem prévio aviso, ensejar a imediata rescisão unilateral por parte da razão social LocPed e o bloqueio de todos os serviços prestados ao usuário.</p>

                    <br />

                    <h4 className='mb-3'>9. Das alterações</h4>
                    <p>Os itens descritos no presente instrumento poderão sofrer alterações, unilateralmente e aqualquer tempo, por parte do LocPed, para adequar ou modificar os serviços, bem como para atender novas exigências legais. As alterações serão veiculadas OU pelo site <a href={process.env.URL_DEFAULT}>{process.env.URL_DEFAULT}</a> OU pelo aplicativo LocPed e o usuário poderá optar por aceitar o novo conteúdo ou por cancelar o uso dos serviços, caso seja assinante de algum serviço.</p>

                    <br />

                    <h4 className='mb-3'>10. Da política de privacidade</h4>
                    <p>Além do presente Termo, o usuário deverá consentir com as disposições contidas na respectiva Política de Privacidade a ser apresentada a todos os interessados dentro da interface da plataforma.</p>

                    <p>Este termo de uso é efetivo a partir de <strong>Julho</strong>/<strong>2022</strong>.</p>
                </div>

                {/* BOTÃO SCROLL TO TOP */}
                {(showBtnTop === true) ? <ButtonGoTop /> : ""}

            </MainComponent>
            <FooterComponent />
        </React.Fragment>
    );
}

export default TermsOfService;