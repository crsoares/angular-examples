angular.module("app", [])
.directive("accordion", function() {
	return {
		restrict: 'EA',
		replace: true,
		transclude: true,
		template: '<div ng-transclude></div>',
		controller: function() {
			var expanders = [];

			this.gotOpened = function(selectedExpander) {
				angular.forEach(expanders, function(expander) {
					if (selectedExpander != expander) {
						expander.showMe = false;
					}
				});
			}

			this.addExpander = function(expander) {
				expanders.push(expander);
			}
		}
	}
})
.directive("expander", function() {
	return {
		restrict: 'EA',
		replace: true,
		transclude: true,
		require: '^?accordion',
		scope: { title: '=expanderTitle' },
		template: '<div>' +
				  '<div class="title" ng-click="toggle()">{{title}}</div>' +
				  '<div class="body" ng-show="showMe" ng-transclude></div>' +
				  '</div>',
		link: function(scope, element, attrs, accordionController) {
			scope.showMe = false;
			accordionController.addExpander(scope);

			scope.toggle = function toggle() {
				scope.showMe = !scope.showMe;
				accordionController.gotOpened(scope);
			}
		}
	}
});

function SomeController($scope) {
	$scope.expanders = [
		{ title: "Clique em mim para expandir", text: "Oi lá gente, eu sou o conteúdo que estava escondido, mas agora é mostrado." },
		{ title: "Clique neste", text: "Eu sou ainda melhor texto que você já viu anteriormente" },
		{ title: "Não, clique em mim!", text: "Estou texto que deve ser visto antes de ver outros textos" }
	];
}