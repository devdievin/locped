import React from 'react';
import Image from 'next/image';
import { Navbar, Nav, Button, NavDropdown, Form, Collapse } from 'react-bootstrap';
import { useState } from "react";

import styles from './Navbar.module.css';
import { check } from '../../utils/checkData';

const NavbarComponent = (props) => {
    const [code, setCode] = useState('');
    const [navSearch, setNavSearch] = useState(false);
    const [navLinks, setNavLinks] = useState(false);

    const clearCode = () => { setCode(""); }

    // Limpa o campo de pesquisa com a tecla "ESC"
    const handleKeyPress = (event) => {
        if (event.key === 'Escape') {
            clearCode();
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        (check(code)) ? window.location.href = `/pacotes/${code}` : alert("Código inválido! Tente Novamente."); clearCode();
    }

    // Função mudar status toggle navbar
    const changeToggleNav = (navId) => {
        switch (navId) {
            case "navSearch":
                setNavSearch(!navSearch);
                break;
            case "navLinks":
                setNavLinks(!navLinks);
                break;
        }
    }

    // Função controladora collapse navbar
    const controlNavCollapse = (closeNav, openNav, stateCloseNav) => {
        if (stateCloseNav) {
            document.getElementById(closeNav).click();
            setTimeout(() => { changeToggleNav(openNav); }, 275);
        } else {
            changeToggleNav(openNav);
        }
    }

    return (
        <header>
            <div className={styles.navbar_custom}>
                <Navbar collapseOnSelect expand="md" className={styles.navbar_container}>
                    <Navbar.Brand href="/"><span className={styles.logo}><span className={styles.black_color}>LOC</span><span className={styles.primary_color}>PED</span></span></Navbar.Brand>

                    <div className={styles.toogle_group}>
                        {(props.page !== 'home') ?
                            <Navbar.Toggle className='mx-3'>
                                <a className={styles.toggle_button} data-toggle="collapse" role="button" onClick={() => { controlNavCollapse("navLinks", "navSearch", navLinks); }} aria-controls="navSearchCollapse" aria-expanded={navSearch} id={"navSearch"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </a>
                            </Navbar.Toggle>
                            : ""
                        }
                        <Navbar.Toggle className='ms-2'>
                            <a className={styles.toggle_button} data-toggle="collapse" role="button" onClick={(e) => { controlNavCollapse("navSearch", "navLinks", navSearch); }} aria-controls="navLinksCollapse" aria-expanded={navLinks} id={"navLinks"}>
                                <div className='toggle-container'>
                                    <div className="bar1"></div>
                                    <div className="bar2"></div>
                                    <div className="bar3"></div>
                                </div>
                            </a>
                        </Navbar.Toggle>
                    </div>

                    <div className={`${styles.link_group}`}>
                        {/* COLLAPSE CAMPO DE PESQUISA */}
                        <Navbar.Collapse in={navSearch}>
                            <Nav>
                                {(props.page !== 'home') ?
                                    <Form onSubmit={handleSubmit} className='my-auto' id="search-nav">
                                        <div className={`${styles.group_btn_search} me-2`}>
                                            <input type="text" className={`${styles.input_nav_search}`} placeholder="Código de rastreio" aria-label="Código de rastreio" aria-describedby="button-addon2" value={code} onChange={e => { setCode(e.currentTarget.value); }} onKeyDown={e => { handleKeyPress(e); }} required={true} />
                                            <button type="submit" className={`${styles.btn_nav_search}`} id="button-addon2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </Form>
                                    : ""
                                }
                            </Nav>
                        </Navbar.Collapse>
                        {/* COLLAPSE PÁGINAS DO SITE */}
                        <Navbar.Collapse in={navLinks}>
                            <Nav className={styles.navbarNav}>
                                <Nav.Link href="/contato" className={styles.item_link}>Contato</Nav.Link>
                                <Nav.Link href="/ajuda" className={styles.item_link}>Ajuda</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        </header>
    );
}

export default NavbarComponent;