const Pet = ({pet, deletePet}) => {
    const handleDeletePet = () => {
        deletePet(pet.id);
    }

    return <>
        <h4>{pet.name}</h4>
        <p>{pet.type}</p>
        <p>{pet.breed}</p>
        <p>{pet.age}</p>
        <button onClick={handleDeletePet}>Delete</button>
    </>
}

export default Pet;