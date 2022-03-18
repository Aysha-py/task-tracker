import React from 'react'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  return (
    <div >
        <header className='header'> 
            <h1>{title}</h1>
            <Button onAdd={onAdd} color='green' text={showAdd ? "Close": "Add"}/> 
         
        </header>
        
    </div>
  ) 
}

export default Header