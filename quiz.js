// declare some variables globally
var inventory;
var carInventory = [];
var textInput = document.querySelector('#textInput');


// Load the inventory and send a callback function to be
// invoked after the process is complete
function loadInventory () {
   var inventoryLoader = new XMLHttpRequest();
   inventoryLoader.addEventListener("load", populatePage);
   inventoryLoader.open("GET", 'inventory.json');
   inventoryLoader.send();
}

loadInventory()

// Loop over the inventory and populate the page
function populatePage (e) {
  carInventory = JSON.parse(e.target.responseText);
  console.log(carInventory);
  for (var i = 0; i < carInventory.cars.length; i++) {
    document.querySelector('#inventory').innerHTML +=
        `
        <div class="col-sm-4 col-md-4 unselected vehicle">
          <h1 class="text-center">${carInventory.cars[i].year} ${carInventory.cars[i].make} ${carInventory.cars[i].model}</h1>
          <img class="img-responsive" src="${carInventory.cars[i].image}" />
          <p id="description" class="text-justify">${carInventory.cars[i].description}</p>
          <h3 class="text-center">Price: ${carInventory.cars[i].price}</h3>
        </div>
        `
  }

  activateEvents();

}


// establish event listeners needed
function activateEvents () {
  // listener to add styling to selected card and add cursor to input field
  document.addEventListener('click', selectedItem);

  // listener to change item description when enter key is pressed
  document.querySelector('#textInput').addEventListener('keyup', changeDescription);

  // listener for submit button
  document.querySelector('#submitButton').addEventListener('click', resetStyles);

}


// function to style selected card and drop cursor in text field
function selectedItem (e) {
    resetStyles();

    //target vehicle card divs
    if (e.target.className === "col-sm-4 col-md-4 unselected vehicle") {
        e.target.className += " selected"
        // drop cursor in text field
        textInput.focus();
        textInput.select();
    } else

    //target elements inside vehicle cards
    if (e.target.parentElement.className === "col-sm-4 col-md-4 unselected vehicle") {
        e.target.parentElement.className += " selected"

        // drop cursor in text field
        textInput.focus();
        textInput.select();
    } else {
        resetStyles();
        textInput.blur();
    }

}

// function to change vehicle description
function changeDescription (e) {
    if (e.code === 'Enter') {
        resetStyles()
    } else {
        // dynamically add text
        document.querySelector('.selected').childNodes[5].innerHTML = textInput.value;
    }
}

// function to reset card stlyes
function resetStyles () {
    var vehicleCards = document.querySelectorAll('.vehicle');
    for (var i = 0; i < vehicleCards.length; i++) {
        vehicleCards[i].className = "col-sm-4 col-md-4 unselected vehicle";
    }
    document.querySelector('#textInput').value = '';

}
