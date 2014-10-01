angular.module("app", [])
.directive("hello", function() {
	return {
		template: '<div>oi lá <span ng-transclude></span></div>',
		transclude: true
	}
});