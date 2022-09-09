import React from 'react';

// Components
import HeadComponent from '../../components/head';
import NavbarComponent from '../../components/navbar';
import MainComponent from '../../components/main';
import FooterComponent from '../../components/footer';

// import styles from './Term.module.css';

const TermsOfService = (props) => {
    return (
        <React.Fragment>
            <HeadComponent title="Termos de Serviço - LocPed" />
            <NavbarComponent />
            <MainComponent>
                <div  className='text-center'>
                    <h2><strong>Termos e condições de uso do site</strong></h2>
                </div>
                <br />
                <p>Seja bem-vindo ao nosso site. Leia com muita atenção todos os termos abaixo.</p>
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
                    <p>Em caso de qualquer dúvida, sugestão ou problema com a utilização da plataforma, o usuário poderá entrar em contato com o suporte, através do email EMAIL AQUI.</p>
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
                    <p>Os itens descritos no presente instrumento poderão sofrer alterações, unilateralmente e aqualquer tempo, por parte do LocPed, para adequar ou modificar os serviços, bem como para atender novas exigências legais. As alterações serão veiculadas OU pelo site <a href="https://locped.vercel.app">https://locped.vercel.app</a> OU pelo aplicativo LocPed e o usuário poderá optar por aceitar o novo conteúdo ou por cancelar o uso dos serviços, caso seja assinante de algum serviço.</p>

                    <br />

                    <h4 className='mb-3'>10. Da política de privacidade</h4>
                    <p>Além do presente Termo, o usuário deverá consentir com as disposições contidas na respectiva Política de Privacidade a ser apresentada a todos os interessados dentro da interface da plataforma.</p>

                    <p>Este termo de uso é efetivo a partir de <strong>Julho</strong>/<strong>2022</strong>.</p>
                    {/* <p>O site LocPed é um serviço apenas para consulta e acompanhamento de entregas. Qualquer dúvida ou problema com sua encomenda, você deverá entrar em contato com a empresa responsável pela sua entrega.</p>
                    <p>Não nos responsabilizamos por atrasos, extravios e quaisquer problemas relacionados as entregas. Prestamos um serviço apenas de consulta das informações de rastreio de entregas.</p>
                    <p>Ao utilizar o nosso site você concorda com os termos e condições de uso aqui descritas.</p> */}
                </div>
                {/* <p> </p>
                <p>Seja bem-vindo ao nosso site. Leia com muita atenção todos os termos abaixo.</p>
                <p> </p>
                <p>Este documento, e todo o conteúdo do site é oferecido por <strong>LocPed</strong>, neste termo representado apenas por "EMPRESA", que regulamenta todos os direitos e obrigações com todos que acessam o site, denominado neste termo como "VISITANTE", reguardado todos os direitos previstos na legislação, trazem as cláusulas abaixo como requisito para acesso e visita do mesmo, situado no endereço <strong>https://locped.vercel.app/.</strong></p>
                <p> </p>
                <p>A permanência no website implica-se automaticamente na leitura e aceitação tácita do presente termos de uso a seguir. Este termo foi atualizado pela última vez em 14 de setembro de 2021.</p>
                <p> </p>
                <h3><strong>1. DA FUNÇÃO DO SITE</strong></h3>
                <p> </p>
                <p>Este site foi criado e desenvolvido com a função de trazer conteúdo informativo de alta qualidade, a venda de produtos físicos, digitais e a divulgação de prestação de serviço. A EMPRESA busca através da criação de conteúdo de alta qualidade, desenvolvido por profissionais da área, trazer o conhecimento ao alcance de todos, assim como a divulgação dos próprios serviços.</p>
                <p> </p>
                <p>Nesta plataforma, poderá ser realizado tanto a divulgação de material original de alta qualidade, assim como a divulgação de produtos de e-commerce.</p>
                <p> </p>
                <p>Todo o conteúdo presente neste site foi desenvolvido buscando fontes e materiais de confiabilidade, assim como são baseados em estudos sérios e respeitados, através de pesquisa de alta nível.</p>
                <p> </p>
                <p>Todo o conteúdo é atualizado periodicamente, porém, pode conter em algum artigo, vídeo ou imagem, alguma informação que não reflita a verdade atual, não podendo a EMPRESA ser responsabilizada de nenhuma forma ou meio por qualquer conteúdo que não esteja devidamente atualizado.</p>
                <p> </p>
                <p>É de responsabilidade do usuário de usar todas as informações presentes no site com senso crítico, utilizando apenas como fonte de informação, e sempre buscando especialistas da área para a solução concreta do seu conflito.</p>
                <p> </p>
                <h3>2. <strong>DO ACEITE DOS TERMOS</strong></h3>
                <p> </p>
                <p>Este documento, chamado "Termos de Uso", aplicáveis a todos os visitantes do site, foi desenvolvido por <a href="https://diegocastro.adv.br/">Diego Castro</a> Advogado - OAB/PI 15.613, modificado com permissão para este site.</p>
                <p> </p>
                <p>Este termo especifica e exige que todo usuário ao acessar o site da EMPRESA, leia e compreenda todas as cláusulas do mesmo, visto que ele estabelece entre a EMPRESA e o VISITANTE direitos e obrigações entre ambas as partes, aceitos expressamente pelo VISITANTE a permanecer navegando no site da EMPRESA.</p>
                <p> </p>
                <p>Ao continuar acessando o site, o VISITANTE expressa que aceita e entende todas as cláusulas, assim como concorda integralmente com cada uma delas, sendo este aceite imprescindível para a permanência na mesma. Caso o VISITANTE discorde de alguma cláusula ou termo deste contrato, o mesmo deve imediatamente interromper sua navegação de todas as formas e meios.</p>
                <p> </p>
                <p>Este termo pode e irá ser atualizado periodicamente pela EMPRESA, que se resguarda no direito de alteração, sem qualquer tipo de aviso prévio e comunicação. É importante que o VISITANTE confira sempre se houve movimentação e qual foi a última atualização do mesmo no começo da página.</p>
                <p> </p>
                <h3><strong>3. DO GLOSSÁRIO</strong></h3>
                <p> </p>
                <p>Este termo pode conter algumas palavras específicas que podem não se de conhecimento geral. Entre elas:</p>
                <p> </p>
                <ul>
                    <li><strong>VISITANTE: </strong>Todo e qualquer usuário do site, de qualquer forma e meio, que acesse através de computador, notebook, tablet, celular ou quaisquer outros meios, o website ou plataforma da empresa.</li>
                    <li><strong>NAVEGAÇÃO: </strong>O ato de visitar páginas e conteúdo do website ou plataforma da empresa.</li>
                    <li><strong>COOKIES:</strong> Pequenos arquivos de textos gerados automaticamente pelo site e transmitido para o navegador do visitante, que servem para melhorar a usabilidade do visitante.</li>
                    <li><strong>LOGIN:</strong> Dados de acesso do visitante ao realizar o cadastro junto a EMPRESA, dividido entre usuário e senha, que dá acesso a funções restritas do site.</li>
                    <li><strong>HIPERLINKS: </strong>São links clicáveis que podem aparecer pelo site ou no conteúdo, que levam para outra página da EMPRESA ou site externo.</li>
                    <li><strong>OFFLINE:</strong> Quando o site ou plataforma se encontra indisponível, não podendo ser acessado externamente por nenhum usuário.</li>
                </ul>
                <p> </p>
                <p>Em caso de dúvidas sobre qualquer palavra utilizada neste termo, o VISITANTE deverá entrar em contato com a EMPRESA através dos canais de comunicação encontradas no site.</p>
                <p> </p>
                <h3>4<strong>. DO ACESSO AO SITE</strong></h3>
                <p> </p>
                <p>O Site e plataforma funcionam normalmente 24 (vinte e quatro) horas por dia, porém podem ocorrer pequenas interrupções de forma temporária para ajustes, manutenção, mudança de servidores, falhas técnicas ou por ordem de força maior, que podem deixar o site indisponível por tempo limitado.</p>
                <p> </p>
                <p>A EMPRESA não se responsabiliza por nenhuma perda de oportunidade ou prejuízos que esta indisponibilidade temporária possa gerar aos usuários.</p>
                <p> </p>
                <p>Em caso de manutenção que exigirem um tempo maior, a EMPRESA irá informar previamente aos clientes da necessidade e do tempo previsto em que o site ou plataforma ficará offline.</p>
                <p> </p>
                <p>O acesso ao site só é permitido a maiores de 18 anos de idade ou que possuírem capacidade civil plena. Para acesso de menores de idade, é necessária a expressa autorização dos pais ou tutores, ficando o mesmo responsáveis sobre qualquer compra ou acesso efetuados pelo mesmo.</p>
                <p> </p>
                <p>Caso seja necessário realizar um cadastro junto a plataforma, onde o VISITANTE deverá preencher um formulário com seus dados e informações, para ter acesso a alguma parte restrita, ou realizar alguma compra.</p>
                <p> </p>
                <p>Todos os dados estão protegidos conforme a Lei Geral de Proteção de Dados, e ao realizar o cadastro junto ao site, o VISITANTE concorda integralmente com a coleta de dados conforme a Lei e com a Política de Privacidade da EMPRESA.</p>
                <p> </p>
                <h3><strong>5. DA LICENÇA DE USO E CÓPIA</strong></h3>
                <p> </p>
                <p>O visitante poderá acessar todo o conteúdo do website, como artigos, vídeos, imagens, produtos e serviços, não significando nenhum tipo de cessão de direito ou permissão de uso, ou de cópia dos mesmo.</p>
                <p> </p>
                <p>Todos os direitos são preservados, conforme a legislação brasileira, principalmente na Lei de Direitos Autorais (regulamentada na <a href="http://www.planalto.gov.br/ccivil_03/leis/l9610.htm">Lei nº 9.610/18</a>), assim como no Código Civil brasileiro (regulamentada na <a href="http://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm">Lei nº 10.406/02</a>), ou quaisquer outras legislações aplicáveis.</p>
                <p> </p>
                <p>Todo o conteúdo do site é protegido por direitos autorais, e seu uso, cópia, transmissão, venda, cessão ou revenda, deve seguir a lei brasileira, tendo a EMPRESA todos os seus direitos reservados, e não permitindo a cópia ou utilização de nenhuma forma e meio, sem autorização expressa e por escrita da mesma.</p>
                <p> </p>
                <p>A EMPRESA poderá em casos concretos permitir pontualmente exceções a este direito, que serão claramente destacados no mesmo, com a forma e permissão de uso do conteúdo protegido. Este direito é revogável e limitado as especificações de cada caso.</p>
                <p> </p>
                <h3>6.<strong> DAS OBRIGAÇÕES</strong></h3>
                <p> </p>
                <p>O VISITANTE ao utilizar o website da EMPRESA, concorda integralmente em:</p>
                <p> </p>
                <ul>
                    <li>De nenhuma forma ou meio realizar qualquer tipo de ação que tente invadir, hacker, destruir ou prejudicar a estrutura do site, plataforma da EMPRESA ou de seus parceiros comerciais. Incluindo-se, mas não se limitando, ao envio de vírus de computador, de ataques de DDOS, de acesso indevido por falhas da mesma ou quaisquer outras forma e meio.</li>
                    <li>De não realizar divulgação indevida nos comentários do site de conteúdo de SPAM, empresas concorrentes, vírus, conteúdo que não possua direitos autorais ou quaisquer outros que não seja pertinente a discussão daquele texto, vídeo ou imagem.</li>
                    <li>Da proibição em reproduzir qualquer conteúdo do site ou plataforma sem autorização expressa, podendo responder civil e criminalmente pelo mesmo.</li>
                    <li>Com a Política de Privacidade do site, assim como tratamos os dados referentes ao cadastro e visita no site, podendo a qualquer momento e forma, requerer a exclusão dos mesmos, através do formulário de contato.</li>
                </ul>
                <p> </p>
                <h3><strong>7. DA MONETIZAÇÃO E PUBLICIDADE</strong></h3>
                <p> </p>
                <p>A EMPRESA pode alugar ou vender espaços publicitários na plataforma, ou no site, diretamente aos anunciantes, ou através de empresas especializadas com o Adsense (<a href="https://www.google.com/">Google</a>), Taboola ou outras plataformas especializadas como o <a href="https://eletrocriticas.com/">Eletro Críticas.</a></p>
                <p> </p>
                <p>Essas publicidades não significam nenhuma forma de endosso ou responsabilidade pelos mesmos, ficando o VISITANTE responsável pelas compras, visitas, acessos ou quaisquer ações referentes as estas empresas.</p>
                <p> </p>
                <p>Todas as propagandas no site ou plataforma serão claramente destacadas como publicidade, como forma de disclaimer da EMPRESA e de conhecimento do VISITANTE.</p>
                <p> </p>
                <p>Em casos de compra de produtos ou serviços, será possível a devolução em até 07 (sete) dias, conforme o Código de Defesa do Consumidor.</p>
                <p> </p>
                <p>Estes anúncios podem ser selecionados pela empresa de publicidade automaticamente, conforme as visitas recentes do VISITANTE, assim como baseado no seu histórico de busca, conforme as políticas de acesso da plataforma.</p>
                <p> </p>
                <h3>8. <strong>DOS TERMOS GERAIS</strong></h3>
                <p> </p>
                <p>O Site irá apresentar hiperlinks durante toda a sua navegação, que podem levar diretamente para outra página da EMPRESA ou para sites externos.</p>
                <p> </p>
                <p>Apesar da EMPRESA apenas criar links para sites externos de extrema confiança, caso o usuário acesse um site externo, a EMPRESA não tem nenhuma responsabilidade pelo meio, sendo uma mera indicação de complementação de conteúdo, ficando o mesmo responsável pelo acesso, assim como sobre quaisquer ações que venham a realizar neste site.</p>
                <p> </p>
                <p>Em caso que ocorra eventuais conflitos judiciais entre o VISITANTE e a EMPRESA, o foro elegido para a devida ação será o da comarca da Empresa, mesmo que haja outro mais privilegiado.</p>
                <p> </p>
                <p>Este Termo de uso é valido a partir de 14 de setembro de 2021.</p>
                <p> </p> */}
            </MainComponent>
            <FooterComponent />
        </React.Fragment>
    );
}

export default TermsOfService;