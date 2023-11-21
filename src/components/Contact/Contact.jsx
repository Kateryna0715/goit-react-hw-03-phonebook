import CSS from './index.module.css';

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={CSS.listElement}>
      {contact.name}: {contact.number}
      <button
        className={CSS.btnDelete}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};
export default Contact;
