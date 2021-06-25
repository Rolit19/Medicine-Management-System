import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import db from './firebase';

import CircularProgress from '@material-ui/core/CircularProgress';
import { selectUserData, AUTOLOGIN } from './reduxSlices/authSlice';
import Login from './Pages/Login/Login';
import LandingPage from './Pages/LandingPage/LandingPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './components/profile/Profile';
import About from './components/Aboutus/about.js';
import './App.css';
import Orders from './Pages/Orders/Orders';
import CreateOrder from './Pages/CreateOrder/CreateOrder';
import Dashboard from './Pages/Dashboard/Dashboard';
import ProfileDisplay from './components/DisplayProfile/Profiledisplay';
import './App.css';
const App = () => {

  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("users").where("category", "==", "owner").get().then(snap => {
      snap.forEach(doc => {
        console.log(doc.id);
      })
    })
    dispatch(AUTOLOGIN());
  }, [])
  if(userData.loading) {
    return (
      <div className="d-flex mt-5 justify-content-center">
        <CircularProgress size={80} />
      </div>
    )
  }

  return (
    <div className="App">
        <Route path="/" exact component={Header} />
        <Route path="/" exact component={LandingPage} />
        {
          !userData.token ? (
            <>
            <Switch>
              <Route path="/" exact component = {Header} />
              <Route path="/login" component={Login} />
              <Redirect to="/login" />
            </Switch>

            </>
          ) : (
            <>
              <Header />
              <Switch>
                <Route exact path="/profile" component = {Profile} />
                <Route exact path="/orders" component = {Orders} />
                <Route exact path="/new-order" component = {CreateOrder} />
                <Route  path="/about" component = {About} />
                <Route  path="/dashboard" component = {Dashboard} />
                <Route  path="/profileDisplay" component = {ProfileDisplay} />
                <Redirect to = "/" />
              </Switch>
            </>
          )
        }
        <Route  path="/"  component = {Footer} />
          {/* <Route  path="/" component={Footer} /> */}
    </div>
  );
}

export default App;