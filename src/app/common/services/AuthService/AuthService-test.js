export function AuthService() {
	
	beforeEach(angular.mock.module('mailBox'));

	let AuthService, $httpBackend;
	let listbox = [{namebox: 'firstbox', password: '1'}, {namebox: 'secondbox', password: '2'}, {namebox: 'thirdbox', password: '3'}];

	beforeEach(angular.mock.inject(['AuthService', '$httpBackend', (_AuthService_, _$httpBackend_) => {
		'ngInject';
	
		AuthService = _AuthService_;
		$httpBackend = _$httpBackend_;
		$httpBackend.whenGET('./data/listbox.json').respond(listbox);
	}]));

	it('box should be authorized', () => {
		AuthService.checkAuth('firstbox', '1');
		AuthService.checkAuth('secondbox', '2');
		AuthService.checkAuth('thirdbox', '3');
		$httpBackend.flush();
		expect(AuthService.isAuth('firstbox')).toBe(true);
		//expect(AuthService.isAuth('secondbox')).toBe(true);
		//expect(AuthService.isAuth('thirdbox')).toBe(true);
	});

		it('box should logout', () => {
		AuthService.logout('firstbox');
		expect(AuthService.isAuth('firstbox')).toBe(false);
	});
}