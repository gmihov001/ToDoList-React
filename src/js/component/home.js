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
		const updatedTasks = this.state.tasks.filter(
			task => task != this.state.tasks[id]
		);
		this.setState({ tasks: updatedTasks });
	};

	render() {
		return (
			<div className="to-do-sheet text-center mt-5">
				<h1>My To Do List:</h1>
				<input
					autoFocus={true}
					placeholder="What needs to be done?"
					value={this.state.inputTask}
					onChange={e => this.setState({ inputTask: e.target.value })}
					onKeyUp={this.saveTask}
				/>
				<ul>
					{this.state.tasks.map((task, i) => {
						return (
							<li key={i}>
								{task}{" "}
								<span
									type="button"
									onClick={() => this.deleteTask(i)}>
									{" "}
									x{" "}
								</span>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
