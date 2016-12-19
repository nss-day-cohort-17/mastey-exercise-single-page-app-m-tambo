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

loadInventory()

// Loop over the inventory and populate the page
function populatePage (e) {
  carInventory = JSON.parse(e.target.responseText);
  console.log(carInventory);
  for (var i = 0; i < carInventory.cars.length; i++) {
    document.querySelector('#inventory').innerHTML +=
        `
        <div class="col-sm-4 col-md-4 vehicle">
          <h1 class="text-center">${carInventory.cars[i].year} ${carInventory.cars[i].make} ${carInventory.cars[i].model}</h1>
          <img class="img-responsive" src="${carInventory.cars[i].image}" />
          <p class="text-justify">${carInventory.cars[i].description}</p>
          <h3 class="text-center">Price: ${carInventory.cars[i].price}</h3>
        </div>
        `
  }

  activateEvents();

}

// Now that the DOM is loaded, establish all the event listeners needed

function activateEvents () {
  //listener to add selected class when clicked
  document.addEventListener('click', function (e) {
  console.log(e)
  if (e.target.className === "col-sm-4 col-md-4 vehicle" || e.target.parentElement.className === "col-sm-4 col-md-4 vehicle") {
    console.log('hello')
    selectedItem(e.target)
  }


  })
}

// function to style selected card
function selectedItem () {
  this.style.backgroundColor = 'blue'
}

// listener to reset card stlyes
function resetStyles () {

}

  // var carList = document.querySelectorAll('.vehicle')
  // console.log(carList)
  // for (var i = 0; i < carList.length; i++) {
  //   carList[i].addEventListener('click', function () {
  //   this.className += "selected";
  //   })
  // }
