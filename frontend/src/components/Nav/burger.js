import React, {useState} from 'react'
import styled from 'styled-components'
import RightNav from './rightNav'

const StyledBurger = styled.div`

    div {
        background-color: ${({open}) => open ? '#fff' : '#444F6B'};
        &:nth-child(1) {
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({open}) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`

const Burger = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <StyledBurger className="burger" open={open} onClick={() => setOpen(!open)}>
                <div className="burger__part burger__part--1"/>
                <div className="burger__part burger__part--2"/>
                <div className="burger__part burger__part--3"/>
            </StyledBurger>
            <RightNav open={open}/>
        </>
       
    )
}

export default Burger