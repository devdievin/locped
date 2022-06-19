import React from 'react';

import styles from './Error.module.css';

const ErrorPageComponent = (props) => (
    <div className={styles.section}>
        <h3>{props.error}</h3>
        <h4>Imagem de algo aqui</h4>
    </div>
);

export default ErrorPageComponent;