import React from 'react'
import './App.css'
import Homepage from './pages/homepage/homepage.component'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Shop from './pages/shop/shop.component'

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
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
