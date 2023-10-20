import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import LandingPage from './component/LandingPage/LandingPage';
import HomePage from './component/HomePage/HomePage';
import DetailPage from './component/DetailPage/DetailPage';
import FormPage from './component/FormPage/FormPage';
import Info from './component/Info/Info'
import store from './store';
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/detail/:id" component={DetailPage} />
        <Route path="/form" component={FormPage} />
        <Route path="/info" component={Info} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);