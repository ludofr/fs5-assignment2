(function () {
'use strict';

var module = angular.module('ShoppingList', []);
module.controller('ProductsToBuyController', ProductsToBuyController);
module.controller('ProductsBoughtController', ProductsBoughtController);
module.service('ShoppingListService', ShoppingListService);

////////////////////////////////////////////////////////////////

ProductsToBuyController.$inject = ['ShoppingListService'];
function ProductsToBuyController (ShoppingListService)
{
  var ctrl1 = this ;
  ctrl1.listName = "Items To Buy" ;
  ctrl1.emptyListText = "Everything is bought!" ;

  ctrl1.itemName = "";
  ctrl1.itemQuantity = "";

  ShoppingListService.fillDummy() ;

  ctrl1.items  = ShoppingListService.getItemsToBuy();

  ctrl1.addItem = function ()
  {
    if (ShoppingListService.addItem(ctrl1.itemName, ctrl1.itemQuantity))
    {
      ctrl1.itemName = "";
      ctrl1.itemQuantity = "";
    }
    ctrl1.isEmptyBuyList = ShoppingListService.isToBuyListEmpty()  ;
  }

  ctrl1.removeItem = function (itemIndex)
  {
    ShoppingListService.removeItem(itemIndex);
  }

  ctrl1.transferToBoughtItemsList = function (itemIndex)
  {
    ShoppingListService.transferToBoughtItemsList(itemIndex);
    ctrl1.isEmptyBuyList = ShoppingListService.isToBuyListEmpty()  ;
  }

}

////////////////////////////////////////////////////////////////

ProductsBoughtController.$inject = ['ShoppingListService'];
function ProductsBoughtController (ShoppingListService)
{
  var ctrl2 = this ;
  ctrl2.listName      = "Items Bought" ;
  ctrl2.emptyListText = "Nothing bought yet";

  ctrl2.isEmptyBoughtList = true ;

  ctrl2.items = ShoppingListService.getItemsBought();

}

////////////////////////////////////////////////////////////////

function ShoppingListService()
{
  var service = this ;

  var itemsToBuy  = [] ;
  var itemsBought = [] ;

  service.fillDummy = function ()
  {
    var item = {
      name: "Cookies",
      quantity: "3 bags"
    };
    itemsToBuy.push(item);

    item = {
      name: "Candy bars",
      quantity: "4 packs"
    };

    itemsToBuy.push(item);

    item = {
      name: "Soda",
      quantity: "2 bottles"
    };

    itemsToBuy.push(item);

    item = {
      name: "Cheese",
      quantity: "1 pack"
    };

    itemsToBuy.push(item);

    item = {
      name: "Water",
      quantity: "2 bottles"
    };

    itemsToBuy.push(item);

  };

  service.addItem = function (itemName, quantity) {

    if (itemName !== "" && quantity !== "")
    {
      var item = {
        name: itemName,
        quantity: quantity
      };

      itemsToBuy.push(item);
      return true ;
    }
    else
    {
      return false ;
    }
  };

  service.isToBuyListEmpty = function ()
  {
    return itemsToBuy.length == 0 ;
  };

  service.getItemsToBuy = function ()
  {
    return itemsToBuy ;
  };

  service.getItemsBought = function ()
  {
    return itemsBought ;
  };

  service.transferToBoughtItemsList = function (indexInToBuy)
  {
      itemsBought.push(itemsToBuy[indexInToBuy]);
      itemsToBuy .splice(indexInToBuy, 1);
  };

  service.removeItem = function (index)
  {
    itemsToBuy.splice(index, 1);
  };

}

})();
