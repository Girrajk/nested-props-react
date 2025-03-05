// import React from 'react'
// import AM from "./AM"

// function M() {
//     let message = "Complete Prooject By Monday"
//   return (
//     <div>
//     <h1>Manager</h1>
//     <AM msg = {message}/>
//     </div>
//   )
// }

// export default M



import React,{createContext} from 'react'
import AM from "./AM"

export const msgContext = createContext();

function M() {
    let message = "Complete Prooject By Monday"
  return (
    <msgContext.Provider value={message}>
    <h1>Manager</h1>
    <AM/>
    </msgContext.Provider>
  )
}

export default M


