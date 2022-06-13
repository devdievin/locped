import Head from "next/head";
import React from 'react';

import styles from './Main.module.css';

const MainComponent = (props) => (
    <main className={styles.main}>
        {/* Content here! */}
        {props.children}
    </main>
);

export default MainComponent;