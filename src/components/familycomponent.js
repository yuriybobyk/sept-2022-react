import React from "react";
import './familycomponent.css'
export const FamilyComponent = ({familyitem, familypic, familydesc}) =>{
    const classfamilyname = 'family';
    return (
        <div className={classfamilyname}>
            <h2 className={'title'}>{familyitem}</h2>
            <img className={'familypic'} src={familypic} alt={'family'}/>
            <p className={'desc'}>{familydesc}</p>
        </div>
    )
}