
var HelloUser = React.createClass({
  render: function(){
    return (
	<div> Evolution {this.props.name}</div>
    )
  }
});

ReactDOM.render(<HelloUser name="and Progress"/>, document.getElementById('root'));
