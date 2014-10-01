angular.module("app", [])
.run(function($templateCache) {
	$templateCache.put('helloTemplate.html');
})
.directive("hello", function() {
	return {
		restrict: 'E',
		//template: '<div>oi lá</div>',
		templateUrl: 'helloTemplate.html',
		replace: true
	}
});