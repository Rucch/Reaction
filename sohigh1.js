var HelloUser = React.createClass({
  getInitialState: function(){
    return {
      username: '@comentarismo'
    }
  },
  handleChange: function(e){
    this.setState({
      username: e.target.value
    });
  },
  render: function(){
    return (
      <div>
        Hello {this.state.username} <br />
        Change Name: <input type="text" value={this.state.username} onChange={this.handleChange} /><br />
	<a href="sohigh.html">voltar</a> 
      </div>
    )
  }
});

ReactDOM.render(
  <HelloUser />,
  document.getElementById('root')
);
