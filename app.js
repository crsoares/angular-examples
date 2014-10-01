angular.module("app", [])
.directive("hello", function() {
	return {
		restrict: 'E',
		template: '<div>oi lá</div>',
		replace: true
	}
});