export class AuthService {

	constructor($q, GetDataService) {
		this._statusAuth = {};
		this._promiseIsAuth = $q.defer();
		this._$q = $q;
		this._GetDataService = GetDataService;
	}	

	checkAuth(namebox, password) {
		this._promiseIsAuth = this._$q.defer();
		this._GetDataService.getDataOn('./data/listbox.json').then((data) => {
			let arrBox = data.data;
			
			for(let i = 0; i < arrBox.length; i++) {
				if(arrBox[i].namebox === namebox && arrBox[i].password === password) {
					this._promiseIsAuth.resolve(true);
					this._statusAuth[namebox] = true;
					break;
				}
			}

			if(!this._statusAuth[namebox]) {
				this._promiseIsAuth.reject(new Error("Ошибка авторизации"));
				this._statusAuth[namebox] = false;
			}
		}, () => console.log('Ошибка загрузки listbox'));
			return this._promiseIsAuth.promise;
	}

	isAuth(namebox) {
		return this._statusAuth[namebox];
	}

	logout(namebox) {
		this._statusAuth[namebox] = false;
	}
}