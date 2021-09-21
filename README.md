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
			
	12. JSX can represent 2 types of elements
			--> 1. DOM Tags are represented in lower case, attribute passed to these elements are set on rendered DOM nodes, eg render div with id attribute with value mydiv as per JSX
					eg
						ReactDOM.render(<div id="mydiv"></div> />				
						, document.getElementById('root'));
			--> 2. User defined elements eg Sum must have staring with capital letter.
				
				function Sum(props) {					--> Identified props is an object containing 2 properties with respective values. Given the properties Sum Component can render its output
					return(
						<h1>{props.a} + {props.b} = {props.a + props.b}</h1>
					);
				}
				
				ReactDOM.render(<Sum a={4} b={2} />		--> Sum must have staring with capital letter. Attributes are passed as SINGLE OBJECT. 
				, document.getElementById('root')
				);
				
				Output:
					4 + 2 =6
					
				React Rule: All React Components must act like pure functions w.r.t there props.
					Which mean for a given props object output should always be same, so Component does not needs to be rerendered										
			
	13. Class
	
		Prefered way to define React Component is using Function sytax seen so far
			React Component --> JS script Funtion from props object--> To a React Element
		
		Another way is define React Component is via ES6 JS class
			Minimum it should extend React.Component and render method
		
		Imp: if possible use function
			
			class Sum extends React.Component{
				render() {
					return <h1>
						{props.a} + {props.b} = {props.a + props.b}
					</h1>;
				}
			}
			
			ReactDOM.render(<Sum a={4} b={2} />	
			, document.getElementById('root')
			);
			
	14. Component LifeCycle
		
			Mounting:
				Constructor --> componentWillMount --> render --> componentDidMount
			
			Updating:
				componentWillReciveProps --> shouldComponentUpdate --> componentWillUpdate --> render --> componentDidUpdate
				
	15. State
			Are local and mutable.
			Having Data within Component which can change increases complexity and limits the composibility of component
			Try to avoid using State
			
			eg. Earlier example on increment Click, we can move the OnClick to same Class so it becomes self contained
			
				class ClickCounter extends React Component{
					constructor(props){
						super(props);
						this.state = {click:0};
					}
					
					render(){
						return <div onClick={() =>
							{ this.setState({clicks: this.state.clicks +1});}}>		--> Important to use setState instead of direct change, so that react knows component has changed and needs to be rendered.
							This div has been clicked (this.state.clicks) times
							</div>
						
					}
				}
			Its usually better to maneged state at application level, so avoid class and state
				
	16. Prop Validation
			Validatin of types for variable or props, By Default React Props are not Type sensitive
				
				import PropTypes from 'prop-types';		--> Separate packge, to be needs to be downloaded
				
				function Sum(props) {				
					return(
						<h1>{props.a} + {props.b} = {props.a + props.b}</h1>
					);
				}
				
				Sum.propTypes = {
					a: PropTypes.number.isRquired,	--> prop type validation when its passed, plus its required.
					b: PropTypes.number.isRquired
				}
				
				ReactDOM.render(<Sum a={4} b={2} />
				, document.getElementById('root')
				);
				
	17. TypeScript(Microsoft) and Flow
			Both are ways where they are trying to make it type sensitive
				
				interface Sum.Props = {
					a: number;
					b: number;
				}

				function Sum(props: SumProps) {				
					return(
						<h1>{props.a} + {props.b} = {props.a + props.b}</h1>
					);
				}
				
				ReactDOM.render(<Sum a={4} b={2} />
				, document.getElementById('root')
				);
			
	18. Testing Component
			React should not have business logic. So not high value testing.
			Functions are easy testing
			
			create-react-app uses Jest as testing framework
				https://jestjs.io/
				
				npm test --> Command to test

				Sample
				describe("When setting up testing",()=> {
					it("should fail", ()=> {
						expect(1+1).toBe(3);
					});
				})


				Simple Test for Hello Click
					import React from "react";
					import { mockComponent } from "react-dom/test-utils";

					function Hello(props){
						return <h1>Hello at {props.now}</h1>
					}

					describe("When testing directly",()=> {

						beforeAll(()=> {
							result= Hello({now: moment.toISOString()});
						});

						it("return a value", ()=> {
							expect(result).not.toBeNull();
						});

						it("is a h1", ()=> {
							expect(result.type).toBe("h1");
						});

						it("has children", ()=> {
							expect(result.props.children).toBeTruthy();
						});

					})

				
					
