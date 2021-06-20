import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css'
import Feed from './components/Feed/Feed';
require('dotenv').config();

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* widget */}
      </div>

    </div>
  );
}

export default App;
