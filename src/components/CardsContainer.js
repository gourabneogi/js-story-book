import React, { useContext } from 'react'
import animalContext from '../context/animals/animalContext';
import CardItems from './CardItem';

const CardsContainer = () => {
    const value = useContext(animalContext);

    return <div className="d-flex justify-content-between flex-wrap m-5">
        {
            value.animalData.map((cardItem, index) => {
                return <CardItems key={index}
                    category={cardItem.Category}
                    description={cardItem.Description}
                    link={cardItem.Link}
                />
            })
        }
    </div>
}

export default CardsContainer;