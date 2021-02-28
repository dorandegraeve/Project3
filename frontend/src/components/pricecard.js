import React from "react"
import { FaCrown } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';


const Pricecard = () => (
    
    <div className="priceCard-container">
        <div className="priceCard">
            <div className="priceCard__title">Early adopter</div>
                <div className="priceCard__price"> <span className="priceCard__price--span">€ 10</span> / gebruiker / maand</div>
                <ul className="priceCard__users">
                    <li className="priceCard__users--user">
                        <div className="priceCard__users--image"><BsPeopleFill /></div>
                        Tot 50 gebruikers</li>
                    <li className="priceCard__users--admin"> 
                        <div className="priceCard__users--image"><FaCrown /></div>
                        5 admins</li>
                </ul>
                <div className="priceCard__modules">
                    <div className="priceCard__modules-title">Alle Basismodules, incl.</div>
                    <ul className="priceCard__modules-list">
                        <li className="priceCard__modules-list--item"><div className="priceCard__users--image"><BsPeopleFill /></div>Notities bijhouden</li>
                        <li className="priceCard__modules-list--item"><div className="priceCard__users--image"><BsPeopleFill /></div>Doelen opstellen</li>
                        <li className="priceCard__modules-list--item"><div className="priceCard__users--image"><BsPeopleFill /></div>Vaardigheden evalueren</li>
                        <li className="priceCard__modules-list--item"><div className="priceCard__users--image"><BsPeopleFill /></div>Teams samenstellen</li>
                    </ul>
                </div>
                <div className="priceCard__button">
                    <button className="button button--price button--price-active"> aan de slag</button>
                </div>
        </div>
        <div className="priceCard priceCard-active">
            <div className="priceCard__title">Early adopter</div>
            <div className="priceCard__price"> <span className="priceCard__price--span">€ 10</span> / gebruiker / maand</div>
            <ul className="priceCard__users">
                <li className="priceCard__users--user">
                    <div className="priceCard__users--image"><BsPeopleFill /></div>
                    Tot 50 gebruikers</li>
                <li className="priceCard__users--admin"> 
                    <div className="priceCard__users--image"><FaCrown /></div>
                    5 admins</li>
            </ul>
            <div className="priceCard__modules">
                <div className="priceCard__modules-title">Alle Basismodules, incl.</div>
                <ul className="priceCard__modules-list">
                    <li className="priceCard__modules-list--item"><div className="priceCard__users--image"><BsPeopleFill /></div>Notities bijhouden</li>
                    <li className="priceCard__modules-list--item"><div className="priceCard__users--image"><BsPeopleFill /></div>Doelen opstellen</li>
                    <li className="priceCard__modules-list--item"><div className="priceCard__users--image"><BsPeopleFill /></div>Vaardigheden evalueren</li>
                    <li className="priceCard__modules-list--item"><div className="priceCard__users--image"><BsPeopleFill /></div>Teams samenstellen</li>
                </ul>
            </div>
            <div className="priceCard__button">
                <button className="button button--price button--price-active"> aan de slag</button>
            </div>
        </div>
        <div className="priceCard">
            test
        </div>
    </div>
    
)
export default Pricecard

