export function GetDataService() {

	beforeEach(angular.mock.module('mailBox'));

	let GetDataService, $httpBackend;
	let dataFromServer = [{name: 'Rob', email: 'rob@email.com'}];

	beforeEach(angular.mock.inject(['GetDataService', '$httpBackend', (_GetDataService_, _$httpBackend_) => {
		'ngInject';

		GetDataService = _GetDataService_;
		$httpBackend = _$httpBackend_;
		$httpBackend.whenGET('./example/example.json').respond(dataFromServer);
	}]));

	it('should get data', (done) => {
		GetDataService.getDataOn('./example/example.json').then((data) => {
			expect(data.data).toEqual(dataFromServer);
			done();
		});
		$httpBackend.flush();
	});

	it('should get sort by date', () => {
		let obj1 = {date: 'new Date()'};
		let obj2 = {date: 'new Date(2017, 2, 1)'};
		expect(GetDataService.sortByDate(obj1, obj2)).toBe(-1);
	});

	it('should get sort by name', () => {
		let obj1 = {name: 'Олег'};
		let obj2 = {name: 'Rob'};
		expect(GetDataService.sortByName(obj1, obj2)).toBe(-1);
	});

}