import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css'
import Feed from './components/Feed/Feed';
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login/Login';
import { auth } from './firebase';
import Widget from './components/Widget/Widget';

require('dotenv').config();

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(login({
          displayName: userAuth.displayName,
          email: userAuth.email,
          uid: userAuth.uid,
          photoURL: userAuth.photoURL,
        }))
      } else {
        //user is logged out
        dispatch(logout());
      }
    })
  }, [dispatch])
  return (
    <div className="app">
      <Header />
      {!user ? <Login /> : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      )}
    </div>
  );
}

export default App;
