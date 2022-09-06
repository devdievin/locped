import React from 'react';

import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './Status.module.css';

const StatusPacketComponent = (props) => (
    <React.Fragment>
        {// Objeto Postado
            (props.status === "Obj. Postado") ?
                <div className={styles.obj_posted}>
                    <h5>Obj. Postado</h5>
                </div>
                // Objeto Entregue
                : (props.status === "Entregue") ?
                    <div className={styles.obj_delivered}>
                        <h5>Entregue<i className={styles.icon}><span className="bi bi-check-lg"></span></i></h5>
                    </div>
                    :
                    // Objeto em Trânsito
                    <div className={styles.obj_transit}>
                        <h5>Em Trânsito</h5>
                    </div>
        }
    </React.Fragment>
);

export default StatusPacketComponent;