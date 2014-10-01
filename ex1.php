<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf8" />
		<script src="angular.js"></script>
	</head>
	<body>
		<div ng-app ng-init="qty=1;const=2">
			<b>Invoice:</b>
			<div>
				Quantity: <input type="number" min="0" ng-model="qty" />
			</div>
			<div>
				Const: <input type="number" min="0" ng-model="const" />
			</div>
			<div>
				<b>Total:</b> {{qty * const | currency}}
			</div>
		</div>
	</body>
</html>