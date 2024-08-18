import Image from "next/image";
import Link from "next/link";
import React from "react";
import Router from "next/router";

import styles from "./Timeout.module.css";
import { Button } from "react-bootstrap";

const TimeOutComponent = (props) => {
  const reloadPage = () => {
    // Router.reload(window.location.pathname);
    Router.reload();
  };

  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <Image
          src={"/images/clock.svg"}
          alt={"Tempo esgotado!"}
          width={96}
          height={96}
          // loading='lazy'
        />
        <h3 className="mb-1">Tempo Esgotado</h3>
        <p>Parece que a requisição está demorando muito...</p>
        <Button variant="primary" onClick={() => reloadPage()}>
          Recarregar
        </Button>
        {/* <Link href="/">
                <a className={styles.home_back}>
                    <i className="bi bi-arrow-left"></i>
                    <span className='ms-1'>VOLTAR</span>
                </a>
            </Link> */}
      </div>
    </div>
  );
};

export default TimeOutComponent;
