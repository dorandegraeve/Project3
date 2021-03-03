import React from 'react'
import logo from "../../images/Logo.png"
import styled from 'styled-components'
import Burger from './burger'

const Nav = styled.nav`
    
    
`

const Navbar = () => {
    return (
        
        <Nav className="navigatie">
            <div className="navigatie__logo">
                    <img className="navigatie__logo-image" src={logo}></img>
                    <div className="navigatie__logo-title">BLOOM</div>
            </div>
            <Burger />
            
        </Nav>
    )
}

export default Navbar