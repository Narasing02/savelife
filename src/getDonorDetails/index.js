import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';


const DonorgetDetails = () => {

    const[details,setDetails] = useState([])
    const [acceptor,setAcceptor] = useState([])
    const [vdata,setVdata] = useState([])

  

    useEffect(() => {

      axios.get('/acceptorregistration',acceptor).then(res=>{
        setAcceptor(res.data)
      })
   
         axios.get('/register',details).then(res=>{
            setDetails(res.data)
         }).catch(err=>console.log(err))

         axios.get('/volunteerregistration ',vdata).then(res=>{
          setVdata(res.data)
         }).catch(err=>console.log(err))
    }, [])
    


  return (
    <div>


   <div>
    ORGAN DONOR DETAILS
        <Table striped bordered hover >
      <thead>
        <tr >
          
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Phone </th>
          <th>Height</th>
          <th>Weight</th>
          <th>Gender</th>
          <th>Address</th>
          <th>Blood Group</th>
          <th>Organs</th>
        </tr>
      </thead>
      <tbody>
        {details.map(each=><tr key={each.id}>
          
          <td>{each.fullname}</td>
          <td>{each.age}</td>
          <td>{each.email}</td>
          <td>{each.phone}</td>
          <td>{each.height}</td>
          <td>{each.weight}</td>
          <td>{each.gender}</td>
          <td>{each.address}</td>
          <td>{each.bloodgroup}</td>
          <td>{each.organs}</td>
        </tr>)}
        
        
 
     
      </tbody>
    </Table>
    </div>
    <div>
    ORGAN ACCEPTOR DETAILS
        <Table striped bordered hover >
      <thead>
        <tr >
          
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Phone </th>
          
          <th>Gender</th>
          <th>Address</th>
          <th>Blood Group</th>
          <th>Suffer Years</th>
          <th>Hospital</th>
          <th>Organs</th>


        </tr>
      </thead>
      <tbody>
        {acceptor.map(each=><tr key={each.id}>
          
          <td>{each.fullname}</td>
          <td>{each.age}</td>
          <td>{each.email}</td>
          <td>{each.phone}</td>
          
          <td>{each.gender}</td>
          <td>{each.address}</td>
          <td>{each.bloodgroup}</td>
          <td>{each.sufferyears}</td>
          <td>{each.hospital}</td>

          <td>{each.organwant}</td>
        </tr>)}
        
        
 
     
      </tbody>
    </Table>
    </div>

    <div>
    ORGAN VOLUNTEER DETAILS
        <Table striped bordered hover >
      <thead>
        <tr >
          
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Phone </th>
          
          


        </tr>
      </thead>
      <tbody>
        {vdata.map(each=><tr key={each.id}>
          
          <td>{each.fullname}</td>
          <td>{each.age}</td>
          <td>{each.email}</td>
          <td>{each.mobile}</td>
          
          

          
        </tr>)}
        
        
 
     
      </tbody>
    </Table>
    </div>

  
      
    </div>
  )
}

export default DonorgetDetails
