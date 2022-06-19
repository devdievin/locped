import React from 'react';
import Image from 'next/image';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';

import styles from './Navbar.module.css';

const NavbarComponent = (props) => (
    <header>
        <Navbar collapseOnSelect expand="md" className={styles.navbar_custom}>
                <Navbar.Brand href="/"><span className={styles.nav_logo}><Image src={'/logo.png'} alt={'Logotipo LocPed'} width='160' height='34' /></span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav>
                        {/* <Button variant="primary">Saiba Mais</Button> */}
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    </header>
);

export default NavbarComponent;