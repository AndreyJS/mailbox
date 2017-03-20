export function controllerMailBox() {

	beforeEach(angular.mock.module('mailBox'));

	let ctrl, $componentController;

	beforeEach(angular.mock.inject(["$componentController", (_$componentController_) => {
		'ngInject';
		$componentController = _$componentController_;
	}]));

	it('should toggle type of box "myMail"', () => {
		ctrl = $componentController('mailBox', null);
		ctrl.showContacts = true;
		ctrl.toggleTypeBox('myMail');
		expect(ctrl.showContacts).toBe(false);
	});

	it('should toggle type of box "Контакты"', () => {
		ctrl = $componentController('mailBox', null);
		ctrl.active = [], ctrl.contacts = [];
		ctrl.toggleTypeBox('Контакты');
		expect(ctrl.showContacts).toBe(true);
	});
}