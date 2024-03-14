import './App.css'
import Footer from './components/Footer';
import Projects from './components/Projects';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile.jsx';
import { Routes, Route } from 'react-router-dom';


function App() {


  return (
    <>

      <div className=" bg-white dark:bg-darkbg m-0">
        <div className="main-container ">
          <Header />
          <Hero />
          <Skills />
          <Profile />
          <Projects />
        </div >
      </div>


      <Footer />

    </>
  )
}

export default App
