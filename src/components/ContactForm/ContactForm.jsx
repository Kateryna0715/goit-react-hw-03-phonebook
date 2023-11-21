import { Component } from 'react';
import CSS from './index.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    e.target.reset();
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={CSS.formContainer}>
          <label htmlFor="inputName" className={CSS.formLabel}>
            Name
          </label>
          <input
            name="name"
            type="text"
            className={CSS.input}
            id="inputName"
            onChange={this.handleChange}
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
          <label htmlFor="inputNumber" className={CSS.formLabel}>
            Number
          </label>
          <input
            name="number"
            type="tel"
            className={CSS.input}
            id="inputNumber"
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            required
          />
          <button type="submit" className={CSS.btn}>
            Add contact
          </button>
        </div>
      </form>
    );
  }
}
export default ContactForm;
