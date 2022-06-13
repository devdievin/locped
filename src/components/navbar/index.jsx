import React from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';

import styles from './Navbar.module.css';

const NavbarComponent = (props) => (
    <header>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className={styles.navbar_custom}>
            <Navbar.Brand href="/"><span className={""}>Meu Rastreio</span></Navbar.Brand>
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