import React, {useState, useEffect} from 'react';
import './styles/style.scss';
import Navigatie__item from './components/Navigatie.js';
import Navigatie__logo from './components/NavigatieLogo.js';
import Video from './components/Video.js';


const mockMovie = {
  "id": 1,
  "published_at": "2021-02-13T19:55:19.003Z",
  "created_at": "2021-02-13T19:55:07.858Z",
  "updated_at": "2021-02-13T19:55:19.036Z",
  "Video": [
      {
          "id": 2,
          "name": "Intro MGM Lion.mp4",
          "alternativeText": "",
          "caption": "",
          "width": null,
          "height": null,
          "formats": null,
          "hash": "Intro_MGM_Lion_695e445ecd",
          "ext": ".mp4",
          "mime": "video/mp4",
          "size": 504.52,
          "url": "/uploads/Intro_MGM_Lion_695e445ecd.mp4",
          "previewUrl": null,
          "provider": "local",
          "provider_metadata": null,
          "created_at": "2021-02-13T19:54:51.428Z",
          "updated_at": "2021-02-13T19:54:51.445Z"
      }
  ]
}

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
     

    </div>
  );
}

export default App;
