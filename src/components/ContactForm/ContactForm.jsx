import { Component } from "react";

class ContactForm extends Component {
state = {
name: '',
}

    render() {
        return (
          <form >
            <label>
              Name
              <input
              
                //value={this.state.name}
                //onChange={this.handleChange('name')}
                type="text"
                name="name"
                //pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                //title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
           
    
            <button type="submit">
              Add contact
            </button>
          </form>
        ); 
      }
}
export default ContactForm;