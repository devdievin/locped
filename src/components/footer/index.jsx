import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Link from 'next/link';

import styles from "./Footer.module.css";

const FooterComponent = (props) => {
    return (
        <footer className={styles.footer_custom}>
            <div className={styles.section_list_footer}>
                <Row>
                    {/* SOBRE */}
                    <Col md={8} lg={8} className={styles.about_column}>
                        <h5>LOCPED</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum adipisci quasi ad voluptatibus, animi eligendi autem repellendus consectetur illo reiciendis veniam delectus quo tempora voluptatum, sed maiores eos ratione quis.</p>
                        <span>Icon by <Link href="https://freeicons.io/profile/5790">ColourCreatype</Link>, <Link href="https://freeicons.io/profile/722">Fasil</Link> on <Link href="https://freeicons.io">freeicons.io</Link></span>                                
                        {/* OUTROS ICONES PARA FAZER ATRIBUIÇÃO */}
                        {/* Icon by <a href="https://freeicons.io/profile/730">Anu Rocks</a> on <a href="https://freeicons.io">freeicons.io</a> */}
                        {/* Icon by <a href="https://freeicons.io/profile/726">Free Preloaders</a> on <a href="https://freeicons.io">freeicons.io</a> */}
                    </Col>
                    {/* INFORMAÇÕES ÚTEIS */}
                    <Col>
                        <h5>INFORMAÇÕES ÚTEIS</h5>
                        <ul className={styles.list_footer}>
                            <li className={styles.footer_link}><Link href="/">Política de Privacidade</Link></li>
                            <li><Link href="/">Termos de Uso</Link></li>
                            <li><Link href="/">Sobre Nós</Link></li>
                            <li><Link href="/">Contato</Link></li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className={styles.copyright}>
                <span>© 2022 Locped, by Dievin - Todos os Direitos Reservados</span>
                {/* <span>Criado por Dievin</span> */}
            </div>
        </footer>
    );
}

export default FooterComponent;