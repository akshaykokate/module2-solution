(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var showList = this;
    showList.items = ShoppingListCheckOffService.getBuyItems();

    showList.removeBuyItem = function (itemIndex) {
      ShoppingListCheckOffService.removeBuyItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var showList = this;
    showList.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var boughtitems =[];
    var toBuyitems = [
      { name: "cookies", quantity: 10 },
      { name: "mint", quantity: 5 },
      { name: "tropicana", quantity: 1 },
      { name: "dairymilk", quantity: 7 },
      { name: "milk", quantity: 3 },
      { name: "paneer", quantity: 10 }
    ];

    //=======\\to buy items code//========
    service.removeBuyItem = function (itemIndex) {
      var items = {
        name: toBuyitems[itemIndex].name,
        quantity: toBuyitems[itemIndex].quantity
      };
      boughtitems.push(items);
      toBuyitems.splice(itemIndex, 1);
    };

    service.getBuyItems = function () {
      return toBuyitems;
    };

    //=======\\bought items code//========
    service.getBoughtItems = function () {
      return boughtitems;
    };
  } //end of ShoppingListCheckOffService service

})();
