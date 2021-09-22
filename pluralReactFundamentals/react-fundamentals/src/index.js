import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz.js';
import reportWebVitals from './reportWebVitals';
import _ from 'lodash';


function ClickyButtons ({numberofButtons,onSelection}) {
	const makeButton = v => <button key={v} id={v} onClick={event =>
		onSelection(event.target.id)}>{v}</button>;
	return <div>
		{_.range(1,numberofButtons +1).map(makeButton)}
	</div>;
}

/*
 * Render the above component into the div#app
 */
ReactDOM.render(<ClickyButtons numberofButtons={10} onSelection={console.log}/>, document.getElementById('app'));


// ReactDOM.render(<AuthorQuiz />
//   , document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
