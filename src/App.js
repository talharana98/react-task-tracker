import { useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Task from './components/Task'
import AddTask from './components/AddTask'

const App =() => {

  const [showAddTask, setShowAddTask] = useState (false)

  const [tasks, setTasks ] = useState([
        
    {
        id: 1,
        text: 'Docs apt',
        day: 'Feb 5th at 230pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'School Meeting',
        day: 'Feb 6th at 130pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Shopping',
        day: 'Feb 5th at 230pm',
        reminder: false,
    }

])


//Task add fxn

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) +1
  const newTask = {id,...task}
  setTasks([...tasks, newTask])
}

//delete Task fxn

const deleteTask = (id) => {
 setTasks(tasks.filter ((task) => task.id !==id))
}
 

//Toggle reminder fxn

const toggleReminder =(id) =>{
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder:
     !task.reminder } : task)
     )
}
  return (
    <div className='container'>
    <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask} />
    {showAddTask && <AddTask onAdd={addTask} />}
   {tasks.length>0 ? <Tasks tasks = {tasks}
     onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks Available'}
    </div>
  )
}



export default App;
