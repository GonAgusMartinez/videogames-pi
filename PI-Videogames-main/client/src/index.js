import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import LandingPage from './component/DetailPage'; 
import HomePage from './component/HomePage'; 
import DetailPage from './component/LandingPage'; 
import FormPage from './component/FormPage';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/detail/:id" component={DetailPage} />
        <Route path="/form" component={FormPage} />
        {/* Otras rutas */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);