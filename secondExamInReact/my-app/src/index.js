import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/'>
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

