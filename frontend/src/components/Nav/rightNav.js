import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'


const Ul = styled.ul`
  
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
    

    li {
        padding: 18px 10px;
        }

    @media (max-width: 900px) {
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    }
`

const RightNav = ({open}) => {
    return (
        <Ul open={open} className="navigatie__bar">
            <li >
                <Link className="navigatie__bar-item" to="/" activeClassName="navigatie__bar-item--active" >Home</Link>
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
        </Ul>
    )
}

export default RightNav
