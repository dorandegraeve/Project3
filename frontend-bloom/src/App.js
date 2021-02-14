import React, {useState, useEffect} from 'react';
import './styles/style.scss';
import Navigatie__item from './components/Navigatie.js';
import Navigatie__logo from './components/NavigatieLogo.js';


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

    </div>
  );
}

export default App;
