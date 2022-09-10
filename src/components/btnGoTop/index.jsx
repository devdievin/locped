import React from 'react';

import styles from "./BtnGoTop.module.css";

// Função volta para o topo da página
const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

const ButtonGoTop = (props) => {
    return (
        <button type="button" className={`btn btn-danger btn-floating btn-lg ${styles.btn_top}`} id="btn-back-to-top" onClick={() => goToTop()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
            </svg>
        </button>
    );
}

export default ButtonGoTop;