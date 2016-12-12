var inventory = [];
loadInventory();

function populatePage () {
  var carInventory = JSON.parse(e.target.responseText)
  console.log(carInventory)
  // Loop over the inventory and populate the page
  for (var i = 0; i < carInventory.length; i++) {
    inventory += `
        <div>${carInventory[i]}</div>
        `
    document.querySelector("#inventory").innerHTML = inventory
  }
  // Now that the DOM is loaded, establish all the event listeners needed

   activateEvents();
}

function activateEvents () {

}

// Load the inventory and send a callback function to be
// invoked after the process is complete
function loadInventory () {
   var inventoryLoader = new XMLHttpRequest();
   inventoryLoader.addEventListener("load", function (event) {
      console.log("car inventory: ", event.target.responseText)
  });
   inventoryLoader.open("GET", 'inventory.json');
   inventoryLoader.send();
   populatePage
}

 loadInventory
