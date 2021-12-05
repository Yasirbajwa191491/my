import React,{useEffect,useState} from 'react';


const App= () => {
   const [data,setData]=useState([]);
   
   const getData=async ()=>{
    const res=  fetch("http://localhost:3000/student")  ;
    setData(await (await res).json());
   }
   useEffect(() => {
     getData(); 
      
   },[])
   //console.log(data);
   return (
      <>
     <table style={{border:"1px"}}>
      <tr>
         <th> id </th>
         <th> firstName </th>
         <th> lastName </th>
         <th> phone </th>
         <th> email </th>
         <th> address </th>
         <th> message </th>
      </tr>

{
   data.map((item)=>{
      console.log(item.id);
      return (
      <tr>
         {/* <td>{item.id}</td> */}
         <td>{item.firstName}</td>
         <td>{item.lastName}</td>
         <td>{item.phone}</td>
         <td>{item.email}</td>
         <td>{item.address}</td>
         <td>{item.message}</td>
      </tr>)
   })
}

</table>
     
     

     
        </>
   )
}

export default App;
