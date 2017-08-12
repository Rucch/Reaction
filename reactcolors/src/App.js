import React, { Component } from 'react';
import './App.css';

//componentDidMount
const colorArray = [
	"red",
	"blue",
	"green",
	"orange",
	"purple",
	"cyan",
	"brown",
	"yellow",
	"lightblue"
];

//class
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			color: "hotpink"
		};

	}
	//method
	toggleColor() {
		console.log(this);
		if(this.state.color === "hotpink") {
			this.setState({
				color: "yellow"	
			});
		} else {
			this.setState({
				color: "hotpink"	
			});

		}
	}

	changeColor(event) {
		this.setState({
			color: event.target.value
		});
	}
  
	componentDidMount() {
		let colorPos = 0;
		setInterval(() => {
			if(colorArray.length -1 > colorPos) {
				this.setState({
					color: colorArray[colorPos]
				});
				colorPos ++;
			} else {
				this.setState({
					color: colorArray[colorPos]
				});
				colorPos = 0;
			}
		}, 700);
	}

	render() {
		const styleObj = {
	  		backgroundColor: this.state.color
	  	};

    		return (
			<section style={styleObj} id="pow">
				<h2 onClick={this.toggleColor.bind(this)}>{this.state.color}</h2>
				<input value={this.state.color} onChange={this.changeColor.bind(this)}/>
			</section>    
    		);
	}
}

export default App;

