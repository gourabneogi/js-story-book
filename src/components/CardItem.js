import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardItems = ({ id, name, offerPrice, price, image, updateProductHandler, deleteProductHandler }) => {
    return (<>
        <Card style={{ width: '10rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Img variant="top" src={image} />
                <Card.Text>Offer Price: {offerPrice}</Card.Text>
                <Card.Text>Price: {price}</Card.Text>
                <Button variant="outline-primary" size="sm" onClick={() => updateProductHandler(id)}>Edit</Button>{' '}
                <Button variant="outline-danger" size="sm" onClick={() => deleteProductHandler(id)}>Del</Button>{' '}
            </Card.Body>
        </Card>
    </>
    )
}

export default CardItems;