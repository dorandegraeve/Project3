import React from 'react'


const API_URL = 'http://localhost:1337'

const formatImageUrl = (url) => `${API_URL}${url}`



export default({Titel, Ondertitel, url1, url2, url3, url4}) => {
    return(
        <div className ="content">
            <div className="content__links">
                <div className="content__titel">{Titel}</div>
                <div className="content__ondertitel">{Ondertitel}</div>
                <div className="content__action">
                    <button className="button button--content" type="button">Probeer nu</button>
                </div>
                <p className="content__subtext">Probeer Bloom gratis voor 14 dagen.</p>
            </div>
            <div className="content__rechts">
                <img className ="content__foto1" src={formatImageUrl(url1)} />
                {/* <img className ="content__foto2" src={formatImageUrl(url2)} />
                <img className ="content__foto3" src={formatImageUrl(url3)} />
                <img className ="content__foto4" src={formatImageUrl(url4)} /> */}
            </div>
            
        </div>
    )
}