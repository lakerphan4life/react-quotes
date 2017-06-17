import React from "react";
// Import sub-components

// Helper Function

class Main extends React.Component {
  
  render() {
    return (
    	<div class="container">
    		<nav class="navbar navbar-inverse">
	  			<div class="container-fluid">
	    			<div class="navbar-header">
				      <a class="navbar-brand" href="#">Quotes App</a>
				    </div>
				    <ul class="nav navbar-nav">
				      <li><a href="#">Home</a></li>
				      <li><a href="#">Favorites</a></li>
				    </ul>
	   			</div>
	    	</nav>

		    <div class="container">
		    	<div class="col col-md-4 col-md-offset-4">
		    		<p style="font-size: 21px;"><strong>Add a quote below</strong></p>
					<form>
		    			<input type="text" name="quote" size="45" placeholder="Type quote here"/>
		    		</form>
		    		<button class="btn btn-primary btn-md" style="margin-top:20px;float:right;">Submit</button>
		    	</div>
	    	</div>
	    	</div>
	);
  }
}
export default Main;
