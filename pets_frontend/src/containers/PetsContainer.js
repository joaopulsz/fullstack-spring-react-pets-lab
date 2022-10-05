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

    return <main>
            <PetsForm />
            <PetsList pets={pets} />
        </main>
}

export default PetsContainer;