import React,{useState,useEffect} from 'react'
import Header from './component/Header'
import Task from './component/Task'
import Addtask from './component/Addtask'


export const App = () => {

  const [show, setShow] =useState(false)
  const [tasks,setTask] =useState([  
    {
        id:1,
        Text: 'Doctor Appointment',
        date: '12th of january 2022',
        reminder:true
    },
    {
        id:2,
        Text: 'Meeting at school',
        date: '12th of january 2022',
        reminder:true
    },

    {
        id:3,
        Text: 'Food Shopping',
        date: '12th of january 2022',
        reminder:true
    }
])
useEffect(()=>{
  const json =localStorage.getItem("tasks")
  const savedTask = JSON.parse(json)
  if (savedTask){
      setTask(savedTask)
  }

},[])


const deleteTask = (id) =>{
  setTask(
    tasks.filter((task)=> task.id !== id) 
  )

}
const toggleReminder =(id)=>{
  setTask(
    tasks.map((task)=> task.id === id ? {...task,reminder: !task.reminder}:task)
  )
}

const addTask =(tasko)=>{
  const id =Math.floor(Math.random() * 10000) + 1

  const newTask = { id, ...tasko }
  setTask([...tasks, newTask])
  console.log(newTask)
}
 
  return (
    <div className='container'>
      <Header   title="Task Tracker" onAdd={()=>setShow(!show)} showAdd={show}/>
     {show && <Addtask onAdd={addTask} tasks={tasks} />} 
      {tasks.length > 0 ? <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No Task Available"}
      
    </div>
  )
} 
export default App;

