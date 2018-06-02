import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import store from './store';
import routes from "routes/index.jsx";
import { getSocketConnection } from "./modules/socket/ducks";
import config from "./configs/main.json";

// render app
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        {routes.map((prop, key) => {
          return <Route to={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

// connect socket
store.dispatch(getSocketConnection(config.server.url));
