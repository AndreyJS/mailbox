import base from '../css/base.css';
import {routerSetup} from './common/setup/routerSetup/routerSetup';
routerSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
import {runSetup} from './common/setup/runSetup/runSetup';
runSetup.$inject = ['$state', '$rootScope', 'AuthService'];
import {GetDataService} from './common/services/GetDataService/GetDataService';
GetDataService.$inject = ['$http'];
import {AuthService} from './common/services/AuthService/AuthService';
AuthService.$inject = ['$q', 'GetDataService'];
import {uniqueEmailFactory} from './components/uniqueEmail/uniqueEmail';
import {validEmailFactory} from './components/validEmail/validEmail';
import {loginComponent} from './components/login/login';
  loginComponent.$inject = ['$state', 'GetDataService', 'AuthService'];
import {mailboxComponent} from './common/mailbox/mailbox';
  mailboxComponent.$inject = ['$state', 'GetDataService', 'AuthService'];
import {mailComponent} from './components/mail/mail';
import {newMailComponent} from './components/newMail/newMail';
  newMailComponent.$inject = ['$scope'];
import {listEmailsComponent} from './components/newMail/listEmails/listEmails';
import {contactsComponent} from './components/contacts/contacts';
import {newContactComponent} from './components/newContact/newContact';
  newContactComponent.$inject = ['$scope'];
import {dateFilter} from './common/filters/dateFilter.js';

let mailBox = angular.module('mailBox', ['ui.router', require('angular-messages')]);

mailBox.config(routerSetup);

mailBox.run(runSetup);

mailBox.service('GetDataService', GetDataService);
mailBox.service('AuthService', AuthService);

mailBox.directive('uniqueEmail', function(GetDataService) {	return uniqueEmailFactory; });
mailBox.directive('validEmail', function() { return validEmailFactory; });

mailBox.component('login', loginComponent);
mailBox.component('mailBox', mailboxComponent);
mailBox.component('mail', mailComponent);
mailBox.component('newMail', newMailComponent);	
mailBox.component('listEmails', listEmailsComponent);	
mailBox.component('contacts', contactsComponent);
mailBox.component('newContact', newContactComponent);	

mailBox.filter('dateFilter', dateFilter);