import React from 'react'
import {Link} from 'gatsby'



const Navbar = () => {
    
    return (
        <nav>
            <ul className="navigatie">
                <li className="navigatie__item">
                    <Link to="/home">Home</Link>
                </li>
                <li className="navigatie__item">
                    <Link to="/producten">Producten</Link>
                </li >
                <li className="navigatie__item">
                    <Link to="/prijzen">Prijzen</Link>
                </li>
                <li className="navigatie__item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar