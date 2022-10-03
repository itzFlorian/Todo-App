import CreateTask from "./CreateTask"
import Form from './Form';
import Header from './Header';

const Main = ({taskList, setList, id, setId}) => {
  const toggleDone = (id)=>{
    const newList = taskList.map(task=> task.id === id ? {...task, done:!task.done} : task)    
    setList(newList) 
  }
  
  const finish = taskList.filter((obj)=> obj.done) 
  const undone = taskList.filter((obj)=> !obj.done)
    
  return (
    <div>
      <Header />
      <Form taskList={taskList} setList={setList} id={id} setId={setId}/>
      <div className="task-container"> 
        {finish.map(task=> <CreateTask task={task} toggleDone={toggleDone} taskList={taskList} setList={setList} />)}
        {undone.map(task=> <CreateTask task={task} toggleDone={toggleDone} taskList={taskList} setList={setList}/>)}
      </div>
    </div>
  );
};

export default Main;