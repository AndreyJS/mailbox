var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9].+$/i;

function validEmailLink(scope, elem, attr, ctrl) {
	    if (ctrl) {	
			scope.$watch(attr.ngModel, function(value) {
				if(EMAIL_REGEXP.test(value)) {
		       		ctrl.$setValidity('validEmail', true);
		       		return true;
		       	}
		       	ctrl.$setValidity('validEmail', false);
			});
		}	      
	}

export const validEmailFactory = {
	    require: 'ngModel',
	    restrict: '',
	    link: validEmailLink
}