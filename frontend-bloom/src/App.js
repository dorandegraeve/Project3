import React, {useState, useEffect} from 'react';
import './styles/style.scss';
import Navigatie__item from './components/Navigatie.js';
import Navigatie__logo from './components/NavigatieLogo.js';
import Video from './components/Video.js';
import Card from './components/Card';
import SVG from './components/svg';


function App() {

  const [navigaties, setNavigaties] = useState([])

  useEffect(() => {
    const getNavigaties = async () => {
      const response = await fetch('http://localhost:1337/navigaties')
      const data = await response.json()
      setNavigaties(data)
    }

    getNavigaties()
  }, [])

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
    <div className="App">

      <div className="Navigatie">
        
        <Navigatie__logo />

        <div className="Navigatie__items">
          {navigaties.map(navigatie => (
              <Navigatie__item 
                navigatie={navigatie.NavigatieLink}
              />
            ))}
        </div>
        
      </div>
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

    
    </div>
  );
}

export default App;
