export class GetDataService {

	constructor($http) {
		this._$http = $http;
	}

	getDataOn(url) {
		return this._$http.get(url);
	}
	sortByDate(a, b) {
		let date1 = (new Function('', `return ${a.date}`))();
		let date2 = (new Function('', `return ${b.date}`))();
		if(date1 > date2) return -1;
		if(date1 < date2) return 1;
	}
	sortByName(a, b) {
		let name1 = (a.name || a.email).toLowerCase();
		let name2 = (b.name || b.email).toLowerCase();
		if(
			(name1.charCodeAt(0) >= 1072 && name1.charCodeAt(0) <= 1103) &&		//первое слово - русское
			(name2.charCodeAt(0) >= 97 && name2.charCodeAt(0) <= 122)			//второе слово - англ
			) return -1;	
		if(
			(name2.charCodeAt(0) >= 1072 && name2.charCodeAt(0) <= 1103) &&		//второе слово - русское
			(name1.charCodeAt(0) >= 97 && name1.charCodeAt(0) <= 122)			//первое слово - англ
			) return 1;		
		if(name1 > name2) return 1;
		if(name1 < name2) return -1;
	}
}