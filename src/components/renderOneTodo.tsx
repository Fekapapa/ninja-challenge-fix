import React from 'react';

interface todoElement {
  text: string;
  isCompleted: boolean;
}

interface TodoParameters {
	todo: todoElement;
	index: number;
	completeTodo: (index: number) => void;
	removeTodo: (index: number) => void;
}

type Props = TodoParameters;

export const RenderOneTodo = (props: Props) => {
	const {index, todo, completeTodo, removeTodo} = props;
	
	return (
		<div
			className="todo"
			style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
		>
			{todo.text}
			<div>
				<button onClick={() => completeTodo(index)}>Complete</button>
				<button onClick={() => removeTodo(index)}>x</button>
			</div>
		</div>
	);
}