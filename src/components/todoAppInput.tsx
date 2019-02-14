import React, { useState } from 'react';

type Props = {
	addTodo: (text: string) => void
};


export const TodoAppInput = (props: Props) => {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
		const { addTodo } = props;
		event.preventDefault();

		addTodo(inputValue);
		setInputValue("");
	};

	const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
		event.preventDefault();

		setInputValue(event.currentTarget.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				value={inputValue}
				onChange={handleChange}
			/>
		</form>
	);
}
