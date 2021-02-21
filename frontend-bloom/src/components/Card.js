import React from 'react'

const API_URL = 'http://localhost:1337'

const formatImageUrl = (url) => `${API_URL}${url}`

export default ({Beschrijving, Tekstje, url}) => {


    return(
        
        <div className="card">
            <div className="Card__body">
                <div className="Card__Top">
                    <img className="Card__Image" src={formatImageUrl(url)} />  
                </div>
                <div className="Card__Achtergrond">
                    <div>{Tekstje}</div>
                    
                </div>
            </div>
            <span>{Beschrijving}</span>
        </div>

    )
}

