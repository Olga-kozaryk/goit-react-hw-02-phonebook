import { Component } from "react";
import { FormStyled } from "./ContactForm.styled";
import  {LabelStyled}  from "./LabelForm.styled";
import  {BtnForm } from "./BtnForm.styled";

class ContactForm extends Component {
state = {
name: '',
}

    render() {
        return (
          <FormStyled>
            <LabelStyled>
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
            </LabelStyled>
           
    
            <BtnForm type="submit">
              Add contact
            </BtnForm>
          </FormStyled>
        ); 
      }
}
export default ContactForm;