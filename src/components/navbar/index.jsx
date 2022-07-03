import React from 'react';
import Image from 'next/image';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';

import styles from './Navbar.module.css';

const NavbarComponent = (props) => (
    <header>
        <Navbar collapseOnSelect expand="md" className={styles.navbar_custom}>
            {/* <Navbar.Brand href="/"><span className={styles.nav_logo}><Image src={'/logo.png'} alt={'Logotipo LocPed'} width='140' height='30' /></span></Navbar.Brand> */}
            <Navbar.Brand href="/"><span className={styles.logo}><span className={styles.black_color}>LOC</span><span className={styles.primary_color}>PED</span></span></Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}

            <Navbar.Toggle aria-controls="responsive-navbar-nav">
                <a className={styles.toggle_button} data-toggle="collapse" role="button" aria-expanded="false" aria-controls="responsive-navbar-nav">
                    <i className="bi bi-three-dots-vertical"></i>
                </a>
            </Navbar.Toggle>
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Nav className="mse-auto">
                    <Nav.Link href="/contato" className={styles.item_link}>Contato</Nav.Link>
                    {/* <Nav.Link href="#link">Link</Nav.Link> */}
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
);

export default NavbarComponent;