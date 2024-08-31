import React from 'react'
import "../components/Counter.css";
export const Message = ({count}) => {
  return (
    <div className='count'>
     
     <div>
     { count === 10 && 
      <h2>Max Count Reached</h2>
      }
      <div>
      { count === 0 && 
      <h2>Min Count Reached</h2>
      }
     
      </div>
     </div>
     </div>
  )
}
