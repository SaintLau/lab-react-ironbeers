import React from 'react';
import './App.css';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

class App extends React.Component {
  render(){
    return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/:id" component={BeerDetails} />
        </Switch>
    </div>
  );
  }
  
}

export default App;
