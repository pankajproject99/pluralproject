<h1>pluralReactFundamentals</h1>
pluralReactFundamentals
	REACT perform 2 task rendering and Event
	
	1. npm install -g create-react-app
	
	2. create-react-app react-fundamentals
	
	3. cd react-fundamentals
		npm start
		
	4. Simple model object
	
	5. Event: model object to check number of click count
		Wrap it as Function and call the render itself
		Wored when clicked on statment
			Wrap with render so when model changes it will render again
			
	6. Application with Games with choosing the answer answer for a Image
	
	7. Component: Function return JSX and has combination of HTML aand JSX
			Since Function has to return JSX it has to be compiled, so JSX is converted to JS
				eg. function Hello(props) {
						return <h1>Hello at {props.now}</h1>;
					)
					Here model:data:props is input to function
	
	8. Sample Code Explanation
			import ReactDom from 'react-dom'; 							--> To get access to render function
			import React from 'react';									--> To get react model
			
			
			function Hello(props){
				return <h1>Hello at {props.now}</h1>;
			}
			
			ReactDOM.render(<Hello now={new Date.toISOString()} />,		--> Imp: We can use render fuction from ReacDOM Model, to render React Component into a DOM element
																		--> First part says we want to render Hello Component, now is value which we supply to Hello Component
																				And its String representation of Time
				document.getElementById('root')							--> Second Argument is DOM element, React Component will be inserted into this DOM element.
			);
	9. Project name as Author Quiz 
			New App --> using create app
			BootStrap --> will be used for Styling
			Components --> To maintain root
			
			https://codepen.io/bradleyboy/pen/OPBpGw --> Can be used for running ReactJs directly
	10. BootStrap
			https://getbootstrap.com/
				jsDelivr
					<!-- CSS only -->
					<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
					Go to Link: https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css and copy the file(bootstrap.min.css) in source directly
					Now we have it at local storage
					Now we need to include it to our project and build processes so styles are applied 
				
					Check in Chrome Developer Tools --> Click on Element with Arrow --> Styles(will show bootstrap.min.css
	11. Setup AuthorQuiz
			Rename App.js to AuthorQuiz.js or Add
			Make index.js to point AuthorQuiz.js instead of App
			
	
			
			
			
			