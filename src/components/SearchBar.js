import React, { useContext, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import animalContext from '../context/animals/animalContext';

const SearchBar = () => {
    const value = useContext(animalContext);

    const [active, setActive] = useState(true);
    const [searchText, setSearchText] = useState('');

    const fetchData = async url => {
        let data = await fetch(url);
        data = await data.json();
        value.setAnimalData(data.entries.filter(i => i.Description.toLowerCase().includes(searchText.toLowerCase())));
    }

    const searchHandler = async (event) => {
        setSearchText(event.target.value);
        if (!active) {
            return
        }

        fetchData('https://api.publicapis.org/entries');
        setActive(false);
        setTimeout(() => {
            setActive(true);
        }, 500)
    }

    return (<>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        value={searchText}
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={(event) => searchHandler(event)}
                    />
                </Form>
            </Container>
        </Navbar>
    </>)
}

export default SearchBar;