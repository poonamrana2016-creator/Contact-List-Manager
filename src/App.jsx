import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Addcontact from './components/Addcontact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-fluid g-0  " style={{height: '100vh'}} >
        <div className="row g-0">
          <Navbar />
        </div>
        <div className="row g-0">
          <Routes>
            <Route path='/'  element={<Dashboard /> } />
            <Route path='/add-contact' element= { <Addcontact /> }  />
          </Routes>
          {/* <Dashboard /> */}
        </div>
      </div>
    </>
  )
}

export default App
