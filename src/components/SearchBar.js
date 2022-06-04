import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const SearchBar = ({ searchProductHandler, addProductHandler }) => {
    return (<>
        <Navbar bg="light" expand="lg">
            <Container fluid className="d-flex justify-content-end">
                <Form className="d-flex justify-content-end">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-dark" size="sm">Search Product</Button>{' '}
                    <Button className="ms-2" variant="outline-dark" size="sm" onClick={addProductHandler}>Add Product</Button>{' '}
                </Form>
            </Container>
        </Navbar>
    </>)
}

export default SearchBar;