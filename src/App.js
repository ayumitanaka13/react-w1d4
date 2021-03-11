import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavBar from './NavBar/NavBar';
import Home from './Home';
import Help from './Help';

// const Home = () => <h1>Home</h1>
// const About = () => <h1>About</h1>
const Host = () => <h1>Host</h1>
// const Help = () => <h1>Help</h1>
const Signup = () => <h1>Signup</h1>
const Login = () => <h1>Login</h1>
const Page404 = () => <h1>Error</h1>

function App() {
  return (
    <Router>
      <Route path="/" component={NavBar} />
      <Switch>
        {/* <NavBar /> */}
        {/* <Home /> */}
        {/* <About /> */}

        <Route
        　 path="/"
          exact
          render={(props) => {
          return(
            <Home history={props.history} match={props.match} />
          )
        }} />
        {/* <Route path="/about" component={About} /> */}
        <Route path="/host" component={Host} />
        <Route path="/help" component={Help} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

//  {/* first way to display a component via Route */}
//  <Route path='/' exact component={Home} />

//  {/* second way to display a component via Route */}
//  <Route path='/' exact render={() => {
//    return(
//      <Home />
//    )
//  }} />

//  {/* third way to display a component via Route */}
//  <Route path='/' exact>
//    <Home />
//  </Route>