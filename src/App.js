import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [data, setData] = useState()

  useEffect(()=>{

    axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc').then((res)=>{
      console.log(res.data)
      setData(res.data.results)
    }).catch((err)=>{
      console.log(err)
    })
    
  },[])

  


  return (
   <div style={{ width:"30%", display:"flex", margin:"20px auto", border:"0.2px solid black", justifyContent:"space-evenly"}}>
    <img src='https://randomuser.me/api/portraits/women/88.jpg '  style={{ border:"0.2px solid green", margin:"10px 5px"}} />
    <div style={{display:"flex", flexDirection:"column" , gap:"8px 0px", margin:"15px 5px"}}>
      <div  style={{display:"flex", flexDirection:"row", justifyContent:"space-between" , gap:"1px 5px" }}>
        <div>{`Firstname : ${data[0].name.first} `} </div>
        <div> {`Lastname : ${data[0].name.last} `}</div>
      </div>
      <div>{`Gender : ${data[0].gender} `}</div>
      <div>{`Phone Number : ${data[0].phone} `}</div>
    </div>




   </div>
  );
}

export default App;
