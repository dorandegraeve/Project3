import React from 'react'


const API_URL = 'http://localhost:1337'

const formatImageUrl = (url) => `${API_URL}${url}`


export default({Titel, Ondertitel, Image}) => {
    return(
        <div>
            <div>{Titel}</div>
            <div>{Ondertitel}</div>
        </div>
    )
}