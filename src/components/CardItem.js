import React from 'react'
import Card from 'react-bootstrap/Card';

const CardItems = ({ category, description, link }) => {
    return (<>
        <Card style={{ width: '10rem' }}>
            <Card.Body>
                <Card.Title>{category}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <a className="btn btn-primary" href={link} target="_blank" role="button">Link</a>
            </Card.Body>
        </Card>
    </>
    )
}

export default CardItems;