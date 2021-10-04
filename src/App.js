
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/events">
            <Events></Events>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
