import CSS from './index.module.css';
import Contact from 'components/Contact/Contact';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={CSS.list}>
      {contacts.map(el => (
        <Contact key={el.id} contact={el} deleteContact={deleteContact} />
      ))}
    </ul>
  );
};
export default ContactList;
