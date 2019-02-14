import React, { useState } from 'react';

export const TodoAppInput = (addTodo: (text: string) => void) => {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
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
