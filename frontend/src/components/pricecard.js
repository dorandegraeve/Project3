import React from "react"
import { FaCrown } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import Img from 'gatsby-image'


const Pricecard = ({title, price, users, admins, modules, moduleItem, subtitle, popular}) => (
    console.log("module",moduleItem),
    <>
             {popular === true ?
        <div className="priceCard priceCard-active">
            <div className="priceCard__tag">POPULAIR</div>
            <div className="priceCard__top">
            <div className="priceCard__subtitle">{subtitle}</div>
        <div className="priceCard__title">{title}</div>
        <div className="priceCard__price"> <span className="priceCard__price--span">€ {price}<div className="priceCard__price--decimal">99</div></span> / gebruiker / maand</div>
            </div>
        
        <div className="priceCard__bottom">
        <ul className="priceCard__users">
            <li className="priceCard__users--user">
                <div className="priceCard__users--image"><BsPeopleFill /></div>
                {users}</li>
            <li className="priceCard__users--admin"> 
                <div className="priceCard__users--image"><FaCrown /></div>
                {admins}</li>
        </ul>
        <div className="priceCard__modules">
            <div className="priceCard__modules-title">{modules}</div>
            <ul className="priceCard__modules-list">
                {moduleItem.map(item =>(
                    <li className="priceCard__modules-list--item"><div className="priceCard__users--image"><Img fixed={item.moduleImage.childImageSharp.fixed}></Img></div>{item.moduleItem}</li>
                ))}  
            </ul>
        </div>
        <div className="priceCard__button">
            <button className="button button--price button--price-active"> Aan de slag</button>
        </div>
        </div>
        </div>
    :
        <div className="priceCard ">
        <div className="priceCard__top priceCard__top--color">
            <div className="priceCard__subtitle">{subtitle}</div>
            <div className="priceCard__title">{title}</div>
            <div className="priceCard__price"> <span className="priceCard__price--span">€ {price}<div className="priceCard__price--decimal">99</div></span> / gebruiker / maand</div>
        </div>
        <div className="priceCard__bottom">
        <ul className="priceCard__users">
            <li className="priceCard__users--user">
                <div className="priceCard__users--image"><BsPeopleFill /></div>
                {users}</li>
            <li className="priceCard__users--admin"> 
                <div className="priceCard__users--image"><FaCrown /></div>
                {admins}</li>
        </ul>
        <div className="priceCard__modules">
            <div className="priceCard__modules-title">{modules}</div>
            <ul className="priceCard__modules-list">
                {moduleItem.map(item =>(
                    <li className="priceCard__modules-list--item"><div className="priceCard__users--image"><Img fixed={item.moduleImage.childImageSharp.fixed}></Img></div>{item.moduleItem}</li>
                ))}
            </ul>
        </div>
        <div className="priceCard__button">
            <button className="button button--price"> Aan de slag</button>
        </div>
        </div>
       
    </div>
        }
        
    </>
        

   
   
    
)
export default Pricecard

