import React from 'react';
import Image from 'next/image';
import { Navbar, Nav, Button, NavDropdown, Form } from 'react-bootstrap';
// import { useRouter } from 'next/router';
import { useState } from "react";

import styles from './Navbar.module.css';

const NavbarComponent = (props) => {
    // const router = useRouter();
    const [code, setCode] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // router.push(`/pacotes/${code}`);
        window.location.href = `/pacotes/${code}`;
    }

    return (
        <header>
            <div className={styles.navbar_custom}>
                <Navbar collapseOnSelect expand="md" className={styles.navbar_container}>
                    {/* <Navbar.Brand href="/"><span className={styles.nav_logo}><Image src={'/logo.png'} alt={'Logotipo LocPed'} width='140' height='30' /></span></Navbar.Brand> */}
                    <Navbar.Brand href="/"><span className={styles.logo}><span className={styles.black_color}>LOC</span><span className={styles.primary_color}>PED</span></span></Navbar.Brand>

                    {/* <Navbar.Toggle data-target="#search-navbar-nav">
                        <a className={styles.toggle_button} data-toggle="collapse" data-target="#search-navbar-nav" role="button" aria-expanded="false" aria-controls="search-navbar-nav">
                            <i class="bi bi-search"></i>
                        </a>
                    </Navbar.Toggle> */}

                    <Navbar.Toggle aria-controls="responsive-navbar-nav">
                        <a className={styles.toggle_button} data-toggle="collapse" role="button" aria-expanded="false" aria-controls="responsive-navbar-nav">
                            <i className="bi bi-three-dots-vertical"></i>
                        </a>
                    </Navbar.Toggle>

                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav className="mse-auto">
                            {(props.page !== 'home') ?
                                <Form onSubmit={handleSubmit} className='my-auto'>
                                    <div className={`${styles.group_btn_search} me-4`}>
                                        <input type="text" className={`${styles.input_nav_search}`} placeholder="Código de rastreio" aria-label="Código de rastreio" aria-describedby="button-addon2" value={code} onChange={e => { setCode(e.currentTarget.value); }} required="true" />
                                        <button type="submit" className={`${styles.btn_nav_search}`} id="button-addon2"><i className="bi bi-search"></i></button>
                                    </div>
                                </Form>
                                : ""
                            }
                            <Nav.Link href="/#" className={styles.item_link}>Ajuda</Nav.Link>
                            <Nav.Link href="/contato" className={styles.item_link}>Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    );
}

export default NavbarComponent;