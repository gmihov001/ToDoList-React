import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {

    //input field 
    //array to hold tasks
    //map the array - for each element, display in an <li>
    //add delete functionality
    
    constructor(){
        super();
        this.state = {

        };
    }

    render(){
	return (
		<div className="text-center mt-5">
            <h1>TO DO:</h1>
			
		</div>
    );
    }
}
