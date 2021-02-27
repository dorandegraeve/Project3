import React from "react"


const ContentHome = ({title, content, span, button}) => (
    
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
          
      </div>
        
  </div>
)
export default ContentHome
