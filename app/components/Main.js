import React from "react";
// Import sub-components
import Search from "./Search";

class Main extends React.Component {
  
  render() {
    return (
    	<div className="container">
    		<nav className="navbar navbar-inverse">
	  			<div className="container-fluid">
	    			<div className="navbar-header">
				      <a className="navbar-brand" href="#">Quotes App</a>
				    </div>
				    <ul className="nav navbar-nav">
				      <li><a href="#">Home</a></li>
				      <li><a href="#">Favorites</a></li>
				    </ul>
	   			</div>
	    	</nav>

		    <div className="container">
		    	<div className="col col-md-4 col-md-offset-4">
		    		<p style="font-size: 21px;"><strong>Add a quote below</strong></p>
					<form>
		    			<input type="text" name="quote" size="45" placeholder="Type quote here"/>
		    		</form>
		    		<button className="btn btn-primary btn-md" style="margin-top:20px;float:right;">Submit</button>
		    	</div>
	    	</div>
	    	</div>
	);
  }
}
export default Main;
