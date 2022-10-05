const Pet = ({pet}) => {
    return <>
        <h4>{pet.name}</h4>
        <p>{pet.type}</p>
        <p>{pet.breed}</p>
        <p>{pet.age}</p>
    </>
}

export default Pet;