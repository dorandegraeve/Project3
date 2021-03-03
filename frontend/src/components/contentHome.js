import React from "react"
import Img from 'gatsby-image'


const ContentHome = ({title, content, span, button, url, input}) => (
   <>
    {input === true ?
        <div className="contentHomePage">
        <div className="content">
          <div className="content__title">
              {title}
          </div>
          <div className="content__content">
             {content}
          </div>
          <form className="nieuwsbrief__formulier">
                        <input
                            className="nieuwsbrief__field"
                            type="email"
                            placeholder="Jouw e mailadres"
                            name="email"
                            style={{
                                paddingLeft: "3.2rem",
                                fontSize: "2rem",
                                color: "#98A3BD" ,
                            }}
                        />
                    </form>
            <div className="content__button">
                <button className="button button--content" type="button">{button}</button>
            </div>
              
          
          <span className="content__span">
              {span}
          </span>
        </div>
        <div className="content__image">
            <Img className="content__image-item"fixed={url}></Img>
        </div>
          
    </div>
    :
    <div className="contentHomePage">
    <div className="content">
      <div className="content__title">
          {title}
      </div>
      <div className="content__content">
         {content}
      </div>
      
            <div className="content__button">
                <button className="button button--content" type="button">{button}</button>
            </div>
      
      <span className="content__span">
          {span}
      </span>
    </div>
    <div className="content__image">
        <Img className="content__image-item"fixed={url}></Img>
    </div>
      
    </div>
    }

   </>
    
)
export default ContentHome
