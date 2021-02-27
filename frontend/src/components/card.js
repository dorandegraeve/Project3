import React from "react"
import Img from 'gatsby-image'

const Card = ({title, content, url}) => (
    
  <div className="card">
        <div className="card__body">
            <div className="card__image">
                <Img  className="card__image--item" fixed={url}  />  
            </div>
            
            <div className="card__title">
                {title}
            </div>
        </div>
      <div className="card__content">{content}</div>
  </div>
)
export default Card

