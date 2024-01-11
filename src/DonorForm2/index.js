import React,{useState} from 'react'
import axios from 'axios'
import './index.css'
import{useNavigate} from 'react-router-dom'

const DonorForm2 = () => {

  let navigate = useNavigate();

  const [email1 ,setEmail1]=useState({
    email:''
  })
    const[data,setData]=useState({
        fullname:"",
        age:'',
        email:'',
        phone:'',
        address:'',
        height:'',
        weight:'',
        gender:'',
        bloodgroup:'',
        organs:''


    })

   
    // const data1 = data.email;
    // console.log(data1)

    const userInputText=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        setEmail1({...email1,[e.target.name]:e.target.value})
        
     
        
    }
    
       





    const donorSubmission=async(e)=>{
        e.preventDefault();
        

        

        
        await axios.post('/register',data).then(res=>{
            setData(res.data);
            console.log(res.data)
        })

        await axios.post('/registeremail',email1).then(res=>{
            console.log(res.data)
        })

        // return(< navigate to='/Thankyou'/>)


    }

    const emailSubmit=()=>{
      navigate('/thankyou')

    }



  return (
    <div  className='organ-donor-appli-container'>
      {/* <div className='donor-img-container'>
        <img src="https://img.freepik.com/free-photo/sharing-is-caring-money-donation-give-concept_53876-124765.jpg?w=1380&t=st=1673706623~exp=1673707223~hmac=eabec11d8cf8123b5f27d01f7ce6d2ade17f52c94249f898a13e39d9c2168f0a " alt=" " className='donor-form-img'/>
      </div> */}
        <form onSubmit={donorSubmission} className='form-donor-application'>
            <input type="text" placeholder="username" name="fullname" onChange={userInputText} value={data.fullname} className="donor-input-form"/>
            <input type="text" placeholder="Age" name="age" onChange={userInputText} value={data.age} className="donor-input-form"/>
            <input type="email" placeholder="Email" name="email" onChange={userInputText} value={data.email  && email1.email} id="email" className="donor-input-form"/>
            <input type="text" placeholder="Phone" name="phone" onChange={userInputText} value={data.phone} className="donor-input-form"/>
            <input type="text" placeholder="Address" name="address" onChange={userInputText} value={data.address} className="donor-input-form"/>
            <input type="text" placeholder='Height' name="height" onChange={userInputText} value={data.height}  className="donor-input-form"/>
            <input type="text" placeholder="Weight" name="weight" onChange={userInputText} value={data.weight}  className="donor-input-form"/>
           <input type="text" placeholder="Male / Female or Other" name="gender" onChange={userInputText} value={data.gender}  className="donor-input-form"/>
           <input type="text" placeholder='Blood group A+,B+,O+,A-,B-,O-,AB+,AB-' name='bloodgroup'  onChange={userInputText} value={data.bloodgroup} className="donor-input-form"/>
           <textarea cols={50} rows={5} name="organs" placeholder="Organs like Heart, Kidney,Lungs" onChange={userInputText} value={data.organs} className="donor-input-form donor-textarea"/>
            <button type="submit" onClick={emailSubmit} className="btn btn-primary  button-size">Submit</button>
        </form>
    </div>
  )
}

export default DonorForm2