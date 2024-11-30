import React from 'react';
import Header from './components/header/header';
import './App.css';
import Navigation from './components/navigation/navigation';
import Footer from './components/footer/footer';
import Profile from './components/content/profil';

function App() {
  return (
    <>
      <div className="header">
        <Header />
        <Navigation />
      </div>
      <div>
      <Profile />
    </div>
      <footer> <Footer /></footer>
    </>
  );
}

export default App;

