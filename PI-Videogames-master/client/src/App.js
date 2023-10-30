import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './component/LandingPage/LandingPage';
import HomePage from './component/HomePage/HomePage';
import DetailPage from './component/DetailPage/DetailPage';
import FormPage from './component/FormPage/FormPage';
import Info from './component/Info/Info';
import Error404 from './component/Error 404/Error404'; 

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
          <Route path="/Info" component={Info} />
          <Route component={Error404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;