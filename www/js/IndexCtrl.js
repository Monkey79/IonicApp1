ionic2module.controller('IndexCtrl', function($scope, $state, $ionicSideMenuDelegate){
	console.log("==SOY INDEX CTRL====");

	$scope.data = {
		menuItems:[{title:'Home'},{title:'Results'}, {title:'Detail'}]
	}

	$scope.data.menuItemClickedHndl = function(event) {
		var itemMenuId = event.target.id;
		switch(itemMenuId){
			case 'Item-Home':
				$state.go('HomeState');
			break;
			case 'Item-Results':
				$state.go('ResultsState');
			break;
			case 'Item-Detail':
				$state.go('DetailState');
			break;
		}
		
	}

	$scope.toggleLeft = function() {
   	 	$ionicSideMenuDelegate.toggleLeft();
  	};
});