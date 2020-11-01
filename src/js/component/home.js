import React from "react";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			tasks: ["First task", "Second task"],
			inputTask: ""
		};
	}

	componentDidMount() {
		fetch(
			"https://3000-d40b0105-12e0-4a5f-bd75-3800aecbbb22.ws-us02.gitpod.io/todos/georgi"
		)
			.then(resp => resp.json())
			.then(response => this.setState({ tasks: response }))
			.catch(err => console.log("There was the following error: ", err));
	}

	saveTask = e => {
		if (e.keyCode == 13) {
			var newTodo = { label: this.state.inputTask, done: false };
			fetch(
				"https://3000-d40b0105-12e0-4a5f-bd75-3800aecbbb22.ws-us02.gitpod.io/todos/georgi",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(newTodo)
				}
			)
				.then(resp => resp.json())
				.then(response =>
					this.setState({ tasks: response, inputTask: "" })
				)
				.catch(err =>
					console.log("There was the following error: ", err)
				);
		}
	};

	deleteTask = id => {
		fetch(
			"https://3000-d40b0105-12e0-4a5f-bd75-3800aecbbb22.ws-us02.gitpod.io/todos/georgi/" +
				id,
			{
				method: "DELETE"
			}
		)
			.then(resp => resp.json())
			.then(response => this.setState({ tasks: response }))
			.catch(err => console.log("There was the following error: ", err));
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
								{task.label}{" "}
								<span
									type="button"
									onClick={() => this.deleteTask(task.id)}>
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
