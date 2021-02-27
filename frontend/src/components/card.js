import React from "react"
import Img from "gatsby-image"

const Card = ({title, content, img}) => (
    
  <div className="card">
      <div className="card__body">
            <div className="card__top">
                
                <Img className="card__image"  />  
            </div>
            <div className="card__title">
                <h1>{title}</h1>
            </div>
            <span className="card__beschrijving">{content}</span>
      </div>
  </div>
)
export default Card

