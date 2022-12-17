import './styles/App.css';
import {useState, useEffect} from "react"
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import Main from './components/Main';
import Contact from './components/Contact';

function App() {
  const [taskList, setList] = useState([])
  const [id, setId] = useState(0)

  useEffect(()=>{
    const storageTask = JSON.parse(localStorage.getItem("tasks"))
    const storageId = JSON.parse(localStorage.getItem("id"))
    if( storageTask !== null && storageTask.length !== 0 ){
      setList(storageTask)
    }
    if( storageId ){
      setId(storageId)
    }
  },[])
  
  useEffect(()=>{
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((json) => {
        setList(json)
      })
  },[])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/Todo-App" element={<Main taskList={taskList} setList={setList} id={id} setId={setId} />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
