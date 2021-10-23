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
Level1: App(will have contacts data, will be passed to ContactList as props)
	Level2: Header("ui fixed menu")
		Level3: Add Contact(Contact Form)(Class)("ui main")
			Level4: Contact List("ui celled list")("item") (will have contacts data, each contact will be passed as props to CardContact)
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

9. ContactList.js need dummy data as list/array, Data will come from Apps as props 

		const contacts = [
			{
			  id: "1",
			  "name":"Pan",
			  "email":"pan@gmail.com"
			},
			{
			  id: "2",
			  "name":"Rau",
			  "email":"rau@gmail.com"
			}
		  ];

10. App pass props contacts to ContactList.js
	App.js
      <ContactList contacts={contacts}/>
	
	
	
11. Check in Console log if data is coming in ContactList as contact object
	const ContactList = (props) => {
		console.log(props);
		return ( 
			<div className="ui celled list">
				Contact List
			</div>
		 );
	}

12. ContactList.js Take contacts data and create a function which will map to JSX div, to create data for each row
		const renderContactList = props.contacts.map((contact)=>{
			return(
				<div className="item">
					<div className="content">
						<div className="header">{contact.name}</div>
						<div>{contact.email}</div>
					</div>
				</div>
			);
		})

13. ContactList.js Add icon to each row for delete
                <i className="trash alternate outline icon"></i>		
	
14. Render the funtion
    return ( 
        <div className="ui celled list">
            {renderContactList}
        </div>
     );
	 
	Not execute, Just reference this for now
		{renderContactList()}
	  
15. ContactCard.js, since the list has number of rows and its repeating convert that to separete Component
	
	ContactList
		const renderContactList = props.contacts.map((contact)=>{
			return(
				<ContactCard contact={contact} />
			);
		})	

	ContactList
		const ContactCard = (props) => {
			return ( 
				<div className="item">
				<div className="content">
					<div className="header">{props.contact.name}</div>
					<div>{props.contact.email}</div>
				</div>
				<i className="trash alternate outline icon"></i>
			</div>
			 );
		}		
		
16. ContactCard.js, Add inline style to delete icon
        <i className="trash alternate outline icon"
        style={{color:"red", marginTop:"7px"}}></i>
		
17. ContactCard.js, instead of calling props again and again, can mention it as constant.
		    const {id, name, email} = props.contact;
			
18. ContactCard.js, Add image for user
