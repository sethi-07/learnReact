import React from 'react'

// function clickbtn(){
//   console.log("got clicked")
// }

// function changetrack(e){
//   // log the current input value
//   console.log(e.target.value)
// }

// const App = () => {
//   return (
//     <div>
//       <input onChange={changetrack} type='text' placeholder='Enter name' />
//     </div>
//   )
// }

// function changetrack(e){
//   // log the current input value
//   console.log(e.target.value)
// }


function movemouse(elem){
  console.log(elem.target);
}
const App = () => {
  return (
    <div>
      <div onMouseMove={movemouse} className='h-100 w-100 bg-emerald-500'></div>
    </div>
  )
}

export default App
