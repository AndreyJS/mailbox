export function ValidEmail() {
	beforeEach(angular.mock.module('mailBox'));

	let element, $scope, isolatedScope, validEmail; 

	beforeEach(angular.mock.inject(($compile, $rootScope) => {
		'ngInject';

		element = angular.element('<input type="text" name="emailName" valid-email ng-model="email" />');
		$scope = $rootScope.$new();
		$compile(element)($scope);
		isolatedScope = element.scope();
	}));

	it('should return invalid email', () => {
		validEmail = !!isolatedScope.$$watchers[0].fn('email');
		expect(validEmail).toBe(false);
	});

	it('should return valid email', () => {
		validEmail = isolatedScope.$$watchers[0].fn('email@email')
		expect(validEmail).toBe(true);
	});

}