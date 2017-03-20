class uniqueEmailLink {

	setWatch(scope, elem, attr, ctrl) {
		scope.$watch(attr.ngModel, function(value) {
			GetDataService.getDataOn('./data/contacts.json').then((data) => {
				let contacts = data.data;
				for(let i = 0; i < contacts.length; i++) {
					if(contacts[i].email == value) {
						ctrl.$setValidity('unique', false);
						return;
					}
				}
				ctrl.$setValidity('unique', true);
			}, () => {console.log('Ошибка получения контактов'); ctrl.$setValidity('unique', false);});
		});
	}
}

export const uniqueEmailFactory = {	
	require: 'ngModel',
	link: uniqueEmailLink.setWatch
}