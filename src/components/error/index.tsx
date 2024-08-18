import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './Error.module.css';

const ErrorPageComponent = (props) => (
    <div className={styles.section}>
        <div className={styles.content}>
            {(props.error === "Objeto inválido")
                ?
                <Image
                    src={'/images/error-invalid.svg'}
                    alt={'Inválido!'}
                    width={96}
                    height={96}
                // loading='lazy'
                />
                :
                (props.error === "Objeto não encontrado")
                    ?
                    <Image
                        src={'/images/search.svg'}
                        alt={'Não encontrado!'}
                        width={96}
                        height={96}
                    // loading='lazy'
                    />
                    :
                    <React.Fragment>
                        <Image
                            src={'/images/signal.svg'}
                            alt={'Serviço Indisponível!'}
                            width={96}
                            height={96}
                        // loading='lazy'
                        />
                        <p>Problema na conexão com o servidor. Tente mais tarde!</p>
                    </React.Fragment>
            }
            <h3 className='mb-4'>{props.error}</h3>
            <Link href="/">
                <a className={styles.home_back}>
                    <i className="bi bi-arrow-left"></i>
                    <span className='ms-1'>VOLTAR</span>
                </a>
            </Link>
        </div>

    </div>
);

export default ErrorPageComponent;