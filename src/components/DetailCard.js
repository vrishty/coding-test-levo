import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const DetailCard = (props) => {
    return (
        <Card bg={props.color}>
            <Card.Body className="d-flex flex-column">
                <Card.Text>{props.date}</Card.Text>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Button className="mt-auto" variant="outline-light"
                    style={{ width: '50%' }}>
                    READ MORE
                </Button>
            </Card.Body>
        </Card>
    );
};

export default DetailCard;




