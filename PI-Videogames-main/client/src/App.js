import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import HomePage from './component/HomePage';
import DetailPage from './component/DetailPage';
import FormPage from './component/FormPage';
import './app.css'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Henry Videogames</h1>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/detail/:id" component={DetailPage} />
          <Route path="/form" component={FormPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;