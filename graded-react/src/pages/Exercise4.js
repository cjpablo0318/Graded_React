import React from 'react'



const Exercise4 = () => {

  const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <div>
     <h1> Oh McDonald had a Farm!</h1>
      {animals.map(item =>
        <ul>
          <li>{item}</li>
        </ul>  
      )}
    </div>
  )
}

export default Exercise4