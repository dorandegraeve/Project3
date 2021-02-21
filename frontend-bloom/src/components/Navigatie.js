import React from 'react'
import {NavLink} from 'react-router-dom'


export default ({navigatie}) => {

    
    return (
        <div className="navigatie__item">
            <NavLink className=""to={'/' + navigatie} exact>{navigatie}</NavLink>
            
        </div>  
    )
}
    
