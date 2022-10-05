import { useEffect, useState } from "react";

import PetsList from "../components/PetsList";
import PetsForm from "../components/PetsForm";

const PetsContainer = () => {
    const [pets, setPets] = useState([]);

    const fetchPets = async () => {
        const response = await fetch('http://localhost:8080/pets');
        const petsData = await response.json();
        setPets(petsData);
    }

    useEffect(() => {
        fetchPets();
    }, [])

    const postPet = (newPet) => {
        fetch("http://localhost:8080/pets", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPet)
        })
        .then(response => response.json())
        .then(savedPet => setPets([...pets, savedPet]));
    }

    const deletePet = (id) => {
        fetch(`http://localhost:8080/pets/${id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        })

        setPets(pets.filter(pet => pet.id !== id));
    }

    return <main>
            <PetsForm postPet={postPet} />
            <PetsList pets={pets} deletePet={deletePet} />
        </main>
}

export default PetsContainer;