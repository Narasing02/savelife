import React,{useState} from 'react'
import axios from 'axios'
import './index.css'
const Volunteer = () => {
  const[volunteer ,setVolunteer] = useState({
    fullname:'',
    age:'',
    email:'',
    mobile:''
  })
    const VolunteerInputDetails=(e)=>{
        setVolunteer({...volunteer,[e.target.name]:e.target.value})

    }

    const VolunteerDetails=(e)=>{
        e.preventDefault();
        axios.post('/volunteerregistration',volunteer).then(res=>{
            setVolunteer(res.data)
            
        }).catch(err=>console.log(err))
        
    }
  return (
    <div>
        <div className="volunteer-background-page">
            <h1 className='vol-header'>Be a Volunteer & Help Save Lives</h1>

        </div>
        <div className="vol-second-part">
            <h1 className='vol-second-header'>Save Lives by Volunteering</h1>
            <div className="vol-container">
            <p className="vol-para1">A volunteer can be anyone  a student, a working professional, donor family member or relative or friend, transplant recipient or relative or friend, a medical professional, a member of NGO/CSO/Association, who believes in importance of organ donation and transplantation.
                 Join us as a volunteer to make a life-saving difference.</p>
                 <img src="https://img.freepik.com/free-vector/charity-donation-concept-hands-volunteers-holding-giving-heart_74855-10499.jpg?w=1060&t=st=1671040120~exp=1671040720~hmac=8968973efa4948de512be9ccdd035789323261a9543da27127f18f5df9caced1" alt=" " className='vol-second-part-img'/>
                 </div>
                 <h1>Volunteer Do's</h1>
                 <div className="vol-container2">
                    <img src="https://img.freepik.com/free-vector/team-goals-concept-illustration_114360-5146.jpg?w=740&t=st=1671041289~exp=1671041889~hmac=2ce3ca7aabc23a0bb7fedfa196107ac8d185a71e5fb460a813966e4a9ccf1f97" alt=" " className="vol-part-img2"/>
                 <ul>
                    <li className='li-content'> Conduct education/awareness programs on organ donation in schools and colleges.</li>
                    <li className='li-content'>Help us in reaching all sections of the community via different social media websites.</li>
                    <li className='li-content'> Conduct education/awareness programs on organ donation in schools and colleges.</li>
                    <li className='li-content'>Help us in reaching all sections of the community via different social media websites.</li>
                 </ul>
                 </div>
        </div>
        <h1 className='vol-second-header'>Be a Volunteer</h1>
        <div className='vol-form-container'>
            <img src="https://img.freepik.com/free-vector/referral-program-abstract-concept_335657-3067.jpg?w=740&t=st=1671041247~exp=1671041847~hmac=6764b5553aa1ef55056c2fe0b2bad1898f63290ff34de960a4fe90af16a4dfc3" alt=" " className='vol-part-img3'/>
        <form onSubmit={VolunteerDetails} className="vol-form">
            {/* <h5>Become a Volunteer</h5> */}
            <input type="text" placeholder="full name" name="fullname"  onChange={VolunteerInputDetails} value={volunteer.fullname} className="vol-input"/>
            <input type="number" placeholder="age" name="age"  onChange={VolunteerInputDetails} value={volunteer.age} className="vol-input"/>
            <input type="email" placeholder="email" name="email"   onChange={VolunteerInputDetails} value={volunteer.email} className="vol-input"/>
            <input type="number" placeholder="age" name="age"  onChange={VolunteerInputDetails} value={volunteer.age} className="vol-input"/>
            <input type="email" placeholder="email" name="email"   onChange={VolunteerInputDetails} value={volunteer.email} className="vol-input"/>
            <input type="tel" placeholder="mobile number" name="mobile"  onChange={VolunteerInputDetails} value={volunteer.mobile} className="vol-input"/>
            <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
       </div>
    </div>
  )
}

export default Volunteer