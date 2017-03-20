import templateUrl from './login.html';
import style from './login.css';

class loginComponentCtrl {

	constructor($state, GetDataService, AuthService) {
		this.valueShow = 'Показать';
		this.listbox = []; 
		this._$state = $state;
		this._AuthService = AuthService;
		this._getData = GetDataService;
	}

	enter(namebox, password) {
		this._AuthService.checkAuth(namebox, password)
		.then(response => {
			this.errorAuth = null;
			//if(response) this._$state.go('mailbox', {namebox});})
			if(response) this._$state.go('mainpage', {namebox});})
		.catch(error => {
			this.errorAuth = error.message;
		});
	};

	toggleShowBox() {
		if(this.listbox.length) {
			this.valueShow = 'Показать';
			this.listbox = []; 
		}
		else {
			this.valueShow = 'Скрыть';
			this._getData.getDataOn('./data/listbox.json').then((data) => {
				this.listbox = data.data;
			}, () => console.log('Ошибка загрузки listbox'));
		}
	};

	setBox(namebox, password) {
		this.namebox = namebox;
		this.password = password;
	}
}

export const loginComponent = {
	templateUrl,
	controller: loginComponentCtrl,
	bindings: {
		namebox: '<'
	}
};