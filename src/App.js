import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BuilderComponent } from '@builder.io/react';

const API_KEY = '073680d998ed4e79834480ca32359926';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route render={({ location }) => <CatchallPage key={location.key} />} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

class CatchallPage extends React.Component {
  state = { notFound: false };

  render() {
    return !this.state.notFound ? (
      <BuilderComponent
        apiKey={API_KEY}
        name="page"
        contentLoaded={content => {
          if (!content) {
            this.setState({ notFound: true });
          }
        }}
      >
        <div className="loading">Loading...</div>
      </BuilderComponent>
    ) : (
      <NotFound />
    );
  }
}

const NotFound = () => <h1>No page found for this URL, did you publish it?</h1>;

export default App;
