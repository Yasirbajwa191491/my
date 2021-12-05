import React,{useEffect,useState} from 'react';
import InsertApi from './UpdateApi';
import UpdateApi from './UpdateApi';
import ViewApi from './ViewApi';


const App= (props) => {
   const [data,setData]=useState([]);

    const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
// const fetchingdata=(event,sid)=>{
// const data={userData};
//   console.log(data);
//   // fetch(`http://localhost:3000/student/${sid}`,{
//   //   method:"PUT",
//   //   headers:{
//   //     'Content-Type':"application/json"
//   //   },
//   //   body:JSON.stringify(data)
//   // }).then((res)=>res.json().then((result)=>console.log(result)))
// }
  const onSelect=(id,firstName,lastName,phone,email,address,message)=>{
   //console.log(id,firstName,lastName,phone,email,address,message);
   setUserData({
     firstName:firstName ,
     lastName: lastName,
     phone: phone,
     email: email,
     address: address,
     message: message,
   })
   fetch(`http://localhost:3000/student/${id}`,{
    method:"PUT",
    headers:{
      'Content-Type':"application/json"
    },
    body:JSON.stringify({firstName,lastName,phone,email,address,message})
  }).then((res)=>res.json().then((result)=>console.log(result)))
   }
  const submitData = async (event,id) => {
   event.preventDefault();
  onSelect();
 // fetch("http://localhost:3000/student")
}
   const getData=async ()=>{
    const res=  fetch("http://localhost:3000/student")  ;
    setData(await (await res).json());
   }
   useEffect(() => {
     getData(); 
      
   },[])
   //console.log(data);
    const updatefun=(sid)=>{
    //console.log(sid);
    }

    
   return (
      <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Sales Team.
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt eaque alias similique.
                  </p>
                  <figure>
                    <img
                      src="./images/hero1.jpg"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          value={userData.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          value={userData.message}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para">
                        I agree that the thapatechnicalpay may contact me at the
                        email address or phone number above
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={submitData}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






{
   data.map((item)=>{
     // console.log(item.id);
      return (
         <>
         <ViewApi id={item.id}  
            firstName={item.firstName}
            lastName={item.lastName}
            phone={item.phone}
            email={item.email}
            address={item.address}
            message={item.message}
            update={onSelect}
         />
         
         </>
      )
   })
}


     {/* <UpdateApi /> */}
     
      <InsertApi />
     
        </>
   )
}

export default App;
