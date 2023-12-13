import { Component } from "react";
import data from "./data.json";

import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";


class App extends Component{
    state = {
      contacts: data,

      };

      render(){
        return (
       
 <div>
  <h1>Phonebook</h1>
  <ContactForm/>

 <h2>Contacts</h2>
 <ContactList  contacts = {this.state.contacts} />
 </div>
        )
      }
}
export default App
