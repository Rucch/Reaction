var FriendsContainer = React.createClass({
	getInitialState: function(){
		return {
			name: '@comentarismo',
			friends: ['Thomas','Ivens','Vitor','Cata']
		}
	},
render: function(){
      return (
        <div>
          <h3> Name: {this.state.name} </h3>
          <ShowList names={this.state.friends} />
        </div>
      )
    }
});

var ShowList = React.createClass({
	render: function(){
		var listItems = this.props.names.map(function(friend){
			return <li> {friend} </li>;
		});
		return (
			<div>
				<h3> Friends </h3>
				<ul>
					{listItems}
				</ul><br />
	  			<a href="sohigh.html">voltar</a> 
        		</div>
		)
	}
});

ReactDOM.render(<FriendsContainer />, document.getElementById('root'));
