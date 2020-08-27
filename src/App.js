import Welcome from './Components/welcome/welcome';
import Clock from './Components/clock/clock'
import Contact from './Components/contact/contact'
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from "./Components/navigation/Navigation";
import Jeopardy from './Components/jeopardy/Jeopardy';




class App extends Component {
  render() {
    return (
      <div>
        
        <Navigation />
        <Switch>

          <Route path="/welcome/:name" component={Welcome} />
          <Route  path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
          <Route path="/jeopardy" component={Jeopardy} />
        </Switch>
      </div>
    );
  }
}

export default App;


