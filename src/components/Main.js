import {useReducer} from "react"
import CreateTask from "./CreateTask"
import Form from './Form';
import Header from './Header';

const Main = ({taskList, setList, id, setId}) => {

  const toggleDone = (id)=>{
    const newList = taskList.map(task=> task.id === id ? {...task, done:!task.done} : task)    
    setList(newList) 
  }

  const reducer = (state, action)=> {
    switch (action.type) {
      case "addTask" : {
        const newId = id+1
        setId(newId)
        const newState = [...state, {id:newId, text:action.input, date:action.date ,done:false} ]      
        localStorage.setItem("task", JSON.stringify(newState))
        return newState
      }
      case "delTask": {
        return null
      } 
      case "doneTask": {
        return null
      } 
      default:   
    }
    throw new Error("Unknown action")
  }

  const [tasks, dispatch] = useReducer(reducer, []);
  const addTask = (input, date)=> dispatch({type:"addTask", id:id, input:input, date:date})
  const delTask = ()=> dispatch({type:"delTask"})
  const doneTask = ()=> dispatch({type:"doneTask"})
  console.log(tasks);
  
  const finish = tasks.filter((obj)=> obj.done) 
  const undone = tasks.filter((obj)=> !obj.done)
    
  return (
    <div>
      <Header />
      <Form taskList={taskList} setList={setList} id={id} setId={setId} addTask={addTask}/>
      <div className="task-container"> 
        {finish.map(task=> <CreateTask task={task} toggleDone={toggleDone} taskList={taskList} setList={setList} />)}
        {undone.map(task=> <CreateTask task={task} toggleDone={toggleDone} taskList={taskList} setList={setList}/>)}
      </div>
    </div>
  );
};

export default Main;