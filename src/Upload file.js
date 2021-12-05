import React,{useState} from 'react';

const App = () => {
    const [val, setVal] = useState();
    const fun=(event)=>{
        console.log(setVal(event.target.files));
    }
    const subm=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('File',val);
        fetch("http://localhostjs/gcufwebsite/ReadApii.php",
        
        {
            method:"POST",
            body:formData,
        }).then((res)=>{
            const response= res.json();
            console.log(res);
        })

    }
    return (
        <div>
          <input type="file" onChange={fun} name="file" />
          <button onClick={subm}>submit</button>
        </div>
    )
}

export default App;
