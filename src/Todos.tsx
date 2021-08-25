import { useState, useContext } from 'react';
import TodoList from './TodoList';
import { TodoListProps } from './TodoList';
import {ThemeContextType} from './ThemeContext';
import ThemeContext from './ThemeContext';

export default function Todos() {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [todos, setTodos] = useState<TodoListProps[]>([]);
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
  const removeItem = (index : number) => {
    setTodos(todos.filter((item, i) => i !== index));
  };
  return (
    <div className={theme ? "todos dark" : "todos"}>
      <div className="input_box">
        <input type="text" placeholder="title" value={title} onChange={(e) => {
          setTitle(e.target.value)
        }} required />
        <input type="text" placeholder="description" value={description} onChange={(e) => {
          setDesc(e.target.value)
        }} required />
        <button onClick={() => {
          setTodos([
            ...todos,
            { title: title, desc: description, done: false },
          ])
          setTitle("")
          setDesc("")
          console.log(description)
        }}>Add</button>
      </div>
      {
        todos.map((todo, index) => (
          <div className="todo-list">
            <TodoList key={index} title={todo.title} desc={todo.desc} done={todo.done} />
            <button onClick={() => {
              removeItem(index)
            }}>Delete</button>
          </div>
        ))
      }
      <button onClick={() => {
        setTodos([])
      }}>Delete All</button>
    </div>
  )
}