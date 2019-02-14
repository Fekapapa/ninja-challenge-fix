import React, { useState } from 'react';

import { TodoAppInput } from './todoAppInput';
import { RenderOneTodo } from './renderOneTodo';

interface todoElement {
  text: string;
  isCompleted: boolean;
}

export const TodoApp = () => {
  const initialTodoList = [
    { text: "Learn about React",
      isCompleted: false },
    { text: "Order pizza for Pizza-péntek",
      isCompleted: false },
    { text: "Build really cool todo app with Hooks",
      isCompleted: false }
  ];

  const [todos, setTodos] = useState(initialTodoList);

  
  const addTodo = (text: string) => {
    const newTodo = { text: text, isCompleted: false };
    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
  };

  const completeTodo = (index: number) => {
    const originalTodos = [...todos];

    originalTodos[index].isCompleted = true;

    setTodos(originalTodos);
  };

  const removeTodo = (index: number) => {
    const originalTodos = [...todos];

    originalTodos.splice(index, 1);
    setTodos(originalTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <RenderOneTodo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoAppInput addTodo={addTodo}/>
      </div>
    </div>
  );
}
