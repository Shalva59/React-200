import React from 'react'

const Input = ({inputData}) => {
  console.log(inputData)
  return (
    <>
     <p>Input go here</p>  
     <h1>Test</h1>

     
    { inputData.map((input)=>(

     <div key={input.id}
     style={
      input.id % 2===0 
      ?{backgroundColor:"lightgray"} 
      :{backgroundColor:"lightblue"} 
    }     
     >
        <label htmlFor={input.label}>{input.label}</label>
        {
           input.type ==="textarea"?(
            <textarea  
            id={input.label}
            placeholder={input.placeholder}
            defaultValue={input.defaultValue}
            required={input.required}
          />
          ):(
          
            <input 
            type={input.type}
            id={input.label}
            placeholder={input.placeholder}
            defaultValue={input.defaultValue}
            required={input.required}
            />
          
          )
          
        }

     </div>
      
      ))};
     
    </>
    
  );
};

export default Input;
