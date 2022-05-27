import { useEffect, useState } from "react";
import animalContext from "./animalContext";

const AnimalState = (props) => {

    const [animalData, setAnimalData] = useState([]);

    const fetchData = async url => {
        let data = await fetch(url);
        data = await data.json();
        localStorage.setItem("data", data.entries);
        setAnimalData(data.entries);
    }

    useEffect(() => {
        fetchData('https://api.publicapis.org/entries');
    }, [])

    const value = { animalData, setAnimalData }

    return (
        <animalContext.Provider value={value}>
            {props.children}
        </animalContext.Provider>
    )
}

export default AnimalState;