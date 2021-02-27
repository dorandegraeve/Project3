import React from 'react'
import {Link} from 'gatsby'
import logo from "../images/Logo.png"



const Navbar = () => {
    
    return (
        <nav>
            <div className="navigatie">
                <div className="navigatie__logo">
                    <img className="navigatie__logo-image" src={logo}></img>
                    <div className="navigatie__logo-title">BLOOM</div>
                </div>
                <ul className="navigatie__bar">
                    <li >
                        <Link className="navigatie__bar-item" to="/home" activeClassName="navigatie__bar-item--active" >Home</Link>
                    </li>
                    <li >
                        <Link className="navigatie__bar-item" to="/product" activeClassName="navigatie__bar-item--active">Producten</Link>
                    </li >
                    <li >
                        <Link className="navigatie__bar-item" to="/prijzen" activeClassName="navigatie__bar-item--active">Prijzen</Link>
                    </li>
                    <li >
                        <Link className="navigatie__bar-item" to="/contact" activeClassName="navigatie__bar-item--active">Contact</Link>
                    </li>
                </ul>
                
            </div>
        </nav>
        
    )
}

export default Navbar