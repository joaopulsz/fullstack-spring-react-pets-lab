import { useState } from "react";

const PetsForm = ({postPet}) => {
    const [statePet, setStatePet] = useState({
        name: "",
        type: "",
        breed: "",
        age: 0
    })

    const handleChange = (e) => {
        let propertyName = e.target.name;
        let copiedPet = {...statePet};
        copiedPet[propertyName] = e.target.value;
        setStatePet(copiedPet);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        postPet(statePet);
    }

    return <form onSubmit={handleFormSubmit}>
        <h3>Add a new pet:</h3>
        <input required type="text" placeholder="Name" name="name" value={statePet.name} onChange={handleChange} />
        <input required type="text" placeholder="Type" name="type" value={statePet.type} onChange={handleChange} />
        <input required type="text" placeholder="Breed" name="breed" value={statePet.breed} onChange={handleChange} />
        <input required type="text" placeholder="Age" name="age" value={statePet.age} onChange={handleChange} />
        <button type="submit">Submit</button>
    </form>
}

export default PetsForm;