import React from "react";
export const FamilyComponent = ({familyitem, familypic, familydesc}) =>{
    const classfamilyname = 'family';
    return (
        <div className={classfamilyname}>
            <h2>{familyitem}</h2>
            <img src={familypic} alt={'family'}/>
            <p>{familydesc}</p>
        </div>
    )
}