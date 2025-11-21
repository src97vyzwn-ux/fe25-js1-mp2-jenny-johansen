// START PAGE
const startPage = document.querySelector('#startPage');
const gamePage = document.querySelector('#gamePage');
const winPage = document.querySelector('#winPage');
const welcomeMessage = document.querySelector('#welcomeMessage');
const playernameForm = document.querySelector('#nameForm');
const playerName = document.querySelector('#playerName');

gamePage.classList.add('hidden');
winPage.classList.add('hidden');

playernameForm.addEventListener('submit', startGame);

function startGame(event) {
    event.preventDefault();

    startPage.classList.add('hidden');
    gamePage.classList.remove('hidden');

    welcomeMessage.innerText = `Welcome ${playerName.value}!`;
}


// GAME PAGE
const diceBox = document.querySelector('.diceContainer');
const totalPoints = document.querySelector('#totalPoints');
const roundsPlayed = document.querySelector('#roundsPlayed');
const currentPoints = document.querySelector('#currentPoints');
const rollDiceBtn = document.querySelector('#rollDice');
const holdDiceBtn = document.querySelector('#holdDice');

function createDice(number) {
    const dotPosition = {
      1: [[50, 50]],
      2: [[20, 20], [80, 80]],
      3: [[20, 20], [50, 50], [80, 80]],
      4: [[20, 20], [20, 80], [80, 20], [80, 80]],
      5: [[20, 20], [20, 80], [50, 50], [80, 20], [80, 80]],
      6: [[20, 20], [20, 80], [50, 20], [50, 80], [80, 20], [80, 80]],
    };

    const dice = document.createElement('div');
    dice.classList.add('dice');

    for (const position of dotPosition[number]) {
      const dot = document.createElement('div');

        dot.classList.add('diceDot');
        dot.style.setProperty('--top', position[0] + '%');
        dot.style.setProperty('--left', position[1] + '%');
        dice.appendChild(dot);

        if (number === 1) {
            dot.style.backgroundColor = 'red';
        }
    }
    return dice;
}

function rollDice(diceBox) {
    diceBox.innerHTML = '';
    diceRoll = Math.ceil(Math.random() * 6);
    const dice = createDice(diceRoll);
    diceBox.appendChild(dice);
}

rollDice(diceBox);

rollDiceBtn.addEventListener('click', () => {
    rollDice(diceBox);

    currentPoints.innerText = parseInt(currentPoints.innerText) + diceRoll;

    if (diceRoll == 1) {
        currentPoints.innerText = '0';
        roundsPlayed.innerText = parseInt(roundsPlayed.innerText) + 1;

        const alert = document.createElement('p');
        gamePage.appendChild(alert);
        alert.classList.add('alert');
        alert.innerText = 'Oops! You rolled a 1! Your current points have been reset to 0 and your turn is over.';

        rollDiceBtn.addEventListener('click', () => {
            alert.remove();
        });
    }
});


// WIN PAGE
holdDiceBtn.addEventListener('click', () => {
    totalPoints.innerText = parseInt(totalPoints.innerText) + parseInt(currentPoints.innerText);
    currentPoints.innerText = '0';
    roundsPlayed.innerText = parseInt(roundsPlayed.innerText) + 1;

    if (parseInt(totalPoints.innerText) >= 100) {
        gamePage.classList.add('hidden');
        winPage.classList.remove('hidden');

        const winnerMessage = document.querySelector('#winnerMessage');
        winnerMessage.innerHTML = `Congratulations ${playerName.value}!<br>You won the game with ${totalPoints.innerText} points in ${roundsPlayed.innerText} rounds!`;

        const playAgainBtn = document.querySelector('#playAgain');
        playAgainBtn.addEventListener('click', () => {
            totalPoints.innerText = '0';
            roundsPlayed.innerText = '0';
            currentPoints.innerText = '0';
            diceBox.innerHTML = '';
            rollDice(diceBox);

            winPage.classList.add('hidden');
            startPage.classList.remove('hidden');

            playAgainBtn.remove();
        });
    }
});