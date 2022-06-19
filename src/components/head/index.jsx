import Head from "next/head";
import React from 'react';

const HeadComponent = (props) => (
    <Head>
        <title>{props.title}</title>
        <meta name="description" content="Site para rastrear encomendas" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,500;0,600;1,200;1,400;1,500;1,600&display=swap" rel="stylesheet" />
    </Head>
);

export default HeadComponent;