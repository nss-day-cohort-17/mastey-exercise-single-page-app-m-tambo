var inventory;
var carInventory = [];

// Load the inventory and send a callback function to be
// invoked after the process is complete
function loadInventory () {
   var inventoryLoader = new XMLHttpRequest();
   inventoryLoader.addEventListener("load", populatePage);
   inventoryLoader.open("GET", 'inventory.json');
   inventoryLoader.send();
   console.log()
}

// Loop over the inventory and populate the page
function populatePage (e) {
  var carInventory = JSON.parse(e.target.responseText);
  console.log(carInventory);
  // for (var i = 0; i < carInventory.cars.length; i++) {
    // document.querySelector('#inventory').innerHTML +=
    //     `
    //      <div>${carInventory.cars[i].make}</div>
    //     `
  }
  // document.querySelector('#inventory').innerHTML = inventory
}

loadInventory();

// Now that the DOM is loaded, establish all the event listeners needed
function activateEvents () {

}
