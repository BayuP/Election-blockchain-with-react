import React from 'react'
import ReactDOM from 'react-dom'
import {Switch, Route, HashRouter} from 'react-router-dom'
import App from './components/App'
import NavMenu from './components/NavMenu'
import Candidat1 from './components/Candidat1'
import Candidat2 from './components/Candidat2'
import LandingPage from './components/LandingPage'
import AboutMe from './components/AboutMe'

ReactDOM.render(
  <HashRouter>
    <div>
      <NavMenu/>
      <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/profile/candidat1" component={Candidat1} />
          <Route path="/profile/candidat2" component={Candidat2} />  
          <Route path="/home" component={App}/>
          <Route path="/aboutme" component={AboutMe}/>
      </Switch> 
    </div>
  </HashRouter>,
  document.getElementById('root')
);
