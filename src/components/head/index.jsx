import Head from "next/head";
import React from 'react';

const HeadComponent = (props) => (
    <Head>
        <title>{props.title}</title>
        <meta name="description" content="Site para rastrear encomendas" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
);

export default HeadComponent;