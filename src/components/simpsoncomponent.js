import React from "react";
import './simpsoncomponent.css'
export const SimpsonComponent = ({itemname, pics, desc}) => {

    const classNameitem = 'cards';
    return(
        <div className={classNameitem}>
            <h2 className={'title'}>{itemname}</h2>
            <img className={'pic'} src={pics} alt={itemname}/>
            <h4 className={'desc'}>{desc}</h4>
        </div>
    )
}

