import React from 'react'
import './App.css'
import Homepage from './pages/homepage/homepage.component'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HatsPage = (props) =>{
  console.log(props)
  return (<div>
    <h1>HATS PAge</h1>
  </div>)
}
function App() {
  return (
    <div>
    <Router>
     <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop/hats' component={HatsPage} />
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
