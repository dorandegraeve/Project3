import React from 'react'
import {NavLink} from 'react-router-dom'


export default ({navigatie}) => {

    
    return (
        <div className="Navigatie__item">
            <NavLink to={'/' + navigatie} exact>{navigatie}</NavLink>
            
        </div>  
    )
}
    
