import React from "react"
import Img from 'gatsby-image'

const TekstImage = ({title, text, img}) => (
    <div className="tekstImage-container">
        <div className="tekstImage">
            <div className="tekstImage__title">{title}</div>
            <div className="tekstImage__content">{text}</div>
        </div>
    <div className="tekstImage__image">
        <Img className="tekstImage__image--item" fixed={img}></Img>
    </div>
    </div>
        
    
)
export default TekstImage
