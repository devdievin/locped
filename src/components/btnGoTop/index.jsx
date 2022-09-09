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
            <i className="bi bi-arrow-up"></i>
        </button>
    );
}

export default ButtonGoTop;