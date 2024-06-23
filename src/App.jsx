import React, { useState, useRef } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

const mock = [
  {
    id: 0,
    isDone: false,
    content: "React study",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Git study",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "JS study 준비",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mock);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List onDelete={onDelete} onUpdate={onUpdate} todos={todos} />
    </div>
  );
}

export default App;
