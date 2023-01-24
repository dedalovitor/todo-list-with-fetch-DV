import React, { useEffect, useState } from "react";

//add into array --> concat
//delete from an array --> filter
//update --> map

//create your first component
const Home = () => {
	const [todos, setTodos] = useState([]);

useEffect(()=>{
	getTodos();
}, []);

	const getTodos = async () => {
		const response = await fetch("http://assets.breatheco.de/apis/fake/todos/user/dedalovitor");
		const data = await response.json();
		console.log(data);
	};

	return (
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li><input
					type="text"
					onChange={(e)=> setInputValue(e.target.value)}
					value= {inputValue}
					onKeyUp={(e) => {
						if (e.key== "Enter" && e.target.value.trim() != ""){
							setTodos(todos.concat([e.target.value]));
							setInputValue("");
						} 
						
					}}
					placeholder="What do you need to do?">

				</input>
				</li>
				
				{todos.map((item, index) =>
				<li>{item}{" "}
				<i 
				class="fa-solid fa-trash-can" 
				onClick={() => 
				setTodos(
					todos.filter(
						(t, currentIndex) =>
						 index != currentIndex
						 )
						 )
						 }></i>
						 </li>
						 )}
				
				</ul>

			<div>{todos.length > 0 ? `${todos.length} todos` : 'No todos' }</div>
		</div>
	);
};

export default Home;
