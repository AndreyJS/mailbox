export function runSetup($state, $rootScope, AuthService) {
	//'ngInject';

	$rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {	
		let namebox = toParams.namebox || fromParams.namebox;	
		
			if(toState.name !== 'login' && !AuthService.isAuth(namebox)) {
				event.preventDefault();
				$state.go('login');
			} else if(toState.name === 'login' && AuthService.isAuth(namebox)) {
				event.preventDefault();
				$state.go('mainpage', {namebox});
		}
	});
}
