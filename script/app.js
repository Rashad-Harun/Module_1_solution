(()=> {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('lunchCheckController', LunchCheckController)

    LunchCheckController.$inject = ['$scope']
    function LunchCheckController($scope){

        $scope.menu = ''
        $scope.checkMenu = function(menu){
            var menuItem = menu.split(',')
            var mess = document.getElementById('message');

            if(menuItem.length -1 === 0 ){
                $scope.message = 'Please enter data first !!!';
                mess.style.border = '2px solid black';
            }
            else if(menuItem.length > 0 && menuItem.length <= 3){
                $scope.message = 'Enjoy!';
                mess.style.color = 'green';
                mess.style.border = '2px solid green';
            }
            else{
                $scope.message = 'Too much!';
                mess.style.color = 'red';
                mess.style.border = '2px solid red';
            }
        }
    }
})();



