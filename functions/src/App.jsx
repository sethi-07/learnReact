import React from 'react'

function clickbtn(){
  console.log("got clicked")
}

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

function changetrack(e){
  // log the current input value
  console.log(e.target.value)
}

const App = () => {
  return (
    <div>
      <input onChange= {changetrack} type='text' placeholder='Enter name' />
    </div>
  )
}

export default App
