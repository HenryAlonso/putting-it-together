import React, {useState} from 'react';

const PersonCard = props => {
    const [newAge, setNewAge] = useState(props.age);
    const addYear = () => {
        setNewAge(newAge + 1)
    }
    
    const {firstName, lastName, hairColor} = props;
    return (
        <div>
            <h1>
                {lastName}, {firstName}
            </h1>
            <p>Age: {newAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={ addYear }>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}
export default PersonCard;