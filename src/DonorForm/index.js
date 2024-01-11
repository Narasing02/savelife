import React from 'react'
import { FaUserAlt,FaAddressBook,FaWeight,FaFemale,FaMale,FaHandHoldingHeart} from "react-icons/fa"
// import{BsCalendarDateFill,BsFillTelephoneFill} from "react-icons/bs"
// import{MdEmail} from "react-icons/md"
// import {GiBodyHeight} from "react-icons/gi"
// import{BiDonateHeart} from 'react-icons/bi'
// import axios from 'axios'

// import { Button, Form } from "react-bootstrap";
import './index.css'
const Donor  = () => {
  //  const [cadaver,setCadaver] = useState({
  //   fullname:'',
  //   age:'',
  //   email:'',
  //   phone:'',
  //   address:'',
  //   height:'',
  //   weight:''
  //   // gender:'',
  //   // bloodgroup:'',
  //   // organs:''




  //  })

//    useEffect(() => {
     
//    axios.post('/register').then(res=>{
//     setDonor(res.data)
//    }).catch(err=>{
//     console.log(err)
//    })
   
//    }, [])

  //  const InputDonorInformation=(event)=>{
  //   // setDonor({...donor,[event.target.name]:event.target.value})
  //   setCadaver({...cadaver,[event.target.name]:event.target.value})
   
  //  }
   
    // const DonateFormSubmitted=async(e)=>{
    //     e.preventDefault()
    //     // await axios.post('/register',donor).then(res=>{
    //     //    setDonor(res.data)
    //     // }).catch(err=>{
    //     //     console.log(err)
    //     // })
    //     await axios.post('/register',cadaver).then(res=>{
    //         setCadaver(res.data)
    //         console.log(res.data)
    //     }).catch(err=>{
    //         console.log(err)
    //     })
       

    // }
// const [data,setData] = useState({})

// const {
//         register,
        
//         handleSubmit,
//         formState: { errors }
//       } = useForm();
//       const { reset } = useForm();

// const onSubmit=async(data)=>{
//         console.log(data)
//         // setDonordata({,donordata})
//         // console.log(donordata)

    
//        await  axios.post('/register',data).then(res=>{

//         if(res.data.message){
//             console.log(res.data.message)
            

//         }
//         else{
//             console.log("failed to post data")
//         }
           
//         }).catch(err=>{
//             console.log(err)
//         })

// }



  return (
    <div className="donor-form">
     

        <div className="organ-donor-img-container">
            <h1 className='donor-form-header'>Donate Life<FaHandHoldingHeart/> </h1>
            <p className='para1'>Organ donation can be a rewarding and positive experience. It can help a family work through the grieving process and deal with their loss by knowing their loved one is helping save the lives of others. 8.
                 There are no age exclusions to donate.</p>
                 <div className='organ-img1'>
                    <img src="https://i.pinimg.com/564x/53/39/af/5339afbdf5b316555fbb934e2c1f965a.jpg" alt=" " className='organ-img'/>
                    <img src="https://i.pinimg.com/564x/a7/a1/07/a7a107ef372215ca8cdf0860652216c0.jpg" alt="" className='organ-img'/>
                    <img src="https://i.pinimg.com/564x/52/d4/2c/52d42c3733efa5c49e3c58e9751e7853.jpg" alt=" " className='organ-img'/>
                 </div>
                 <p className='para2'>While there are plenty of compelling reasons to donate organs, one of the reasons is self satisfaction. The fact that you are involved in such a noble act is something that is worth appreciation. Being aware of the notion that your organ donation can save a life can make you feel good about yourself. As they say, 
                    “Everything that goes around comes back”.
                     Knowing that you have positively affected several lives, you might be bestowed with good things in life in the near future for your great act. Also, the fact that you will be able to do something good towards mankind is a hugely gratifying feeling in itself.
Choosing to donate body organ is a voluntary step that an individual takes by himself/herself.
 There is no age restriction when it comes to body organ donation. Newborn babies and elders can also donate body organs as long as the body organs are healthy.
  In most cases, individuals below the age of 18 require parent’s approval before considering this act.
 Today, body organ donation is one amongst the very few acts in the world for which a person is remembered even after his/her death.</p>



            {/* <img src="https://img.freepik.com/premium-vector/organ-donation-woman-girl-donates-heart-people_613284-2434.jpg?w=740" alt="donating-form"/> */}
            {/* <div className="img1-organ1">
           
            <img src="https://img.freepik.com/free-vector/organ-donation-concept-container-with-human-organ-text-human-lungs-eyeball-liver-heart-blood_74855-10973.jpg?w=1060&t=st=1670751677~exp=1670752277~hmac=49c5f45430431323011b1c7c034660bf2c1c9eb7a3db884d9e8cbda31f84b240"  className="img1organ1 " alt=" "/>
        </div>
        <div>
            <img src="https://i.pinimg.com/474x/47/fb/8b/47fb8bdbd97fe639c8805367f5420232.jpg" alt=""/>
            <img src="https://i.pinimg.com/474x/47/fb/8b/47fb8bdbd97fe639c8805367f5420232.jpg" alt=""/>
        </div> */}
        {/* <div>
            <img src="https://i.pinimg.com/474x/47/fb/8b/47fb8bdbd97fe639c8805367f5420232.jpg" alt=""/>
        </div> */}
        </div>
        <div className="home-donor-part1">
        <div className="home-donor-part1-imgcontainer">
        <img src="https://www.templehealth.org/sites/default/files/2021-04/one-organ-donor-saves-8-lives_0.png" alt=" "  className="home-donor-part1-img1"/>
        </div>
        <div>
          <p className='home-img-donor-para1'>A Donor not donate his organs his donates new life to others</p>
          <p className='home-img-donor-para1'>If someone under the age of 18 dies in England, their parents would be approached about organ donation and given the opportunity to consent on their child’s behalf. Organ donation would only go ahead with the agreement of the family. 
          he decision about whether some or all organs or tissue are suitable for transplant is always made by medical specialists at the time of donation, taking into account your medical, travel and social history.</p>
          <div className="home-donor-part1-imgcontainer2">
            <img src="https://img.freepik.com/free-vector/isometric-icons-set-with-different-donor-human-organs-transplantation-isolated-white-background-3d_1284-32249.jpg?w=1480&t=st=1671176004~exp=1671176604~hmac=079e0fbfa6471fd87a2ea2e5e50671c78c32a03ab166431c3a7bdc08965e538d" alt="" className='home-donor-part1-img2'/>
          </div>
        
        </div>
        
      </div>
      {/* <div>FormValidation
            <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Please enter a valid email"
              }
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="gender">
          <Form.Label>Select Gender</Form.Label>
          <Form.Check
            type="radio"
            label="Male"
            value="male"
            {...register("gender", {
              required: "Please select your gender"
            })}
          />
          <Form.Check
            type="radio"
            label="Female"
            value="female"
            {...register("gender")}
          />
          {errors.gender && <p className="errorMsg">{errors.gender.message}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="skills">
          <Form.Label>Select Your Skills</Form.Label>
          <Form.Check
            type="checkbox"
            label="Heart"
            value="heart"
            {...register("organs", {
              required: "Please select at-least one organ"
            })}
          />
          <Form.Check
            type="checkbox"
            label="Liver"
            value="liver"
            {...register("organs")}
          />
          <Form.Check
            type="checkbox"
            label="Pancrease"
            value="pancrease"
            {...register("organs")}
          />
          <Form.Check
            type="checkbox"
            label="Eyes"
            value="eyes"
            {...register("organs")}
          />
          {errors.skills && <p className="errorMsg">{errors.skills.message}</p>}
        </Form.Group>
        <label></label>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </div>

    </div> */}










       {/* <div className="donor-form-container">
        <h1>Donor Form</h1>

      <form className="donor-form-person" onSubmit={DonateFormSubmitted}>
       
            <div className="donor-user-icon">
            <FaUserAlt className='icon-user'/>

            <input type="text" id="username" className='username' placeholder="Full Name" name="fullname"  onChange={InputDonorInformation} value={cadaver.fullname}/>
            </div>
            <div className="donor-user-icon">
            <BsCalendarDateFill className='icon-user'/>

            <input type="number" id="age" className='username' placeholder="Age" name="age"  onChange={InputDonorInformation} value={cadaver.age}/>
            </div>
            <div className="donor-user-icon">
            <MdEmail className='icon-user'/>

            <input type="email" id="email" className='username' placeholder="Email" name="email"  onChange={InputDonorInformation} value={cadaver.email}/>
            </div>
            <div className="donor-user-icon">
            <BsFillTelephoneFill className='icon-user'/>

            <input type="tel"  pattern="[0-9] {3}-[0-9] {3}-[0-9]{4}" id="phone" className='username' placeholder="Mobile Number" name="phone"  onChange={InputDonorInformation} value={cadaver.phone}/>
            </div>
            <div className="donor-user-icon">
            <FaAddressBook className='icon-user'/>

            <textarea cols={50} rows={5}  id="address" className='username' placeholder="Address" name="address"  onChange={InputDonorInformation} value={cadaver.address}/>
            </div>
            <h3>Medical Data</h3>
            <div className=" height-weight">
            <GiBodyHeight  className="user-height"/>

            <input type="number" id="height" className='username height' placeholder="Height (ft)"  name="height"  onChange={InputDonorInformation} value={cadaver.height}/>
            <FaWeight className=" user-weight" />
            <input type="number" id="weight" className='username weight'  placeholder="Weight (kg)" name="weight"  onChange={InputDonorInformation} value={cadaver.weight}/>
            </div>
            <div className="user-gender">
             <h4>Gender</h4> 
            <div className='male-female'>
             <input type="radio" name="gender"  onChange={(e)=>InputDonorInformation(e.target.value)} value="male"/>Male<FaMale  className=" user-gender-mf"/>
            <input type="radio" name="gender"  onChange={(e)=>InputDonorInformation(e.target.value)} value="female"/>Female<FaFemale  className="user-gender-mf"/> 
              <select  name="gender"  onChange={InputDonorInformation} value={cadaver.gender}>
            <option ></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            </div>
            </div>
            <div className="blood-group">
            
            <p>Blood group</p>
            <select  name="bloodgroup"  onChange={InputDonorInformation} value={cadaver.bloodgroup}>
            <option ></option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select>

            
            </div>
            <h3>Organ's donation</h3>
            
            <div className="organ-donated-user">
           

            <div className="donor-user-icon">
            <textarea cols={50} rows={5}  id="organdonor" className='username' placeholder="wich organs you donate ? ex : heart,kidney,liver,eyes" name="organs"  onChange={InputDonorInformation} value={cadaver.organs}/> 
            
             {/* <label>
            <input type="checkbox" name="organs"  onChange={InputDonorInformation} value="Heart"/>Heart
            </label>
            <label>
            <input type="checkbox" name="organs"  onChange={InputDonorInformation}  value="liver"/>Liver
            </label>
            <label>
            <input type="checkbox" name="organs"  onChange={InputDonorInformation}  value="kidney"/>Kidney
            </label>
            <label>
            <input type="checkbox" name="organs"  onChange={InputDonorInformation}  value="intestine"/>Intestine
            </label>
            <label>
            <input type="checkbox" name="organs"  onChange={InputDonorInformation}  value="eyes"/>Eyes
            </label>
            <label>
            <input type="checkbox" name="organs"  onChange={InputDonorInformation}  value="pancrease"/>Pancrease
            </label>  */}

             {/* </div>
            </div>
            <div className="">
                <h3>Acknowledgement and Terms</h3>
            <label>
                <input type="checkbox"/> I confirm that the information i provided in this document is accurate and true.
            </label>
            <label>
                <input type="checkbox"/> I allow my organs to be donated for medical transplant or educational/research purposes.
            </label>
            <label>
                <input type="checkbox"/> I confirm that i always need to keep the organ donor card and the document that came with it.
            </label>
            <label>
                <input type="checkbox"/> I allow my information to be submitted to donor registry.
            </label>
            </div>
            <button type="submit" className='donate-form-submit'>Donate<span><BiDonateHeart/></span></button>
            
            
           
           
      </form>

      </div>  */}
     
       
            
            {/* <label htmlFor='age'>Age : </label>
            <input type="text" id="age"/>
            <div>
                <div>
                <input type="phone"/>
            <input type="email"/>

                </div>
            
            <textarea cols={50} rows={5}/>

            </div>
            
            <h3>Medical Data</h3>
            <div><input type="text" placeholder='height'/>
            <input type="text" placeholder='weight'/></div>
            
            <h3>Organ Donation</h3>
            <div>
            <label>
            <input type="checkbox"/>Heart
            </label>
            <label>
            <input type="checkbox"/>Liver
            </label>
            <label>
            <input type="checkbox"/>Eyes
            </label>
            <label>
            <input type="checkbox"/>Pancrease
            </label>

            </div>
  
          
            <button type="submit">Register</button> */} 
    </div>
  )
}


export default Donor