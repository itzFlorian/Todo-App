import "../styles/create-task.css"

const CreateTask = ({task, doneTask, delTask }) =>{
return(      
    <div className={`${task.done ? "finished-task" : null} to-do`}>
      <p className="task-name" onClick={()=>{doneTask(task)}} key={task.id}>{task.text.toUpperCase()}</p>
      <p className="task-name">{task.date.split("-").reverse().join(".")}</p>      
      <button className="close" onClick={()=>{delTask(task)}}>x</button>
    </div>      
  )
}
export default CreateTask