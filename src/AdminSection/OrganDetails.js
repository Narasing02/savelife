import React from 'react'
import DonorgetDetails from '../getDonorDetails'
import'./organDetails.css'
import { Link } from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
const OrganDetails = () => {


  return (
    <>
    <div className='admin-nav'>
      <button className='btn btn-primary'><Link to="/admin/donordata">Donors data</Link></button>
      <button  className='btn btn-secondary'>Acceptor data</button>
      <button className='btn btn-success'>Volunteer data</button>
      <button className='btn btn-danger'>Hospitals data</button>

    </div>
    <DonorgetDetails/>
    <div>

    </div>
    <Routes>
      <Route exact path="/admin/donordata" element={<DonorgetDetails/>}/>
    </Routes>
    
    </>
  )
}

export default OrganDetails