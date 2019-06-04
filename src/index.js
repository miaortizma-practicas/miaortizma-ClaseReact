import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Color from "./Color";
import Clock from './Clock'
import Request from './Request'

class App extends Component{
	render(){
		return(
      <Fragment>
			 <Color />
       <Clock /> 
       <Request />
			</Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
