function Button({num}){
    return (
   <>
    

    <button onClick={() => alert("You clicked button "+ num)}>Button {num}</button>
   </>
        
    );
  }
  
  export default Button;