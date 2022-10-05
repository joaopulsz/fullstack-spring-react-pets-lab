import Pet from "./Pet";

const PetsList = ({pets, deletePet}) => {
    const petObjectsArray = pets.map(pet => pet);

    return <section>
        {petObjectsArray.map(pet => <Pet key={pet.id} pet={pet} deletePet={deletePet} />)}
    </section>
}

export default PetsList;