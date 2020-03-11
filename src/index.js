import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from './App';
import About from "./about";
import Services from "./services";
import Portfolio from "./portfolio";
import Team from "./team";
import Contact from "./contact";
import Notfound from "./notfound";
import Header from "./header";
import Footer from "./footer";
// eslint-disable-next-line
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Header />
            <hr />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/about" component={About} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/team" component={Team} />
                <Route exact path="/contact" component={Contact} />
                <Route component={Notfound} />
            </Switch>
            <Footer />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// To use service workers, uncomment the line below. Be sure before doing so
// to understand additional deployment configuration this might require
// here https://facebook.github.io/create-react-app/docs/deployment
// serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() above. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
