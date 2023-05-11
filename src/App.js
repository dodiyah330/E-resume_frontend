import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom"
import Experience from './Components/MyExperiences/ExperienceComponents/Experience';
import CreateResume from './Components/CreateResumeComponents/CreateResume';
import Home from './Components/HomeComponents/Home';
import selectedLayout from './Components/GenerateMyResume/selectedLayout/selectedLayout';
import Login from './Components/Login/Login'
import Registration from './Components/Registration/Registration';
import ProtectRoutes from './Components/ProtectedRoutes.js/ProtectRoutes';
import Layoutselection from './Components/Layoutselection/Layoutselection'
import './App.css'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Registration" component={Registration} />
          <Route exact path="/Login" component={Login} />
          <ProtectRoutes exact path="/CreateResume" component={CreateResume} />
          <ProtectRoutes exact path="/CreateResume/Experience/:id" component={Experience} />
          <ProtectRoutes path="/layoutSelection" component={Layoutselection} />
          <ProtectRoutes path="/GenerateMyResume/:id" component={selectedLayout} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;