import React,{useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Navigatie__item from './components/Navigatie.js';
import Navigatie__logo from './components/NavigatieLogo.js';


import Home from './pages/Home'
import Product from './pages/Product'

import './styles/style.scss';

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

      
      <BrowserRouter>
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


        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/product" exact component={Product} />
        </Switch>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
