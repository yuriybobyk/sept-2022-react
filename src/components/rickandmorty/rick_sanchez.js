import React from "react";
export const Rick_Sanchez = ({id, name, status, species, gender, image}) => {
    const classrickandmortyname = 'rickandmorty';
    id = 1;
    name = 'Rick Sanchez';
    status = 'Alive';
    species = 'Human';
    gender = 'Male'
    image = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    return (
        <div className={classrickandmortyname}>
            <h2 className={'text'}>{name}</h2>
            <h4 className={'desc'}>ID: {id}</h4>
            <h4 className={'desc'}>Status: {status}</h4>
            <h4 className={'desc'}>Species: {species}</h4>
            <h4 className={'desc'}>Gender: {gender}</h4>
            <img className={'pic'} src={image} alt={'Rick Sanchez'}/>
        </div>
    )
}