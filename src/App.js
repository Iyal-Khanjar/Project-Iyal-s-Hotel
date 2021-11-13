
import './App.css';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Entertainment from './components/Entertainment/Entertainment';
import Rooms from './components/BookARoom/BookARoom';
import Footer from './components/Footer/Footer';
import Login from './components/login/login';
import Register from './components/register/register';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
        <Route exact path='/Entertainment'>
          <Entertainment />
        </Route>
        <Route exact path='/Rooms'>
          <Rooms />
        </Route>
        <Route exact path='/Login'>
          <Login />
        </Route>
        <Route exact path='/Register'>
          <Register />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
