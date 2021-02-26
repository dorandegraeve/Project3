import React from 'react'
import {Link} from 'gatsby'



const Navbar = () => {
    
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/producten">Producten</Link>
                </li>
                <li>
                    <Link to="/prijzen">Prijzen</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar