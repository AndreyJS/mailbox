import {controllerMailBox} from '../app/common/mailbox/controllerMailBox-test';
  controllerMailBox.$inject = ['$componentController'];
import {AuthService} from '../app/common/services/AuthService/AuthService-test';
  AuthService.$inject = ['GetDataService', 'AuthService', '$httpBackend'];
import {GetDataService} from '../app/common/services/GetDataService/GetDataService-test';
  GetDataService.$inject = ['GetDataService', '$httpBackend'];
import {ValidEmail} from '../app/components/validEmail/validEmail-test';
  ValidEmail.$inject = ['$compile', '$rootScope'];

describe('controllerMailBox', controllerMailBox);
describe('AuthService', AuthService);
describe('GetDataService', GetDataService);
describe('ValidEmail', ValidEmail);