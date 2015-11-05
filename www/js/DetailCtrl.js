ionic2module.controller('DetailCtrl', function($scope, $state, $stateParams, $http) {
    console.log("==SOY DETAIL CTRL====", $stateParams.itemId);
    $scope.data = {
        item: {
            id: $stateParams.itemId,
            title: '',
            picture: '',
            thumbnail:'',
            price: ''
        }
    }

    $http.get('https://api.mercadolibre.com/items/' + $scope.data.item.id)
        .then(function(resp) {
            console.log('MELI RESP ', resp.data);

            $scope.data.item.picture = resp.data.pictures[0].secure_url;
            $scope.data.item.title = resp.data.title;
            $scope.data.item.condition = resp.data.condition;
            $scope.data.item.price = resp.data.price;
            $scope.data.item.thumbnail = resp.data.thumbnail;
            console.log('MELI RESP ', $scope.data.item.price);
        });
});
