import React from "react";

export class Home extends React.Component {
	//input field with enter key submission
	//array to hold tasks
	//map the array - for each element, display it in an <li>
	//add delete functionality - with event listener onclick
	//delete icon - to show on hover
	//when no tasks: display "No tasks, add a task"

	constructor() {
		super();
		this.state = {
			tasks: ["First task", "Second task"],
			inputTask: ""
		};
	}

	saveTask = e => {
		if (e.keyCode == 13) {
			let newTasks = this.state.tasks.concat(e.target.value);
			this.setState({
				tasks: newTasks,
				inputTask: ""
			});
		}
	};

	deleteTask = id => {
		console.log(id);
	};

	render() {
		var { tasks, inputTask } = this.state;
		const { setState, saveTask, deleteTask } = this;
		return (
			<div className="text-center mt-5">
				<h1>TO DO:</h1>
				<input
					type="text"
					value={inputTask}
					placeholder="What needs to be done?"
					onChange={e => setState({ inputTask: e.target.value })}
					onKeyUp={saveTask}
				/>
				<ul>
					{tasks.map((task, i) => {
						return (
							<li key={i}>
								{task}{" "}
								<span
									onClick={() => deleteTask(i)}
									style={{ border: "1px solid red" }}>
									{" "}
									X{" "}
								</span>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
