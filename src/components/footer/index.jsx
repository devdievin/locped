import React from 'react';

import styles from "./Footer.module.css";

const FooterComponent = (props) => {
    return (
        <footer className={styles.footer_custom}>
            <div className='text-center'>
                <span>© 2022 Meu Rastreio - Todos os Direitos Reservados</span><br/>
                <span>Icon by <a href="https://freeicons.io/profile/5790">ColourCreatype</a> on <a href="https://freeicons.io">freeicons.io</a></span>
            </div>
        </footer>
    );
}

export default FooterComponent;