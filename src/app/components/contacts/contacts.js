import templateUrl from './contacts.html';
import style from './contacts.css';

export const contactsComponent = {
	templateUrl,
	bindings: {
		contact: '<',
		changeArrChecked: '&',
		editContact: '&'
	}
}