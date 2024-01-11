import React from 'react'
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import Home from './Home';
import Header from './Navbar';
import DonorAndAcceptor from './DonorAndAcceptor';
import Volunteer from './Volunteer';
// import DonorgetDetails from './getDonorDetails';
import OrganDetails from './AdminSection/OrganDetails';
import Thankyou from './Thankyou';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/savelife" element={<Home/>}/>
        <Route exact path ="/donor" element ={<DonorAndAcceptor/>}/>
        <Route exact path ="/volunteer" element ={<Volunteer/>}/>
        <Route exact path="/admin/organdetails" element={<OrganDetails/>}/>
        <Route exact path="/thankyou" element={<Thankyou/>}/>
      </Routes>
      {/* <DonorgetDetails/> */}
      
      
    </BrowserRouter>
  
  );
}

export default App;
