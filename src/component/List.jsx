import React from 'react'
import { FaTimes } from "react-icons/fa";

const  List = ({task,onDelete,onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick= {()=>onToggle(task.id)} > 
        <h3> {task.Text}  <FaTimes  style={{color:'red'}} 
              onClick={()=>onDelete(task.id)}/>
       </h3>
       <p>{task.date}</p>

    </div>
  ) 
}

export default List  