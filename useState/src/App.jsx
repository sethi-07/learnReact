// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0);

//   function inc(){
//     setNum(num+1);
//   }

//   function dec(){
//     setNum(num-1);
//   }

//   return (
//     <div className='parent'>
//      <h1>{num}</h1> 
//      <button onClick={inc}>Increase</button>
//      <button onClick={dec}>Decrease</button>
//     </div>
//   )
// }

// export default App



import React from 'react'
import { useState } from 'react';


const App = () => {
const [name, setName] = useState('Sethi');

const sbmtName = (e)=>{
  e.preventDefault();
  console.log("sdfgh")
}

  return (
    <div>
      <form onSubmit={sbmtName}>
        <input className='p-10' type = "text" placeholder = "Enter name"></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App




