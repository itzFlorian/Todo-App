import "../styles/create-task.css"

const CreateTask = ({task, toggleDone, taskList, setList}) =>{
return(      
    <div className={`${task.done ? "finished-task" : null} to-do`}>
      <p className="task-name" onClick={()=>{toggleDone(task.id)}} key={task.id}>{task.text.toUpperCase()}</p>
      <p className="task">{task.date.split("-").reverse().join(".")}</p>      
      <button className="close" onClick={()=>{
        const newList = taskList.filter((currTask)=>currTask !== task)
        setList(newList)
      }}>x</button>
    </div>      
  )
}
export default CreateTask