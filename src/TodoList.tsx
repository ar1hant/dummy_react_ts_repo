import React from 'react'

export interface TodoListProps {
  title: string,
  desc: string,
  done: boolean,
}

const TodoList = ({ title, desc, done }: TodoListProps) => {
  return (
    <span className="list_info" style={{ padding: "10px" }}>
      <h2 style={{marginBottom: "10px"}}>{title}</h2>
      <p>{desc}</p>
    </span>
  )
}

export default TodoList;
