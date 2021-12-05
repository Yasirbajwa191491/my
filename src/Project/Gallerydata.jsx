import React,{useState} from 'react';
import img1 from "./images/breakfast.jpg";

const gadata=[
    {
   id: 1,
   Image:{img1},
   name:"breakfast",
   category:"breakfast",
   price:"12$",
    },   
    {
        id: 2,
        Image:"/images/lunch1.jpg",
        name:"lunch",
        category:"lunch",
        price:"22$",
         },
         {
            id: 3,
            Image:"/images/dinner1.jpg",
            name:"dinner",
            category:"dinner",
            price:"26$",
             },
             {
                id: 4,
                Image:"/images/breakfast.jpg",
                name:"evening",
                category:"evening",
                price:"18$",
                 },
                 {
                    id: 5,
                    Image:"/images/lunch1.jpg",
                    name:"breakfast",
                    category:"breakfast",
                    price:"92$",
                     }  ,
                     {
                        id: 6,
                        Image:"/images/breakfast.jpg",
                        name:"breakfast",
                        category:"breakfast",
                        price:"12$",
                         },   
                         {
                             id: 7,
                             Image:"/images/lunch1.jpg",
                             name:"lunch",
                             category:"lunch",
                             price:"22$",
                              },
                              {
                                 id: 8,
                                 Image:"/images/dinner1.jpg",
                                 name:"dinner",
                                 category:"dinner",
                                 price:"26$",
                                  },
                                  {
                                     id: 9,
                                     Image:"/images/breakfast.jpg",
                                     name:"evening",
                                     category:"evening",
                                     price:"18$",
                                      },
                                      {
                                         id: 10,
                                         Image:"/images/lunch1.jpg",
                                         name:"breakfast",
                                         category:"breakfast",
                                         price:"92$",
                                          }  ,
                        
                            
]

const Gallerydata = () => {
    const [state, setstate] = useState([])

    return (
        <div>
        <table border="1">
        {state.map((item)=>{
            <tr>
         <td>{item.id}</td>
         <td>{item.Image}</td>
         <td>{item.name}</td>
         <td>{item.category}</td>
         <td>{item.price}</td>
      </tr>
        })}
        </table>
        </div>
    )
}

export default Gallerydata;
export {gadata};
