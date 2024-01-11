import React from 'react'
import Donor from '../DonorForm'
import OrganCards from '../BootstrapCards'
import './index.css'
const Home = () => {
  return (
    <div>
    <div className="home-container">
        <div className="home-para">
            <p className="home-para1">The measure of life is not its duration, but its donation
          because of how long you live. you are important because of how effective you live.</p>
          <div>
        <button className="home-btn">Donor</button>
        </div>
        </div>
        

    </div>
    <Donor/>
    <OrganCards/>


    </div>

  )  
}

export default Home