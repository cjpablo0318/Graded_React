import  {useState} from "react";

function Exercise3() {
    const [count, setCount] = useState(0);

    return (
   <>
    <h1>Now you see Me</h1>
    <p>Button has been clicked: {count} times</p>
    <button onClick={()=>setCount(count+1)}>Click Me!</button>
   </>
        
    );
  }
  
  export default Exercise3;