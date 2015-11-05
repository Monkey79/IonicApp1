ionic2module.controller('HomeCtrl', function($scope, $state, $http) {
    console.log("==SOY HOME CTRL====");
    $scope.data = {
        keyWord: '',
        items:null
    };


    $scope.submitFormHndl = function() {
        console.log("==SOY CLICK====", $scope.data.keyWord);

        $http.get('https://api.mercadolibre.com/sites/MLA/search?q=' + $scope.data.keyWord)
            .then(function(resp) {
                $scope.data.items = resp.data.results;
                console.log('MELI RESP ',  $scope.data.items);
                $state.go('ResultsState',{items:$scope.data.items});
            });
    }
});
