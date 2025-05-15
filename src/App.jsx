import React from 'react';
import './styles.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contacts from './components/contacts/Contacts';

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contacts />
    </>
  )
}

export default App
