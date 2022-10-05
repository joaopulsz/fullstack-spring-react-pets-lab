import Pet from "./Pet";

const PetsList = ({pets}) => {
    const petObjectsArray = pets.map(pet => pet);

    return <section>
        {petObjectsArray.map(pet => <Pet key={pet.id} pet={pet}/>)}
    </section>
}

export default PetsList;