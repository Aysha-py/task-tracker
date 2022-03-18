import React from 'react'

const Button = ({color,text ,onAdd,showAdd}) => {

  return ( 
    <div>
        <button onClick ={onAdd} showAdd={showAdd} style={{backgroundColor:color}} className='btn'>{text}</button>
    </div>
  )
}

export default Button 