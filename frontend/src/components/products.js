import React, { useEffect } from "react"
import Img from 'gatsby-image'
import AOS from 'aos';
import 'aos/dist/aos.css';





const Product = ({title, text, subtitle, url, side}) => {
    

    useEffect(() => {
        AOS.init({ duration: 2000});
    }, []);

    return(
        <div className="product-container">
      
      {side === true ? 
      <div  data-aos="fade-right" className="product product--right">
        <div className="product__subtitle">
              {subtitle}
        </div>
        <div className="product__title">
            {title}
        </div>
        <div className="product__content">
           {text}
        </div>
            <button className="button button--product" type="button">Probeer nu</button>
      </div>
       : 
      <div data-aos="fade-left" className="product product--left">
        <div className="product__subtitle">
              {subtitle}
        </div>
        <div className="product__title">
            {title}
        </div>
        <div className="product__content">
           {text}
        </div>
            <button className="button button--product" type="button">Probeer nu</button>
      </div>}
      
      {side === true ?
      <div className="product__image product__image--right">
          <Img className="product__image-item"fixed={url}></Img>
      </div>
      :
      <div className="product__image product__image--left">
          <Img className="product__image-item"fixed={url}></Img>
      </div>}
        
  </div>
    )
}
    
  

export default Product
