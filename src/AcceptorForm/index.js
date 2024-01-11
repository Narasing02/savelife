import React,{useState} from 'react'
import { FaUserAlt,FaAddressBook,FaWeight,FaFemale,FaMale,FaHandHoldingHeart,FaHospital} from "react-icons/fa"
import{BsCalendarDateFill,BsFillTelephoneFill} from "react-icons/bs"
import{MdEmail} from "react-icons/md"
// import {GiBodyHeight} from "react-icons/gi"
// import{BiDonateHeart} from 'react-icons/bi'
import{GiInternalOrgan} from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './index.css'

const Acceptor = () => {

    let navigate = useNavigate()

    const[email1 ,setEmail1] = useState({
        email:''
    })
const [accept,setAccept]=useState({
    fullname:"",
    age:'',
    email:'',
    phone:'',
    address:'',
    gender:'',
    bloodgroup:'',
    sufferyears:'',
    organwant:'',
    hospital:'',


})

const acceptorInputText=(e)=>{
    setAccept({...accept,[e.target.name]:e.target.value})
    setEmail1({...email1,[e.target.name]:e.target.value})

}

const acceptorSubmit=async(e)=>{
    e.preventDefault();
    await axios.post('/acceptorregistration',accept).then(res=>{
        console.log(res.data)
    })
    await axios.post('/receiptregisteremail',email1).then(res=>{
        setEmail1(res.data)
    })
  
    let ageSpan = document.getElementById("ageSpan")
    let genderSpan = document.getElementById("genderSpan")
    let bloodSpan =document.getElementById("bloodSpan")
    let sufferSpan = document.getElementById("sufferSpan")
    let telSpan = document.getElementById("telSpan")
    let name = document.getElementById('username')
    let age = document.getElementById('age')
    let phone = document.getElementById('phone')
    let gender = document.getElementById('gender')
    let bloodgroup= document.getElementById('bloodgroup')
    let suffer =document.getElementById('suffer')

//telephone
 let phoneSp = phone.value

    let ageVal=age.value>10 && age.value<100
    let genderVal = gender.value === "male" || gender.value === "female" || gender.value === "Male" ||gender.value === "Female" ||gender.value === "other" ||gender.value === "Other" ;
    let bloodVal = bloodgroup.value==="A+" || bloodgroup.value==="B+" || bloodgroup.value==="AB+"||bloodgroup.value==="O+" ||bloodgroup.value==="A-"||bloodgroup.value==="B-"||bloodgroup.value==="AB-"||bloodgroup.value==="O-"
    let sufferVal =Math.floor(suffer.value)>0
    let phoneVal = (phoneSp.length >=10 && phoneSp.length<=10) 
    console.log(typeof(phoneSp))
    console.log(phoneSp.length)
    if(ageVal){
        console.log("age can be correct")
    }
    else{
        ageSpan.textContent="* give correct valid age 10 to 100"
           ageSpan.style.color="red"
    }

    if(genderVal ){
        console.log("correct")
    }
    else{
        genderSpan.textContent="* give correct valid gender like male/ female/ other"
           genderSpan.style.color="red"

    }
    if(bloodVal ){
        console.log("correct")
    }
    else{
        bloodSpan.textContent="* give correct valid blood group like A+/AB+/A-/B+/AB-/B-/O+/O-"
           bloodSpan.style.color="red"

    }
    if(sufferVal){
        console.log("correct")
    }
    else{
        sufferSpan.textContent="* give correct valid months"
        sufferSpan.style.color="red"
    }


   
    if(phoneVal ){
        console.log("correct")
        
    }
    else{
        telSpan.textContent="* give correct valid phone number"
        telSpan.style.color="red"
    }


    


}
const NavThank=()=>{
    navigate('/thankyou')
}


  return (
    <div className="acceptor-form">
        <div>
            <img src="https://i.pinimg.com/564x/1f/76/37/1f76373deadda708ae6ceb14465ac16c.jpg" alt=" "/>

        </div>
        <div >
            <h1>Acceptor Form</h1>
            <form  className="acceptor-form-organ" onSubmit={acceptorSubmit}>
            <div className="acceptor-user-icon">
            <FaUserAlt className='icon-acc-user'/>
            <input type="text" id="username" className='acc-username' placeholder="Full Name" name="fullname" onChange={acceptorInputText} value={accept.fullname} />
            </div>
            <div className="acceptor-user-icon">
            <BsCalendarDateFill className='icon-acc-user'/>
            <input type="number" id="age" className='acc-username' placeholder="Age" name="age" onChange={acceptorInputText} value={accept.age} />
            </div>
            <span id="ageSpan"></span>
            <div className="acceptor-user-icon">
            <MdEmail className='icon-acc-user'/>
            <input type="email" id="email" className='acc-username' placeholder="Email" name="email" onChange={acceptorInputText} value={accept.email && email1.email} />
            </div>
            <div className="acceptor-user-icon">
            <BsFillTelephoneFill className='icon-acc-user'/>
            <input type="tel" id="phone" className='acc-username' placeholder="Phone Number" name="phone" onChange={acceptorInputText} value={accept.phone} />
            
            </div>
            <span id="telSpan"></span>
            <div className="acceptor-user-icon">
            <FaAddressBook className='icon-acc-user'/>
            <input type="text" id="address" className='acc-username' placeholder="Address" name="address" onChange={acceptorInputText} value={accept.address} />
            </div>
            <div className="acceptor-user-icon">
            <BsFillTelephoneFill className='icon-acc-user'/>
            <input type="text" id="gender" className='acc-username' placeholder="Male/Female or Other" name="gender" onChange={acceptorInputText} value={accept.gender} />
            </div>
            <span id="genderSpan"></span>
            <div className="acceptor-user-icon">
            <BsFillTelephoneFill className='icon-acc-user'/>
            <input type="text" id="bloodgroup" className='acc-username' placeholder="Bloodgroup: ex:A+,A- "  name="bloodgroup" onChange={acceptorInputText} value={accept.bloodgroup}/>
            </div>
            <span id="bloodSpan"></span>
            <div className="acceptor-user-icon">
            <GiInternalOrgan className='icon-acc-user'/>
            <input type="text" id="suffer" className='acc-username' placeholder="How many years to suffer " name="sufferyears" onChange={acceptorInputText} value={accept.sufferyears}/>
            </div>
            <span id="sufferSpan"></span>
            <div className="acceptor-user-icon">
            <GiInternalOrgan className='icon-acc-user'/>
            <input type="text" id="organ" className='acc-username' placeholder="Which organ wants ?" name="organwant" onChange={acceptorInputText} value={accept.organwant}/>
            </div>
            <div className="acceptor-user-icon">
            <FaHospital className='icon-acc-user'/>
            <input type="text" id="hospital" className='acc-username' placeholder="Consult hospital name" name="hospital" onChange={acceptorInputText} value={accept.hospital}/>
            </div>
            <div className="acceptor-user-button">
                <button type="submit" className='acc-username' onClick={NavThank}>Submit</button>
            </div>

            </form>
        </div>
    </div>
  )
}

export default Acceptor