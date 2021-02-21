import React from 'react'

const API_URL = 'http://localhost:1337'

const formatImageUrl = (url) => `${API_URL}${url}`

export default ({Beschrijving, Tekstje, url}) => {


    return(
        
        <div className="card">
            <div className="card__body">
                <div className="card__top">
                    <img className="card__image" src={formatImageUrl(url)} />  
                </div>
                <div className="card__achtergrond">
                    <div>{Tekstje}</div>
                    
                </div>
            </div>
            <span>{Beschrijving}</span>
        </div>

    )
}

