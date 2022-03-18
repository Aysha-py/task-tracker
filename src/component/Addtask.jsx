import React,{useState,useEffect} from 'react'

const Addtask = ({onAdd,tasks}) => {
    const [Text,setText] =useState('')
    const [date,setDate]=useState('')
    const [reminder, setReminder] = useState(false)


    const onSubmit=(e)=>{
        e.preventDefault()
      if(!Text){
          alert('Enter a task')
          return
        }
        
          onAdd({Text,date,reminder})
          setText('')
          setDate('')
          setReminder(false)
        
    }
useEffect(()=>{
    const json =JSON.stringify(tasks)
    localStorage.setItem("tasks",json)
},[tasks])
    

 return (
 
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="Task" className ='form-control label'>Task</label>
                <input type="text" value={Text} onChange={(e)=>setText(e.target.value)} placeholder='Add Task'/>
            </div> 
            <div className='form-control'>
                <label htmlFor="Day" className='form-control label'>Day & Time</label>
                <input type="text"  value ={date} onChange={(e)=> setDate(e.target.value)} placeholder='Add Day and time'/>
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor="reminder">Reminder</label>
                <input type="Checkbox" 
                checked={reminder}
                value ={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit"  value='Save Task' className='btn btn-block ' />
        </form> 


  )
}

export default Addtask 