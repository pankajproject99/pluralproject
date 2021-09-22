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
			
			Component
				DOM is web page and has elements.
				Each component corresponds to an element in DOM.
					Component is responsibile for rendering the the content of that element.
				
				Nested Component: is called Composing componenet
					Nested Component corresponds to nested DOM noes.
	
	8. Sample Code Explanation(Rendering a Component)
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
				
				JSX is not necessary for react. 
				JSX is a special extension that allows us to place HTML elements right inside JavaScript code without using additional methods like createElement().
				Check same code without JSX
					https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=MYewdgzgLgBAggBwTAvDAFASlQPhgbxgHoioALAQ1gEsIYKx6AnJkAdxgDMBXMYKauABQMGKEiwA5kwCmMgWEmoYAcgASMgDaaQMAGK9-gxgGEQAWwTgZYKAEIVAbhEiYsqNyaMAPBooATTWowGRgANwpNbhkUfGk5BUkAX2IcZyTnGCFxaBg_QODQtHRCCKjQpOwUHFdvMgBGHHwy6KTvIga0lxkADysmWH8ZTgpuTVhEBEcgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.15.7&externalPlugins=&assumptions=%7B%7D
				
			
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
			
			When to use function, class and Arrow Function
				If you work with global scope and Object.prototype properties use function.
					FUnction dont have state, so they are called stateless function. With Hook Function also has state, plus more features.
					Function just takes props and return react element.
						They dont manage state, dont have life cycle
				If you work with object constructors use class.
					To use props, use this.props in class
					“stateful” components, they additional offer state and lifecycle.
					Instide constructure use this.state otherwise anywhere else use setState
				If you face any other situation use arrow function.
				
				Hook provides for
					setState --> useState
					lifecycle --. useEffect which has componentDidMount, componentDidUpdate, and componentWillUnmount
					
					Function component look elegent as compared to Class component
					
					https://flatlogic.com/blog/functional-components-vs-class-components-in-react-js/
					HOOK:
						const FunctionalComponent = () => {
						const [count, setCount] = React.useState(0);		--> using seState, value is used only on first render
						return (
						   <div>
							 <p>count: {count}</p>
							 <button onClick={() => setCount(count + 1)}>Click</button>
						   </div>
						 );
						};
						
					CLASS:(More Line of codes)
						
						class ClassComponent extends React.Component {
						 constructor(props) {
						   super(props);
						   this.state = {
							 count: 0
						   };
						 }
						 
						 render() {
						   return (
							 <div>
							   <p>count: {this.state.count} times</p>
							   <button onClick={() => this.setState({ count: this.state.count + 1 })}>
								 Click
							   </button>
							 </div>
						   );
						 }
						}
			
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

		19. Testing DOM		
					describe("When testing with ReactDOM", ()=>{
						it("renders without crashing",()=>{
							const div = document.createElement("div");
							ReactDOM.render(<Hello now={moment.toISOString()}/>,div);
						});
					});
		20. Testing with Enzyme
					
				Install enzyme and its adaptar(More soficated testing library)
					npm i --save-dev enzyme enzyme-adapter-react-16
				Import shallow from enzyme module
				
					Enzyme.configure({ adapter: new Adapter() });

					describe("when Testing with Enzyme", () => {
						it("renders a hi", () => {
							const wrapper = shallow(<Hello now={moment.toISOString()} />);
							expect(wrapper.find("h1").length).toBe(1);
						});

						it("contains Hello at 202-05-08T14:00:00.000Z", () =>{
							const wrapper = shallow(<Hello now={moment.toISOString()} />);
							expect(wrapper.contains(<h1>Hello at 202-05-08T14:00:00.000Z</h1>)).toBe(true);
						});
					});
		21. Testing AuthorQuiz able to render
				By checking if there is div(Test:Passed)
					import { render, screen } from '@testing-library/react';
					import React from 'react';
					import ReactDOM  from 'react-dom';
					import AuthorQuiz from './AuthorQuiz';

					describe("Autho Quiz",() => {
					  it("renders without crashing",()=>{
						  const div = document.createElement("div");
						  ReactDOM.render(<AuthorQuiz />, div);
					  });
					});

					
		22. JSX
				<> supports xml like syntax
				JSX is converted into JS function call(Babel is used)
				JSX is syntax included in line in JS files
				
				React Element in 				
					JSX format
						<Sum a={4} b={3} />
					
					JS format
						React.createElement(			--> Starts with React. Each JSX is convereted into create Element
							Sum,						
							{a:4, b:3},					--> Props are collected in JS object, 2 parameter
							null						--> Children is passed as third parameter
						)
				When a Component is combined wwith props its called React element
				
				
				React Element in 				
					JSX format
						<h1>
							<Sum a={4} b={3} />
						</h1>
				
					JS Format
						React.createElement(			
							'h1',							--> First parameter, build in Components those which map to html elements are taken as String
							null							--> Second Paramter, no props
							React.createElement(			--> Third Parameter, Child Component of h1 element
								Sum,						
								{a:4, b:3},					
								null
							)
						)
		
		23. Props in JSX
				<Hello now={bew Date().toISOString()} />
				
				JSX Attributes become componenet props
				
					now is Attribute in JSX and Component Props in react
					Value assigned to now is JSX attribute expression, delimited by curly brackets
					Exprerssion inside curly brackets can be any JS valid expresion
					During render JS is evelauted and value is placed.
					
				Can also be literal string values, no curly brakcets
					<Hello now="Literal string value" />
					
		24.	Spread Attributes in JSX
				
				const props = {a: 4, b:2};
				const element = <Sum {...props} />
				
		25. Events
				Props are also prefered way to send data out of Component.
				This is done for event.
				
				function Clicker({ handleClick }){
					return <button onCLick={(e) => {handleClick('A');}}>A</button>			--> handleClick('A') Specify function as prop and call that function, pass the data as function argument
				}
				
				cons el = <Clicker handleClick={(1) => {log(1);)) />;						--> handleClick receives a letter A, and logs the letter
				
					
				From : https://codepen.io/bradleyboy/pen/OPBpGw?editors=0011
					
						class Clicker extends React.Component {
						  render() {
							return <div>
							  <button onClick={(e) => {this.props.handleClick('A')}}>A</button>
							  <button onClick={(e) => {this.props.handleClick('B')}}>B</button>
							  <button onClick={(e) => {this.props.handleClick('C')}}>C</button>
							</div>;
						  }
						}

						/*
						 * Render the above component into the div#app
						 */
						React.render(<Clicker handleClick={(letter) =>{console.log(`${letter} clicked`);}}/>, document.getElementById('app'));
				
				
				
		26. React Data Flow
				REact has Tree structure
					Parent component pass props to child components
					Child components use function as props to pass values to parent
					
					
						class ClickyButtons extends React.Component {
						  render() {
							const makeBUtton = v => <button key={v} id={v} onClick={event =>
								this.props.onSelection(event.target.id)}>{v}</button>;
							return <div>
								{_.range(1,this.props.numberofButtons +1).map(makeButton)}
							</div>;
						  }
						}

						/*
						 * Render the above component into the div#app
						 */
						React.render(<ClickyButtons numberofButtons={10} onSelection={console.log}/>, document.getElementById('app'));
		
		27. JSX and HTML
				
				JSX
					<label													--> default written in lowercase
						htmlFor="name" className="highlight"				--> CamelCase, for and class is JS reserved words they are not used for attributes
							style={{										--> style available but with different usage as Json object 
								backgroundColor:"yellow"					--> Key is CamelCase and Value as String
								}}											--> double curly so it delimits the JSX expresion and inner for JS object literals
					>
					Foo Bar
					</label>
					
				HTML
					<label>
						for="name" class="highlight"
							style="background-color:yellow"
					>
					Foo Bar
					</label>

		28. Unescaping Content
				By default its escaped to prevent cross sight and pissing
					If you still want to use than use by __html
					
					function DangerContainer(props){
						return <p> dangerouslySetInnerHTML = {{__html:props.dangerous}} />;
					}
					
					ReactDOM.render(<DangerContainer dangerous="<strong>HELLO,/strong>", document.getElementById('root'));
		
		29. Child Exprerssion and Elements
		
				Can be accessed by props.children
				Below shows whatever child component are passed to it
			
					function Sum({a,b}){
						return <h1> {a} + {b} = {a+b}</h1>;
					}
					function COnditionalDisplay(props){
						return <div>
							{props.isVisible ? props.children : null}
						</div>;
					}
					
					ConditionalDisplay.propTypes = {							--> proptype
						isVisible: PropTypes.bool.isRequired					--> Boolean and is Required
					};
					
					
					cons state = {
						showSum: true
					}
					<ConditionalDisplay isVisible={state.showSum}>				--> Both Child will be shown if true
						<h1>A <span>Sum</span> <h1>								--> Child1
						<Sum a={4] b={2} />										--> CHild2
					</ConditionalDisplay>
					
				function render(){
					ReactDOM.render(<ConditionalDisplay isVisible={state.showSum}>
									<h1>A <span>Sum</span></h1>
									<Sum a={4] b={2} />	
									</ConditionalDisplay>, document.getElementById('root'));
			;
				setInterval(()=>{
					state.showSum = !state.showSum;
					render();							--> call back in interval
					
				}, 2000);	
					
		30. Author Quiz
				
				Step1. 
					class AuthorQuiz extends Component {
					  render() {
						return (
						  <div className="container-fluid">				--> Making div with BootStrap fluid continer
							  <Hero/>									--> 3 continers 1, Show Picture
							  <Turn/>									--> COmpoent for selection
							  <Continue/>								--> COntainer for button
						  </div>
						);
					  }
					}
					
				Step2:
					function Hero(){
					  return(<div className="row">						--> BootStrap row
						<div className="jumbotron col-10 offset-1">		--> BootStrap jumbotron(applies to sytling) column lenght 10(default12) offset from left by 1
						  <h1>Author Quiz</h1>							--> heading
						  <p>Select the book written by the author shown</p>	--> Paragraph
						</div>
					  </div>);
					}
				
				Step3:
					function Turn(){
					  return(
						<div></div>
					  );
					}

					function Continue(){
					  return(
						<div></div>
					  );
					}

				Step4: 
					
					function Footer(){
					  return(<div id="footer" className="row">				--> Boot strap row
						<div className="col-12">							--> Column lenght 12
						  <p className="text-muted credit">					--> Color is less prominent that primary colour(https://www.w3schools.com/bootstrap/bootstrap_ref_css_helpers.asp)
							All images are from <a href="https://commons.wikimedia.org/wiki/Main_Page">Wikemedia Commons</a> and are in the public domain
																			--> <a tag attribute is href, used for page link
						  </p>
						</div>
					  </div>
					  );
					}
					
				Step5: 
					function Turn(){
					  return(
						<div className="row turn" style={{backgroundColor: "white"}}></div>	-
					  );
					}
				
				function Turn(){
				  return(
					<div className="row turn" style={{backgroundColor: "white"}}>					--> trun.css will be added later, style is used for background
					  <div className="col-4 offset-1">												--> out of 12 columns 5 isused now
						<img src={author.imageUrl} className="authorimage" alt="Author"></img>		--> src of image will come from props
					  </div>
					</div>

				  );
				}
				
				Step6: 
					Setup Turn to accept image and book title
					
					AuthorQuiz.js
						function Turn({author,books}){
						  return(
							<div className="row turn" style={{backgroundColor: "white"}}>
							  <div className="col-4 offset-1">
								<img src={author.imageUrl} className="authorimage" alt="Author"></img>
							  </div>
							  <div className="col-6">
								{books.map((title)=><p>{title}</p>)}
							  </div>
							</div>

						  );
						}
						
						function AuthorQuiz ({turnData}) {													--> Receive TurnData from index and give it to Turn
							return (
							  <div className="container-fluid">
								  <Hero/>
								  <Turn author={turnData.author} books={turnData.books}/>
								  <Continue/>
								  <Footer />
							  </div>
							);
						  }
						  
					index.js
						const authors = [
							  {
								name: 'Mark Twin',
								imageUrl: 'images/authors/marktwain.jpg',				--> Copy image file to this location
								imageSource: 'Wikimedia Commons',
								books: ['The Adventures of Huckleberry Finn']
							  }
							];
							
						const state = {
						  turnData: {													--> Since multiple objects needs to be return, lets make a Object as TurnData
							author: authors[0],
							books: authors[0].books
						  }
						};

						ReactDOM.render(<AuthorQuiz {...state} />						--> using expant form so multiple object can be send, further proof
						  , document.getElementById('root'));
						  
				Step7. Move input to expand form
						
						function AuthorQuiz ({turnData}) {
							return (
							  <div className="container-fluid">
								  <Hero/>
								  <Turn {...turnData}/>									--> <Turn author={turnData.author} books={turnData.books}/>
								  <Continue/>
								  <Footer />
							  </div>
							);
						  }
						  
				Step8: Add styling for App.css or AuthorQuiz.js
						App.css
							.turn >div {
							  height: 400px;
							}

							.turn {
							  padding-top: 20px;
							  padding-bottom: 20px;
							}

							.authorimage {
							  max-height: 100%;
							}
					
				Step9: List of books is rendered as list of paragraph, lets make it Compnent and clickable
							
							function Turn({author,books}){
							  return(
								<div className="row turn" style={{backgroundColor: "white"}}>
								  <div className="col-4 offset-1">
									<img src={author.imageUrl} className="authorimage" alt="Author"></img>
								  </div>
								  <div className="col-6">
									{books.map((title)=><Book title={title} key={title}/>)}
								  </div>
								</div>

							  );
							}
						  
							function Book({title}){
							  return(<div className="answer">
								<h4>{title}</h4>
							  </div>);
							}
							
							App.css
								.answer {
								  background-color: #F0F7FD;
								  border-color: #D0E3F0;
								  margin-bottom: 20px;
								  padding: 15px 30px 15px 15px;
								  border-left: 5px solid #D0E3F0;	--> On left side Border
								  cursor: pointer;					--> Change mouse pointer
								}

								.answer:hover{
								  background-color: #D0E3F0;		--> Change color to same which is there on left border
								}
							
							