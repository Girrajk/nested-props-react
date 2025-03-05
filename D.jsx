// import React from 'react'

// function D(props) {
//   return (
//     <div>
//         <h5>Developer</h5>
//         <p>{props.msg}</p>
//     </div>
//   )
// }

// export default D


import React, { useContext } from 'react'
import { msgContext } from './M'

function D() {
  return (
    <div>
        <h5>Developer</h5>
        <p>{useContext(msgContext)}</p>
    </div>
  )
}

export default D