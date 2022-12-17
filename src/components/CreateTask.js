import "../styles/create-task.css"

const CreateTask = ({task, toggleDone, taskList, setList}) =>{
return(      
    <div className={`${task.done ? "finished-task" : null} to-do`}>
      <p className="task-name" onClick={()=>{toggleDone(task._id, task.done)}} key={task._id}>{task.text.toUpperCase()}</p>
      <p className="task">{task.date && task.date.slice(0,10).split("-").reverse().join(".")}</p>      
      <button className="close" onClick={()=>{
        fetch("http://localhost:4000/", {
          method: 'DELETE',
          body: JSON.stringify({id:task._id}),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then(() => {
            const newList = taskList.filter((currTask)=>currTask !== task)
            setList(newList)
          });
      }}>x</button>
    </div>      
  )
}

export default CreateTask