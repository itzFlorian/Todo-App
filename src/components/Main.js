import CreateTask from "./CreateTask"
import Form from './Form';
import Header from './Header';
const URL = "http://localhost:4000/"

const Main = ({taskList, setList, id, setId}) => {

  const toggleDone = (id, done)=>{
    fetch("http://localhost:4000/", {
  method: 'PATCH',
  body: JSON.stringify({id, done:!done}),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then(() => {
    const newList = taskList.map(task=> task._id === id ? {...task, done:!task.done} : task)    
    setList(newList)     
  });  
  }
  
  const finish = taskList.filter((obj)=> obj.done) 
  const undone = taskList.filter((obj)=> !obj.done)
    
  return (
    <div>
      <Header />
      <Form taskList={taskList} setList={setList} id={id} setId={setId}/>
      <div className="task-container"> 
        {finish.map(task=> <CreateTask key={task.id} task={task} toggleDone={toggleDone} taskList={taskList} setList={setList} />)}
        {undone.map(task=> <CreateTask key={task.id} task={task} toggleDone={toggleDone} taskList={taskList} setList={setList}/>)}
      </div>
    </div>
  );
};

export default Main;