import React from "react";

export const Summer_smith = ({id, name, status, species, gender, image}) => {
    const classrickandmortyname = 'rickandmorty';
    id = 3;
    name = 'Summer Smith';
    status = 'Alive';
    species = 'Human';
    gender = 'Female'
    image = 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
    return (
        <div className={classrickandmortyname}>
            <h2 className={'text'}>{name}</h2>
            <h4 className={'desc'}>ID: {id}</h4>
            <h4 className={'desc'}>Status: {status}</h4>
            <h4 className={'desc'}>Species: {species}</h4>
            <h4 className={'desc'}>Gender: {gender}</h4>
            <img className={'pic'} src={image} alt={'Morty_smith'}/>
        </div>
    )
}