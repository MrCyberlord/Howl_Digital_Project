import React from 'react';
import { Hero, Navbar, Clients, FlowChart, Footer, ExtraInfo } from './components';
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FlowChart />
      <Clients />
      <ExtraInfo />
      <Footer />
    </div>
  )
}

export default App