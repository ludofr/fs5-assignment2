(function () {
'use strict';

var module = angular.module('ShoppingList', []);
module.controller('ProductsToBuyController', ProductsToBuyController);
module.controller('ProductsBoughtController', ProductsBoughtController);
module.service('ShoppingListService', ShoppingListService);

////////////////////////////////////////////////////////////////

ProductsToBuyController.$inject = ['ShoppingListService'];
function ProductsToBuyController ($ShoppingListService)
{
  var ctrl1 = this ;
  ctrl1.ListName = "Items to buy" ;

}

////////////////////////////////////////////////////////////////

ProductsBoughtController.$inject = ['ShoppingListService'];
function ProductsBoughtController ($ShoppingListService)
{
  var ctrl2 = this ;
  ctrl2.ListName = "Items Bought" ;

}

////////////////////////////////////////////////////////////////

function ShoppingListService()
{

}

})();
