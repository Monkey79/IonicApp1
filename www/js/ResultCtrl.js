ionic2module.controller('ResultsCtrl', function($scope, $state, $stateParams, $http) {
    console.log("==SOY RESULT CTRL====", $stateParams.items);

    $scope.data = {
        items: $stateParams.items
    }

    $scope.itemClickHndl = function(item){
    	console.log("===ITEM-CLICK====",item);
    	$state.go('DetailState',{itemId:item.id});
    }
});
