import React, {useState, useEffect} from 'react'
import Video from '../components/Video.js';
import Card from '../components/Card';
import Nieuwsbrief from '../components/Nieuwsbrief.js';
import ContentLeft from '../components/ContentLeft.js';

export default () => {

    

    const [videos, setVideos] = useState([])

    useEffect(() => {
        const getVideos = async () => {
        const response = await fetch('http://localhost:1337/video-urls')
        const data = await response.json()
        setVideos(data)
        }

        getVideos()
    }, [])

    const [contentLefts, setContentLefts] = useState([])

    useEffect(() => {
        const getContentLefts = async () => {
        const response = await fetch('http://localhost:1337/content-lefts')
        const data = await response.json()
        setContentLefts(data)
        }
        
        getContentLefts()
    }, [])

    const [cards, setCards] = useState([])

    useEffect(() => {
        const getCards = async () => {
        const response = await fetch('http://localhost:1337/cards')
        const data = await response.json()
        setCards(data)
        }
        
        getCards()
    }, [])



    return (
        <div className="Home">
           
            <div className="Video__container">
                {videos.map(video => (
                <Video 
                url={video.url}  
                />
            ))}     
            </div>

            <div className="Content">
                {contentLefts.map(contentLeft => (
                <ContentLeft 
                    Titel ={contentLeft.Titel}
                    Titel2 ={contentLeft.Titel2}
                    Ondertitel={contentLeft.Ondertitel}
                    Ondertitel2={contentLeft.Ondertitel2}
                    // url={contentLeft.Image[0] && contentLeft.Image[0].url}
                />
                ))}
            </div>

            <h1 className="titel">Onze visie</h1>

            <div className="Kaartjes">
                {cards.map(card => (
                <Card 
                    Tekstje ={card.Tekstje}
                    Beschrijving={card.Beschrijving}
                    url={card.Image[0] && card.Image[0].url}
                />
                ))}
            </div>

            

            <Nieuwsbrief/>
        </div>
    )
}