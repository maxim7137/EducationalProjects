root = document.querySelector('body');

const view = {
  displayMessage: function(msg) {
    const messageArea = root.querySelector('#messageArea');
    messageArea.textContent = msg;
  },
  displayHit: function(location) {
    const cell = document.getElementById(location);
    cell.setAttribute('class', 'hit');
  },
  displayMiss: function(location) {
    const cell = document.getElementById(location);
    cell.setAttribute('class', 'miss');
  },
};

const model = {
  boardSize: 7,
  numShips: 3,
  shipsSunk: 0,
  shipLength: 3,
  ships: [{
      locations: [0, 0, 0],
      hits: ['', '', '']
    },
    {
      locations: [0, 0, 0],
      hits: ['', '', '']
    },
    {
      locations: [0, 0, 0],
      hits: ['', '', '']
    }
  ],

  fire: function(guess) {
    for (let i = 0; i < this.numShips; i++) {
      let ship = this.ships[i];
      let index = ship.locations.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = 'hit';
        view.displayHit(guess);
        view.displayMessage('Попал!!!');
        if (this.isSunk(ship)) {
          view.displayMessage('Потопил корабль!!!');
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage('Промазал!');
    return false;
  },

  isSunk: function(ship) {
    for (var i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== 'hit') {
        return false;
      }
    }
    return true;
  },

  generateShipLocations: function() {
    let locations;
    for (var i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
  },

  generateShip: function() {
    let direction = Math.floor(Math.random() * 2);
    let row, col;

    if (direction === 1) {
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
    } else {
      row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
      col = Math.floor(Math.random() * this.boardSize);
    }

    let newShipLocations = [];
    for (var i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        newShipLocations.push(row + '' + (col + i));
      } else {
        newShipLocations.push((row + i) + '' + col);
      }
    }

    return newShipLocations;
  },

  collision: function(locations) {
    for (var i = 0; i < this.numShips; i++) {
      let ship = model.ships[i];

      for (var j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }

    return false;
  }
};

function parseGuess(guess) {
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  if (guess === null || guess.length !== 2) {
    alert('Введите букву и цифру - два символа');
  } else {
    firstChar = guess.charAt(0).toUpperCase();
    let row = alphabet.indexOf(firstChar);
    let column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      alert('Введите букву(A-G) цифру(0-6)');
    } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
      alert('Введите букву(A-G) цифру(0-6) в этих пределах не болше и не меньше');
    } else {
      return row + column;
    }
  }
  return null
};

const controller = {
  guesses: 0,

  processGuess: function(guess) {
    let location = parseGuess(guess);
    if (location) {
      this.guesses++

      let hit = model.fire(location);

      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage(`Ты потопил все мои корабли за ${this.guesses} выстрелов.`);
        const fireForm = root.querySelector('.fireForm');
        fireForm.remove();
      }
    }
  }
};

function handleFireButton() {
  const guessInput = document.getElementById('guessInput');
  const guess = guessInput.value;
  controller.processGuess(guess);
  const fireForm = root.querySelector('.fireForm');
  fireForm.reset();
}

function init() {
  const fireForm = root.querySelector('.fireForm');

  fireForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    handleFireButton();
  });

  model.generateShipLocations();
};




window.onload = init;