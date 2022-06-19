import React from 'react';

import styles from './Line.module.css';

const LineStatusComponent = (props) => (
    <React.Fragment>
        <div className={styles.content}>
            <div className={styles.circle}></div>
            <div className={styles.line}></div>
        </div>
    </React.Fragment>
);

export default LineStatusComponent;