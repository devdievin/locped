import Head from "next/head";
import React from 'react';

const HeadComponent = (props) => (
    <Head>
        <title>{props.title}</title>
        <meta name="description" content="Site para rastrear encomendas" />
        <link rel="icon" href="/favicon.ico" />

        {/* <link rel="stylesheet" href="../../node_modules/bootstrap-icons/font/bootstrap-icons.css" /> */}
    </Head>
);

export default HeadComponent;