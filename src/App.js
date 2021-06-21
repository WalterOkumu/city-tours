import React, { Component } from 'react'

// import scss
import './App.scss';

// import Component
import Navbar from './components/Navbar/Navbar'
import TourList from './components/TourList'

class App extends Component {
  render(){
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    )
  }
}

export default App;
