function printMessage(msg){
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}

clearMessages();

// Losowanie liczby 1–3 (oraz komunikaty szkoleniowe jak w przykładzie)
let randomFraction = Math.random();
printMessage('Wylosowany ułamek to: ' + randomFraction);

let calculation = randomFraction * 3 + 1;
printMessage('Ułamek pomnożony przez 3 i powiększony o 1: ' + calculation);

let roundNumber = Math.floor(calculation);
printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);

// Rozpoznanie ruchu komputera na podstawie wylosowanej liczby
let computerMove;
if (roundNumber === 1) {
    computerMove = 'kamień';
} else if (roundNumber === 2) {
    computerMove = 'papier';
} else if (roundNumber === 3) {
    computerMove = 'nożyce';
}

// Komunikaty o ruchach
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

// Odczytanie ruchu gracza
let playerInput = prompt('Wybierz swój ruch! Wpisz: kamień, papier albo nożyce.');

let playerMove;
if (playerInput === 'kamień') {
    playerMove = 'kamień';
} else if (playerInput === 'papier') {
    playerMove = 'papier';
} else if (playerInput === 'nożyce') {
    playerMove = 'nożyce';
} else {
    playerMove = 'nieznany ruch';
}

printMessage('Twój ruch to: ' + playerMove);
