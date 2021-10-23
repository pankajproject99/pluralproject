# Remove all default and keep is simple so we will create all from scratch

1. Remove all default and keep is simple so we will create all from scratch

2. Create Components and Move App.js&App.css to Components and Cleanup App.js
		components
			Header.js
			AddContact.js
			ContactList.js
			ContactCard.js

3. Adding sematic-ui for css
https://cdnjs.com/libraries/semantic-ui
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

4. Desing for Page

Component
Level1: App
	Level2: Header("ui fixed menu")
		Level3: Add Contact(Contact Form)(Class)("ui main")
			Level4: Contact List("ui celled list")
				Level5: CardContact
				
5. Update Header.js with semantic ui
	const Header = () => {
		return ( 
			<div className="ui fixed menu">
				<div className="ui container center">
					<h2>Contact Manager</h2>
				</div>
			</div>
		 );
	}

6. 	AddContact.js Contact form with fields

		class AddContact extends React.Component {
			render() {
				return (
					<div className="ui main">
						<h2>Add Contact</h2>
						<form className="ui form">
							<div className="field">
								<label>Name</label>
								<input type="text" name="name" placeholder="Enter Name"></input>
							</div>
							<div className="field">
								<label>Email</label>
								<input type="text" name="email" placeholder="Email1"></input>
							</div>
						</form>
					</div>
				);
			}
		}
	

7. AddContact.js Button within form

	<button className="ui button blue">Add</button>
	
8. ContactList.js 
		const ContactList = () => {
			return ( 
				<div className="ui celled list">
					Contact List
				</div>
			 );
		}

9. 
