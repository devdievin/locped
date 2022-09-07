import React from 'react';
import Image from 'next/image';
import { Navbar, Nav, Button, NavDropdown, Form } from 'react-bootstrap';

import styles from './Navbar.module.css';

const NavbarComponent = (props) => (
    <header>
        <div className={styles.navbar_custom}>
            <Navbar collapseOnSelect expand="md" className={styles.navbar_container}>
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
                        {/* <div className="input-group me-3">
                            <input type="text" className="form-control" placeholder="Código de rastreio" aria-label="Código de rastreio" aria-describedby="button-addon2" />
                            <button className={`btn ${styles.btn_nav_search}`} type="button" id="button-addon2"><i className="bi bi-search"></i></button>
                        </div> */}
                        <Form className='my-auto'>
                            <div className={`${styles.group_btn_search} me-3`}>
                                <input type="text" className={`${styles.input_nav_search}`} placeholder="Código de rastreio" aria-label="Código de rastreio" aria-describedby="button-addon2" required="true"/>
                                <button type="submit" className={`${styles.btn_nav_search}`} id="button-addon2"><i className="bi bi-search"></i></button>
                            </div>
                        </Form>

                        <Nav.Link href="/#" className={styles.item_link}>Ajuda</Nav.Link>
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
        </div>
    </header>
);

export default NavbarComponent;