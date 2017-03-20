export function routerSetup($stateProvider, $urlRouterProvider) {
	'ngInject';

	$stateProvider.state({
		name: 'home',
		url: '',
		resolve: {
			toLogin: function($state) {
				$state.go('login');
			}
		}
	})
	.state({
		name: 'login',
		url: '/login/',
		params: {namebox: null},
		template: '<login namebox="namebox"></login>',
		controller: function($scope, $stateParams) {		
			$scope.namebox = $stateParams.namebox;
		}
	})
	.state({
		name: 'mainpage',
		url: '/mainpage/:namebox',
		template: '<mail-box contacts="contacts" mails="mails" namebox="namebox"></mail-box>',
		resolve: {
			contacts: function(GetDataService) {
				return GetDataService.getDataOn('./data/contacts.json').then((data) => {
					return data.data;
				}, () => {console.log('Ошибка загрузки контактов')});
			},
			mails: function(GetDataService, $stateParams) {
				return GetDataService.getDataOn(`./data/${$stateParams.namebox}.json`).then((data) => {
					data.data[1].sort(GetDataService.sortByDate);
					return data.data; 
				}, () => {console.log('Ошибка при загрузке писем')});
			}				
		},
		controller: function($scope, $stateParams, contacts, mails) {
			$scope.contacts = contacts;
			$scope.mails = mails;
			$scope.namebox = $stateParams.namebox;	
		}
	})/*
	.state({
		name: 'mainpage',
		url: '/mainpage/:namebox',
		template: '<mail-box contacts="contacts" mails="mails" namebox="namebox"></mail-box>',
		resolve: {
			contacts: function(GetDataService) {
				return GetDataService.getDataOn('./data/contacts.json').then((data) => {
					return data.data;
				}, () => {console.log('Ошибка загрузки контактов')});
			},
			mails: function(GetDataService, $stateParams) {
				return GetDataService.getDataOn(`./data/${$stateParams.namebox}.json`).then((data) => {
					data.data[1].sort(getData.sortByDate);
					return data.data; 
				}, () => {console.log('Ошибка при загрузке писем')});
			}				
		},
		controller: function($scope, $stateParams, contacts, mails) {
			$scope.contacts = contacts;
			$scope.mails = mails;
			$scope.namebox = $stateParams.namebox;				
		}
	})*/
	.state({
		name: '404',
		url: '/404',
		template: `
			<h1>404: ЗАПРАШИВАЕМАЯ СТРАНИЦА НЕ НАЙДЕНА</h1>
		`
	})
	$urlRouterProvider.otherwise('404');
}