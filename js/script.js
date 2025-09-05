function printMessage(msg){
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}

clearMessages();

/* === NOWA FUNKCJA: zamiana liczby/tekstu na nazwę ruchu === */
function getMoveName(arg){
    // pomocnicze logi – możesz zostawić podczas debugowania:
    // console.log('getMoveName -> arg:', arg);

    if (arg === 1 || arg === '1' || arg === 'kamień') {
        return 'kamień';
    } else if (arg === 2 || arg === '2' || arg === 'papier') {
        return 'papier';
    } else if (arg === 3 || arg === '3' || arg === 'nożyce') {
        return 'nożyce';
    }
    return 'nieznany ruch';
}

/* === NOWA FUNKCJA: wyświetlenie wyniku === */
function displayResult(argComputerMove, argPlayerMove){
    // console.log('moves:', argComputerMove, argPlayerMove);

    if (argPlayerMove === 'nieznany ruch') {
        printMessage('Błędny ruch – spróbuj jeszcze raz.');
    } else if (argComputerMove === argPlayerMove) {
        printMessage('Remis!');
    } else if (argComputerMove === 'kamień' && argPlayerMove === 'papier') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {
        printMessage('Ty wygrywasz!');
    } else {
        printMessage('Tym razem przegrywasz :(');
    }
}

// Losowanie liczby 1–3 (oraz komunikaty szkoleniowe jak w przykładzie)
let randomFraction = Math.random();
printMessage('Wylosowany ułamek to: ' + randomFraction);

let calculation = randomFraction * 3 + 1;
printMessage('Ułamek pomnożony przez 3 i powiększony o 1: ' + calculation);

let roundNumber = Math.floor(calculation);
printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);

// Rozpoznanie ruchu komputera na podstawie wylosowanej liczby
// (stary kod zostawiony w komentarzu jako ściąga)
/*
let computerMove;
if (roundNumber === 1) {
    computerMove = 'kamień';
} else if (roundNumber === 2) {
    computerMove = 'papier';
} else if (roundNumber === 3) {
    computerMove = 'nożyce';
}
*/

// Nowe – z użyciem funkcji:
let computerMove = getMoveName(roundNumber);

// Komunikaty o ruchach
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

// Odczytanie ruchu gracza
let playerInput = prompt('Wybierz swój ruch! Wpisz: kamień, papier albo nożyce.');

// (stary kod zostawiony w komentarzu jako ściąga)
/*
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
*/

// Nowe – z użyciem funkcji:
let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

// Wynik gry – przeniesiony do funkcji displayResult
displayResult(computerMove, playerMove);
