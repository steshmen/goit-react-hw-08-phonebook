import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);

    const getFilterContact = () => {
        const filterNormalize = filter.toLowerCase();
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(filterNormalize)
        );
      };
    
    const filteredContatcs = getFilterContact();
    
    return (
        <ul>
            {filteredContatcs.map(({ name, id, number }) => (
                <ContactItem
                    key={id}
                    name={name} 
                    id={id}
                    number={number}
                />
            ))}

        </ul>
    )
}
