import React, {useState, useEffect} from 'react'
import Video from '../components/Video.js';
import Card from '../components/Card';
import Nieuwsbrief from '../components/Nieuwsbrief.js';

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