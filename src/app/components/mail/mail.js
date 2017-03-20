import templateUrl from './mail.html';
import style from './mail.css';

class mailComponentCtrl {
	$onInit() {
		for(let i = 0; i < this.contacts.length; i++) {
			if(this.contacts[i].email == this.mail.from) {
				this.contacts[i].photo ? this.icon = this.contacts[i].photo : this.color = this.contacts[i].color;
					this.alias = this.contacts[i].name;
				}
			} 
		if(this.oneMail) {
			this.mail.unread = 'false';
		}
		if(this.mail.unread === 'true') {
			this.unread = 'unread';
		}
	}
}

export const mailComponent = {
	templateUrl,
	controller: mailComponentCtrl,
	bindings: {
		contacts: '<',
		mail: '<',
		oneMail: '<',
		changeArrChecked: '&',
		openMail: '&'			
	}
}