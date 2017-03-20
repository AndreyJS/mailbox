import templateUrl from './newMail.html';
import style from './newMail.css';

class newMailComponentCtrl {
	constructor($scope) {
		this._$scope = $scope;
	}
	$onInit() {
		this.mail = {
			email: 'Кому',
			theme: 'Тема'
		};
		this.isListContacts = false;
	}
	sendMail() {
		if(this._$scope.newMail.$invalid && !this._$scope.newMail.$error.unique) return;
		let newMail = {};
		let lastId = +this.sendMails[this.sendMails.length-1].id;
		newMail.id = lastId + 1;
		newMail.date = 'new Date()';
		newMail.from = this.mail.email;
		newMail.theme = this.mail.theme;
		newMail.text = this.mail.text;
		this.sendMails.push(newMail);
		this.isNewMail = null;
		if(!this._$scope.newMail.email.$error.unique) {
			this.contacts.push({email: this.mail.email, color: '#' + Math.floor(Math.random()*16777215).toString(16)});
		}
	}
	setEmail(email) {
		this.mail.email = email;
		this.isListContacts = false;
	}	
	onFocus(prop, text) {
		if(this.mail[prop] == text) this.mail[prop] = '';
	}
	onBlur(prop, text) {
		if(!this.mail[prop]) this.mail[prop] = text;
	}
}

export const newMailComponent = {
	templateUrl,
	controller: newMailComponentCtrl,
	bindings: {
		contacts:'<',
		sendMails: '<',
		isNewMail: '='
	}
}