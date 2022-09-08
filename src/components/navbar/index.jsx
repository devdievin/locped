import React from 'react';
import Image from 'next/image';
import { Navbar, Nav, Button, NavDropdown, Form, Collapse } from 'react-bootstrap';
// import { useRouter } from 'next/router';
import { useState } from "react";

import styles from './Navbar.module.css';
import { check } from '../../utils/checkData';

const NavbarComponent = (props) => {
    // const router = useRouter();
    const [code, setCode] = useState('');
    const [navSearch, setNavSearch] = useState(false);
    const [navLinks, setNavLinks] = useState(false);

    const clearCode = () => {
        setCode("");
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Escape') {
            clearCode();
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // router.push(`/pacotes/${code}`);
        (check(code)) ? window.location.href = `/pacotes/${code}` : alert("Código inválido! Tente Novamente."); clearCode();
    }

    return (
        <header>
            <div className={styles.navbar_custom}>
                <Navbar collapseOnSelect expand="md" className={styles.navbar_container}>
                    {/* <Navbar.Brand href="/"><span className={styles.nav_logo}><Image src={'/logo.png'} alt={'Logotipo LocPed'} width='140' height='30' /></span></Navbar.Brand> */}
                    <Navbar.Brand href="/"><span className={styles.logo}><span className={styles.black_color}>LOC</span><span className={styles.primary_color}>PED</span></span></Navbar.Brand>

                    <div className={styles.toogle_group}>
                        {(props.page !== 'home') ?
                            <Navbar.Toggle className='mx-3'>
                                <a className={styles.toggle_button} data-toggle="collapse" role="button" onClick={() => setNavSearch(!navSearch)} aria-controls="navSearchCollapse" aria-expanded={navSearch}>
                                    <i className="bi bi-search"></i>
                                </a>
                            </Navbar.Toggle>
                            : ""
                        }
                        <Navbar.Toggle className='ms-3'>
                            <a className={styles.toggle_button} data-toggle="collapse" role="button" onClick={() => setNavLinks(!navLinks)} aria-controls="navLinksCollapse" aria-expanded={navLinks}>
                                <i className="bi bi-three-dots-vertical"></i>
                            </a>
                        </Navbar.Toggle>
                    </div>

                    <div className={`${styles.link_group}`}>
                        <Navbar.Collapse in={navSearch}>
                            <Nav>
                                {(props.page !== 'home') ?
                                    <Form onSubmit={handleSubmit} className='my-auto' id="search-nav">
                                        <div className={`${styles.group_btn_search} me-4`}>
                                            <input type="text" className={`${styles.input_nav_search}`} placeholder="Código de rastreio" aria-label="Código de rastreio" aria-describedby="button-addon2" value={code} onChange={e => { setCode(e.currentTarget.value); }} onKeyDown={e => { handleKeyPress(e); }} required={true} />
                                            <button type="submit" className={`${styles.btn_nav_search}`} id="button-addon2"><i className="bi bi-search"></i></button>
                                        </div>
                                    </Form>
                                    : ""
                                }
                            </Nav>
                        </Navbar.Collapse>

                        <Navbar.Collapse in={navLinks}>
                            <Nav>
                                <Nav.Link href="/ajuda" className={styles.item_link}>Ajuda</Nav.Link>
                                <Nav.Link href="/contato" className={styles.item_link}>Contato</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        </header>
    );
}

export default NavbarComponent;