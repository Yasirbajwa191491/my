import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import {gadata} from "./Gallerydata";
import { NavLink } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Menubar from "./Menubar";
import "./index.css";
import logo from "./images/breakfast.jpg";
import Footer from './Footer';
const GalleryPhoto = () => {
    const [data, setdata] = useState(gadata);
    const filterItem=(cate)=>{
    const updateItem=gadata.filter((ele)=>{
        return ele.category === cate;
    })
    setdata(updateItem);
    }
    let str="I have come to know through your </br> advertisement in Express news on September";
    
    return (
        < >
      <Menubar />
         <div style={{backgroundColor:"#30336b"}}>
       <h1 className="text-center mt-5 text-danger">Cards</h1>   
       </div>
       <div className="d-flex justify-content-around menu-tab" >
       <Button className="btn btn-warning" style={{backgroundColor:"#dcdde1"}}
       onClick={()=>console.log(str.slice(0))}> Breakfast</Button>
       <Button className="btn btn-warning" style={{backgroundColor:"#dcdde1"}}
       onClick={()=>filterItem("lunch")}> Lunch</Button>
       <Button className="btn btn-warning" style={{backgroundColor:"#dcdde1"}}
       onClick={()=>filterItem("evening")}> Evening</Button>
       <Button className="btn btn-warning" style={{backgroundColor:"#dcdde1"}}
       onClick={()=>filterItem("dinner")}> Dinner</Button>
       <Button className="btn btn-warning" style={{backgroundColor:"#dcdde1"}}
       onClick={()=>setdata(gadata)}> All</Button>
       </div>
        
        <div className="menu-items container-fluid mt-5 d-flex justify-content-between my-5" 
        style={{flexWrap:"wrap",paddingRight:"150px"}}>
        {
            data.map((eleE)=>{
               // const {id,Image,name,category,price}=eleE;
                console.log(eleE);
                return(
                    <>
                    
                    <div className="cardcontainer" style={{flex:"33%"}}>
          <div className="cardyas">
          <div className="cardbox">
           <img src={logo} alt="..." />
          </div>
          <div className="cardcontent">
           <h1>{eleE.name}</h1>
           <p>Spicy food at very low price</p>
           <h1>{eleE.price}</h1>
           <Button className="btn btn-warning" style={{backgroundColor:"#dcdde1"}}
       > Order Now</Button>
          </div>
          
          </div>
      </div>
      
          
                    </>

                )
            })
        }
        </div>
          
         
        <Footer />
        </>
    )
}

export default GalleryPhoto;
