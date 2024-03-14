import React from 'react'

const Card = ({client}) => {
  return (
    <div className='z-10 drop-shadow-md overflow-hidden my-4'>
        <img src={client.linkImg} 
                className="h-80 w-64 object-cover"
        
        />  
    </div>
  )
}

export default Card