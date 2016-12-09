# Single Page Applications Quiz

## Setup

1. Create the working directory for the quiz first.

    ```bash
    mkdir -p ~/workspace/quizzes/spa && cd $_
    ```

1. Clone this repository and `cd` into the directory it creates.
1. Now run the following commands.

    ```bash
    git checkout -b quiz
    touch index.html
    touch quiz.js
    touch quiz.css
    touch inventory.json
    ```

You are now ready to work in the `quiz` branch.

When your work in complete, push up the branch (`git push origin quiz`) and submit the pull request on Github.

## Instructions

You operate a used car lot, and need to have an application where you can update the description and availability of each car in your inventory. You are going to using the Bootstrap grid to lay out your HTML structure.

### Behavior

1. Create an array of cars in the `inventory.json` file (see example structure below). Put at least three cars in the array.
1. When your page first loads, you need to use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object.
1. Loop over your array of cars and build up an HTML string to build a card for each car. Also, use Bootstrap to create rows. Each row should contain 3 columns. Make sure you have a parent element with a class of `container`. Hint: You must build up the entire string of columns/rows before injecting into the DOM. Use a counter variable to know when to close a row after three columns.
1. Put a standard Bootstrap navbar element at the top of your page.
1. Put a text input field in the navigation bar.
1. Make sure you display all properties of the car in the DOM. Basic styling is up to you.
1. Make sure that each car card element has a CSS class which adds a black border around it.
1. When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
1. Also, on click of the car element, clear the value of the text input in the navbar, and put the [cursor in the text input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus).
1. When you start typing into the navbar's text input, the **description**, and only that property, of the currently selected car should be bound to what you are typing in and match it exactly.

### Technical Requirements

1. You should add a function (e.g. `loadInventory`) that loads the `inventory.json` file and stores the inventory in a variable. This function should accept
1. You should add a function `populatePage` that renders the inventory to the page.
1. You should add a function that only creates all of the eventHandlers that you need for the application. Name the function `activateEvents`.
1. You should add a function that resets the border thickness and background color for each car element back to the original values.
1. You should add a function that changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments:
    1. A car DOM element that was clicked on.
    1. A color name of your choice (see behavior requirement 5 above).

# Starter Code

Please read, and feel free to use, the code below to get started.

##### inventory.json

```json
{
  "cars": [
    {
      "make": "Nissan",
      "model": "Rogue",
      "year": "2006",
      "price": "8999",
      "description": "This is an immaculate 2006 Nissan Rogue with only 25000 miles on it. Leather seats, power everything."
    }
  ]
}
```

##### quiz.js

```js
var inventory = [];
loadInventory();

function populatePage (inventory) {
  // Loop over the inventory and populate the page

  // Now that the DOM is loaded, establish all the event listeners needed
  activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete

function loadInventory (callback) {
  var inventoryLoader = new XMLHttpRequest();

  inventoryLoader.addEventListener("load", function () {

  });
}
```
