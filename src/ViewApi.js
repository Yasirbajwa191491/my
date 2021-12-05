import React from 'react';
import "./index.css";

const ViewApi = (props) => {

    const updatefun=()=>{
        props.update(props.id,props.firstName,props.lastName,props.phone,props.email,props.address,props.message);
    }
    return (
        <>
          <table className="apitable">
              <tr>
                  <td>{props.firstName}</td>
                  <td>{props.lastName}</td>
                  <td>{props.phone}</td>
                  <td>{props.email}</td>
                  <td>{props.address}</td>
                  <td>{props.message}</td>
                  <button onClick={updatefun}>update</button>
              </tr>
          </table> 
          
        </>
    )
}

export default ViewApi;
