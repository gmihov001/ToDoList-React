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
			tasks: ["First task", "Second task"]
		};
	}

	saveTask = e => {
		console.log(e);
	};

	render() {
		var { tasks } = this.state;
		return (
			<div className="text-center mt-5">
				<h1>TO DO:</h1>
				<input
					type="text"
					placeholder="What needs to be done?"
					onKeyUp={this.saveTask}
				/>
				<ul>
					{tasks.map(task => {
						return (
							<li>
								{task} <span> X </span>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
