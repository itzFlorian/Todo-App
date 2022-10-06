import {useState, useReducer, useEffect} from "react"
import CreateTask from "./CreateTask"
import Form from './Form';
import Header from './Header';

const Main = () => {
  const [id, setId] = useState(0)

  const reducer = (state, action)=> {
    switch (action.type) {
      case "addTask" : {
        const newId = id+1
        setId(newId)
        const newState = [...state, {id:newId, text:action.input, date:action.date ,done:false} ]
        return newState
      }
      case "delTask": {
        const newList = state.filter((currTask)=>currTask !== action.task)
        return newList
      } 
      case "doneTask": {
        const newList = state.map(taskItem=> taskItem === action.task ? {...action.task, done:!action.task.done} : taskItem)
        return newList
      } 
      case "localStorage":{
        return action.storageTask
      }
      default:   
    }
    throw new Error("Unknown action")
  }  
  const [tasks, dispatch] = useReducer(reducer, []);
  const addTask = (input, date)=> dispatch({type:"addTask", input:input, date:date})
  const delTask = (task)=> dispatch({type:"delTask", task:task})
  const doneTask = (task)=> dispatch({type:"doneTask", task:task})
  const storage = (storageTask) => dispatch({type:"localStorage", storageTask:storageTask})


  const finish = tasks.filter((obj)=> obj.done) 
  const undone = tasks.filter((obj)=> !obj.done)

  useEffect(()=>{
    const storageTask = JSON.parse(localStorage.getItem("task"))
    const storageId = JSON.parse(localStorage.getItem("id"))
    if( storageTask !== null && storageTask.length !== 0 ){
      storage(storageTask)
    }
    if( storageId ){
      setId(storageId)
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem("task", JSON.stringify(tasks))
    localStorage.setItem("id", JSON.stringify(id))
  }, [tasks, id])  
    
  return (
    <div>
      <Header />
      <Form id={id} setId={setId} addTask={addTask}/>
      <div className="task-container"> 
        {finish.map(task=> <CreateTask task={task} delTask={delTask} doneTask={doneTask} />)}
        {undone.map(task=> <CreateTask task={task} delTask={delTask} doneTask={doneTask} />)}
      </div>
    </div>
  );
};

export default Main;