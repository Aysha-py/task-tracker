import React from 'react'
import List from '../component/List'

const Task = ({tasks, onDelete,onToggle}) => {

  return (
    <>
          {tasks.map((task,id)=>(
            <List key={id} task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))}
    </>
  ) 
}

export default Task