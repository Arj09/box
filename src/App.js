import react from 'react'
function App() {
  return (
    <div style={{width:"80vw", height:"100vh", margin:"auto"}}>
      
      <div style={{width:"20%", height:"10%", backgroundColor:"green",color:"white", borderRadius:"5px", padding:"20px", marginLeft:"50px", marginTop:"50px"}}>
        <div style={{display:'flex', flexDirection:'row', margin:"10px auto", justifyContent:"space-between"}}>
          <text>Production</text>
          <text>Time : 11:00 </text>
        </div>
        <text style={{display:"flex", flexDirection:"row", justifyContent:"end"}}>Date  : 10/01/2023</text>
       
      </div>
    </div>
  );
}

export default App;
