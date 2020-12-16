import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import fts from './features';

function App() {
  return (
    <Router>
      <div className="App">
        <h2 style={{color: "#1bb953", padding: '1rem', margin: 0}}>Welcome to React Demo</h2>
        <div style={{display: 'flex', background: '#fff'}}>
          {
            [
              {value: 'Home', path: '/'}, 
              {value: 'About Me', path: 'aboutme'}, 
              {value: 'Contact Me', path: 'contactme'}, 
              {value: 'Gallery', path: 'gallery'}
            ].map((item, i) => {
              return (
                <Link key={i} to={item.path} style={{margin: '0.5rem', padding: '0.5rem', cursor: 'pointer'}} >
                  { item.value }
                </Link>
              )
            })
          }
        </div>
        <Switch>
          <Route path="/aboutme">
            <fts.AboutMe />
          </Route>
          <Route path="/contactme">
            <fts.ContactMe />
          </Route>
          <Route path="/gallery">
            <fts.Gallery />
          </Route>
          <Route path="/">
            <fts.Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
