import Head from "next/head";
import React from 'react';

import styles from './Main.module.css';

const MainComponent = (props) => (
    (props.screen === 'home') ?
        <main className={styles.main_home}>
            {/* Content here! */}
            {props.children}
        </main>
        :
        <main className={styles.main_default}>
            {/* Content here! */}
            {props.children}
        </main>
);

export default MainComponent;