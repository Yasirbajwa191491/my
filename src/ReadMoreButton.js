import React from 'react'

const ReadMoreButton = () => {
    const fun=()=>{
        const strr=` I have come to know through your advertisement in Express news on September 30,
        2019 that some posts of lecturer in computer science are lying vacant under your control. 
        I would like to apply as one of the candidates for the said posts. Find my documents enclosed.
        I have come to know through your advertisement in Express news on September 30,
        2019 that some posts of lecturer in computer science are lying vacant under your control. 
        I would like to apply as one of the candidates for the said posts. Find my documents enclosed.`;
        document.getElementById("para").innerHTML=strr;
         }
    return (
        <div>
             <div style={{border:"1px solid black"}}>
        <p> I have come to know through your advertisement in Express news on September 30,
        2019 that some posts of lecturer in computer science are lying vacant under your control. 
        I would like to apply as one of the candidates for the said posts. Find my documents enclosed.</p>
       <button onClick={fun}>Read more</button>
       <p id="para"></p>
       </div>
        </div>
    )
}

export default ReadMoreButton;
