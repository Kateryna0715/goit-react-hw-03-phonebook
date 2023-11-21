import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Section from './Section/Section';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Notification from './Notification/Notification';
const { Component } = require('react');

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    const isExist = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    const contactObj = {
      ...newContact,
      id: nanoid(),
    };
    this.setState(prev => ({
      contacts: [...prev.contacts, contactObj],
    }));
  };
  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(el => el.id !== id),
    }));
  };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (localData) this.setState({ contacts: JSON.parse(localData) });
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts) {
      prevState.contacts.length !== this.state.contacts.length &&
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const filterContacts = this.getFilterContacts();
    return (
      <>
        <Section title="Phonebook">
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          {this.state.contacts.length > 0 ? (
            <>
              <Filter value={this.state.filter} onChange={this.changeFilter} />
              <ContactList
                contacts={filterContacts}
                deleteContact={this.deleteContact}
              />
            </>
          ) : (
            <Notification message="There is no added contacts" />
          )}
        </Section>
      </>
    );
  }
}
