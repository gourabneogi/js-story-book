import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

function ProductModal({ title, modalHandler, product }) {
    const [show, setShow] = useState(!!title);
    const [data, setData] = useState({});

    useEffect(() => {
        setData(product)
    }, [])

    const handleClose = () => {
        setShow(false);
        modalHandler(data);
    }

    const dataHandler = (value) => {
        setData({ ...data, ...value })
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{title} Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="name">Name</InputGroup.Text>
                        <FormControl onChange={(event) => dataHandler({ name: event.target.value })}
                            placeholder="Name"
                            value={data?.name || ''}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="image">Image URL</InputGroup.Text>
                        <FormControl onChange={(event) => dataHandler({ image: event.target.value })}
                            placeholder="Image URL"
                            value={data?.image || ''}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="offerPrice">Offer Price</InputGroup.Text>
                        <FormControl onChange={(event) => dataHandler({ offerPrice: event.target.value })}
                            placeholder="Offer Price"
                            value={data?.offerPrice || ''}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="price">Price</InputGroup.Text>
                        <FormControl onChange={(event) => dataHandler({ price: event.target.value })}
                            placeholder="Price"
                            value={data?.price || ''}
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={(event) => handleClose()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProductModal;