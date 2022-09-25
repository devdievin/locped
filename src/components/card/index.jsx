import React from 'react';
import Image from 'next/image';
import { Card, Row, Col } from 'react-bootstrap';

import styles from './Card.module.css';

const CardComponent = (props) => (
    <Card className={styles.card_custom}>
        <Card.Body className={styles.card_body}>
            <Row>
                <Col md={2} className={styles.div_icon}>
                    <Image
                        src={props.src}
                        alt={props.alt}
                        width={64}
                        height={64}
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                    />
                </Col>
                <Col>
                    <Card.Title className={styles.title}>{props.title}</Card.Title>
                    <Card.Text className={styles.subtitle}>
                        {props.place}
                        {(props.city == " " || props.city == null) ? " Brasil" : ` - ${props.city}/${props.uf}`}
                    </Card.Text>
                    <Card.Subtitle className={styles.date}>{props.date[0]} - {props.date[1]}</Card.Subtitle>
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

export default CardComponent;