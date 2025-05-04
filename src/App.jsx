import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState(["go to gym", "goto store"]);

  function persistData (newlist){
    localStorage.setItem('todos', JSON.stringify({ todos: newlist}))
  }

  const handleAddTodos = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList)
    setTodos(newTodoList);
  };

  function handleDelete(index) {
    const newTodoList = [...todos];
    newTodoList.splice(index, 1);
    persistData(newTodoList)
    setTodos(newTodoList);
  }
  function handleEdit(index) {
    const valueToEdit = todos[index];
    setTodoValue(valueToEdit);
    handleDelete(index);
  }

  useEffect(()=>{
    if(!localStorage){

    }
    let localTodos =  localStorage.getItem('todos')
    if(!localTodos){
      return;
    }

    localTodos =  JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])
  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        todos={todos}
      />
    </>
  );
}

export default App;
