import templateUrl from './newContact.html';
import style from './newContact.css';

class newContactComponentCtrl {
	constructor($scope) {
		this._$scope = $scope;
	}
	$onInit() {
		this.editContact = { 
			email: this.contact ? this.contact.email : 'email',
			name:  (this.contact && this.contact.name) ? this.contact.name : 'Имя',
			phone: (this.contact && this.contact.phone) ? this.contact.phone : 'Телефон',
			photo: this.contact ? this.contact.photo : '' 
		};
		this.color = '#' + Math.floor(Math.random()*16777215).toString(16);
	}
	cancel() {
		this.isNewContact = false;
		this.contact = null;
	}
	saveContact() {
		this._$scope.editContact.email.$touched = true;
		if(this.contact) { 									// сохраняет существующий
			for(item in this._$scope.editContact.$error) {
				if(item != 'unique') return;
			}
			this.contact.email = this.editContact.email;
			this.contact.name = this.editContact.name == 'Имя' ? '' : this.editContact.name;;
			this.contact.phone = this.editContact.phone == 'Телефон' ? '' : this.editContact.phone;;
			this.isNewContact = false;
			this.contact = null;
		} else {											// создает новый
			if(this._$scope.editContact.$invalid) return;
			let contact = {};
			contact.email = this.editContact.email;
			contact.name = this.editContact.name == 'Имя' ? '' : this.editContact.name;
			contact.phone = this.editContact.phone == 'Телефон' ? '' : this.editContact.phone;
			contact.color = this.color;
			this.contacts.push(contact);
			this.isNewContact = false;
			this.contact = null;
		}
	}
	onFocus(prop, text) {
		if(this.editContact[prop] == text) this.editContact[prop] = '';
	}
	onBlur(prop, text) {
		if(prop == 'email' && this.editContact[prop] == '') this.editContact[prop] = text
		if(prop != 'email' && !this.editContact[prop]) this.editContact[prop] = text;
	}
}

export const newContactComponent = {
	templateUrl,
	controller: newContactComponentCtrl,
	bindings: {
		contact: '=',
		contacts: '<',
		isNewContact: '='
	}
}