import React from 'react'
import "./Dataa.css";
const Dataa = (props) => {
    return (
        <>
            <div className="items-info">
        <div className="product-img">
          <img src={props.img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" ></i>
          <input type="text" placeholder={props.quantity} disabled />
          <i className="fas fa-plus add" ></i>
        </div>

        <div >
          <h3>{props.price}₹</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            ></i>
        </div>
      </div>

      <hr /> 
        </>
    )
}

export default Dataa
