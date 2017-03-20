import templateUrl from './mailbox.html';
import style from './mailbox.css';

class mailboxComponentCtrl {
	constructor($state, GetDataService, AuthService) {		
		this._GetDataService = GetDataService;
		this._AuthService = AuthService;
		this._$state = $state;
	}
	$onInit() {
		this.index = 1;
		this.viewMails = this.mails[this.index];
		this.viewMails.sort(this._GetDataService.sortByDate);
		this.arrChecked = [];
		this.listbox = [];
		this.typeBox = 'myMail';
		this.isMiniMenu = false;
		this.active = [];
		this.active[this.index] = 'active';
	}
	toggleTypeBox(typeBox) {
		this.typeBox = typeBox;
		if(typeBox == 'myMail' && this.showContacts) {
			this.showContacts = false;
			this.arrChecked = [];
		} else if(typeBox == 'Контакты' && !this.showContacts) {					
			this.showContacts = true;					
			this.showMail = null;
			this.active[this.index] = '';
			this.index = null;
			this.arrChecked = [];
			this.contacts.sort(this._GetDataService.sortByName);		
		}
	}
	toShowMiniMenu() {
		this.isMiniMenu = !this.isMiniMenu;
	}
	toggleAvatar() {
		if(!this.listbox.length){
			this._GetDataService.getDataOn('./data/listbox.json').then((data => {
				this.listbox = data.data;
			}), () => {console.log('Ошибка загрузки ящиков')});
		} else {
			this.listbox = [];
		}
	}
	onBlur() {
		if(event.target.classList.contains("avatar")) return;
		this.listbox = [];
	}
	logout(namebox) {
		this._AuthService.logout(namebox);
		this._$state.go('login');
	}
	setBox(namebox) {
		if(this._AuthService.isAuth(namebox)) this._$state.go('mainpage', {namebox});
		else this._$state.go('login', {namebox});
	}
	setViewMails(listMails, index) {
		if(this.index == index && !this.showMail) return;
		this.arrChecked = [];
		this.toggleTypeBox('myMail');
		listMails = listMails[index];
		listMails.sort(this._GetDataService.sortByDate);
		this.viewMails = listMails;
		this.showMail = null;
		this.active[this.index] = '';
		this.active[index] = 'active';
		this.index = index;
	}
	openMail(index) {
		for(let i = 0; i < this.viewMails.length; i++) {
			if(this.viewMails[i].id == index) {
				this.showMail = this.viewMails[i];
				break;
			}
		}
		this.arrChecked.push(index);
		this.find = '';
	}
	delMails() {
		for(let i = 0; i < this.arrChecked.length; i++) {
			if(this.showContacts) {
				for(let k = 0; k < this.contacts.length; k++){
					if(this.contacts[k].id == this.arrChecked[i]) {
						this.contacts.splice(k, 1);
						break;
					}
				}
			} else {
				for(let k = 0; k < this.viewMails.length; k++){
					if(this.viewMails[k].id == this.arrChecked[i]) {
						this.viewMails.splice(k, 1);
						break;
					}
				}
			}
		}
		this.arrChecked = [];
		this.showMail = null;
	}
	createMail() {
		this.isNewMail = true;
		if(!this.contacts) {
			this._GetDataService.getDataOn('./data/contacts.json').then((data) => {
				this.contacts = data.data;
			}, () => {console.log('Ошибка получения контактов')});
		}
	}
	changeArrChecked(index) {
		if(event.target.checked) this.arrChecked.push(index);
		else this.arrChecked.splice(this.arrChecked.indexOf(index), 1);
	}
	showNewContact() {
		this.isNewContact = true;
	}
	editContact(index) {
		this.contact = this.contacts[index];
		this.isNewContact = true;
	}
}

export const mailboxComponent = {
	templateUrl,
	controller: mailboxComponentCtrl,
	bindings: {
			contacts: '<',
			mails: '<',
			namebox: '<'
	}
}