import React from "react"
import Img from 'gatsby-image'


const ContentHome = ({title, content, span, button, url}) => (
    
  <div className="contentHomePage">
      <div className="content">
        <div className="content__title">
            {title}
        </div>
        <div className="content__content">
           {content}
        </div>
        
            <button className="button button--content" type="button">{button}</button>
        
        <span className="content__span">
            {span}
        </span>
      </div>
      <div className="content__image">
          <Img className="content__image-item"fixed={url}></Img>
      </div>
        
  </div>
)
export default ContentHome
