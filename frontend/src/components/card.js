import React , { useEffect } from "react"
import Img from 'gatsby-image'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = ({title, content, url}) => {
    
    useEffect(() => {
        AOS.init({ duration: 2000});
    }, []);
    
    return (
           
        <div className="card">
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            className="card__body">
            <div className="card__image">
                <Img  className="card__image--item" fixed={url}  />  
            </div>
            
            <div className="card__title">
                {title}
            </div>
        </div>
        <div  className="card__content">{content}</div>
        </div>
    )
}

    

 

export default Card

