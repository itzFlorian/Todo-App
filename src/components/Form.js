import {useState} from "react"
import "../styles/form.css"

const Form = ({taskList, setList, id, setId, addTask})=>{
  const [date, setDate] = useState("")
  const [inputValue, setInputValue] = useState("") 

  const formSubmitHandler = (event)=>{
    event.preventDefault()
    const newId = id + 1
    setId(newId)
    const newList = [...taskList, {id:id, text:inputValue, done:false, date:date}]
    setList(newList)
    setInputValue("")
    setDate("") 
  }

  return (
  <>
    <form 
    className="form"
    onSubmit={(event)=>{addTask(inputValue, date)}} >      
        <input type="text" id="todo" placeholder="Fill in your task" value={inputValue}
        onChange={(event)=>{setInputValue(event.target.value)}} />
        <input type="date" name="date" id="date" value={date} 
        onChange={(event)=>{setDate(event.target.value)}} />
        <button class="submit">Add Task</button>
      </form>
    </>
    
  )
}

export default Form