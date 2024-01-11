import React ,{useState}from 'react'
import Donor from '../DonorForm'
import Acceptor from '../AcceptorForm'
import DonorForm2 from '../DonorForm2'
import './index.css'
const DonorAndAcceptor = () => {
const [donor ,setDonor] = useState(true)

const DonorForm=()=>{
    setDonor(true)
    const donor = document.getElementById('donor-btn')
    const acceptor = document.getElementById('acceptor-btn')
    
}
const AcceptorForm=()=>{
    setDonor(false)
    const donor = document.getElementById('donor-btn')
    const acceptor = document.getElementById('acceptor-btn')
    
    
}
  return (
    <div>
      < div className="donor-acceptor-part-container1">

         <p className="donator-acceptor-part-para1"> Organ Donation & Transplantation</p>
        
      </div>
      <div className="donor-acceptor-part-container2">
        <h1 className='organ-donor-part-head1'>Organ Donation & Transplantation</h1>
      <p className="donator-acceptor-part-para3">Organ donation is the process of surgically removing an organ or tissue from one person (the organ donor) and placing it into another person (the recipient). Transplantation is necessary because the recipient's organ has failed or has been damaged by disease or injury.</p>
      <p className="donator-acceptor-part-para3">Organ donation and transplantation is removing an organ from one person (the donor) and surgically placing it in another (the recipient) whose organ has failed. Organs that can be donated include the liver, kidney, pancreas and heart.</p>
      </div>
     

      <div className="organ-donor-part-container3">
        <div className="organ-donor-part-mini-container3">
          <h1 className="organ-donor-part-head1"> How to donate</h1>
          <p className="donator-acceptor-part-para3">Becoming an organ donor is easy. You can indicate that you want to be a donor in the following ways:


Tell your family. Make sure your family knows your wishes regarding donation.</p>
<ul className="donator-acceptor-part-para3">
  
<li className="list1-para-1">Taking these steps legally authorizes your organ donation upon death.</li>

<li>If you have designated someone to make health care decisions for you if you become unable to do so, make sure that person knows that you want to be an organ donor.</li>
<li>You may also include your wishes in your living will if you have one, but that might not be immediately available at the time of your death.</li>

<li>It's also very important to tell your family that you want to be a donor.</li> 
<li>Hospitals seek consent from the next of kin before removing organs, although this is not required if you're registered with your state's donor registry or have donor designation on your driver's license or state ID card.</li>
</ul>
        </div > 
        <img src="https://img.freepik.com/premium-vector/charity-donation-concept-with-happy-volunteer-making-heart-sign-donation-boxes_202358-121.jpg?w=740" alt=" " className='organ-donor-part-img3'/>
      </div>
      <h1 className='organ-donor-part-head1'>Organ Transplantation</h1>

      <div className='organ-donor-part-container5'>
        
        <img src="https://img.freepik.com/free-vector/human-heart-transplantation-isometric-composition_1284-24569.jpg?w=740&t=st=1671189764~exp=1671190364~hmac=f7c63e2553a04da2d05a1405f1460dff6be9c9026def35471620ca6181b24ea8" alt=" " className='organ-donation-part-img5'    />

        <div>
          <p className="donator-acceptor-part-para3">Just prior to being removed from the donor, each organ is flushed free of blood with a specially prepared ice-cold preservation solution that contains electrolytes and nutrients. The organs are then placed in sterile containers, packaged in wet ice, and transported to the recipient's transplant center.</p>
        </div>
      </div>

      <div className='organ-donor-part-container4'>
        <img src="https://img.freepik.com/free-vector/isometric-donor-human-organs-round-compositions_1284-54471.jpg?w=1380&t=st=1671188496~exp=1671189096~hmac=2fdff58a732c3d4faaf4e3442ea92021bb72e61ac861c9766067b3bc4927b10f" className="organ-donor-acceptor-part-imag4" alt=" " />
      </div>




        <div className="donor-acceptor">
            <button onClick={DonorForm} id="donor-btn" className='btn btn-primary'>Donor</button>
            <button onClick={AcceptorForm} id="acceptor-btn" className='button-size btn btn-primary'>Acceptor</button>
        </div>
        {
          donor ?<DonorForm2/>: <Acceptor/>
        }
      
    </div>
  )
}

export default DonorAndAcceptor