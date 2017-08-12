var Hi = React.createClass({
	constructor(props) {
		super(props);
		this.state = {
			color: "hotpink"
		};

	}

      	render: function(){
		console.log(this.state);
	  const styleObj = {
	  	backgroundColor: "red",
		fontSize: 64/2
	  };
    return (
	<section style={styleObj} id="hi">
		<h2 className="blue">{this.props.name}</h2>
	</section>    
    )
  }
});

ReactDOM.render(<Hi name="Rucch"/>, document.getElementById('root'));
