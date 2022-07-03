import React from 'react';

import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './Button.module.css';

const ButtonComponent = (props) => (
    <React.Fragment>
        {// Ícone à esquerda
            (props.iconPosition === "l-icon") ?
                <button type={props.type} className={styles.btn_custom}>
                    <i className={`${props.icon} me-1`}></i>
                    {props.text}
                </button>
                // Ícone à direita
                : (props.iconPosition === "r-icon") ?
                    <button type={props.type} className={styles.btn_custom}>
                        {props.text}
                        <i className={`${props.icon} ms-1`}></i>
                    </button>
                    :
                    // Sem ícone
                    <button type={props.type} className={styles.btn_custom}>
                        {props.text}
                    </button>
        }
    </React.Fragment>
);

export default ButtonComponent;