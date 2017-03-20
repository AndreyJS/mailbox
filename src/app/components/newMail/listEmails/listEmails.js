import style from './listEmails.css';

class listEmailsComponentCtrl {
	$onChanges() {
		this.emailFind = {
		email: this.email
		};
	}
}

export const listEmailsComponent = {
	template: `
			<ul>
				<li ng-repeat="contact in $ctrl.contacts | filter:$ctrl.emailFind | limitTo:6" ng-click="$ctrl.setEmail({email: contact.email})">
				{{contact.email}}<br>
				{{contact.name}}
				</li>
			</ul>
	`,
	controller: listEmailsComponentCtrl,
	bindings: {
		contacts: '<',
		email: '<',
		setEmail: '&'
	}
}
		