import React from 'react'


const API_URL = 'http://localhost:1337'

const formatImageUrl = (url) => `${API_URL}${url}`


export default({Titel, Ondertitel}) => {
    return(
        <div>
            <div className="Content__titel">{Titel}</div>
            <div className="Content__ondertitel">{Ondertitel}</div>
            <button className="Content__button" type="button">Probeer nu</button>
            <p className="Content__subtext">Probeer Bloom gratis voor 14 dagen.</p>
        </div>
    )
}