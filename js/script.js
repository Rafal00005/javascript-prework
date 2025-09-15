// === Logika gry: Kamień, Papier, Nożyce ===

// zamiana liczby/tekstu na nazwę ruchu
const getMoveName = (arg) => {
	const a = typeof arg === 'string' ? arg.toLowerCase() : arg;
	if (arg === 1 || arg === '1' || arg === 'kamień') return 'kamień';
	if (arg === 2 || arg === '2' || arg === 'papier') return 'papier';
	if (arg === 3 || arg === '3' || arg === 'nożyce') return 'nożyce';
	return 'nieznany ruch';
};

// ocena wyniku
const displayResult = (computerMove, playerMove) => {
	if (playerMove === 'nieznany ruch') {
		printMessage('Błędny ruch – spróbuj jeszcze raz.');
	} else if (computerMove === playerMove) {
		printMessage('Remis!');
	} else if (
		(computerMove === 'kamień' && playerMove === 'papier') ||
		(computerMove === 'papier' && playerMove === 'nożyce') ||
		(computerMove === 'nożyce' && playerMove === 'kamień')
	) {
		printMessage('Ty wygrywasz!');
	} else {
		printMessage('Tym razem przegrywasz :(');
	}
};

// === Główna funkcja: cała runda gry ===
function playGame(playerInput) {
	clearMessages(); // na początku funkcji

	const randomFraction = Math.random();
	printMessage('Wylosowany ułamek to: ' + randomFraction);

	const calculation = randomFraction * 3 + 1;
	printMessage('Ułamek pomnożony przez 3 i powiększony o 1: ' + calculation);

	const roundNumber = Math.floor(calculation);
	printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);

	const computerMove = getMoveName(roundNumber);
	printMessage(
		'Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!'
	);

	const playerMove = getMoveName(playerInput);
	printMessage('Twój ruch to: ' + playerMove);

	displayResult(computerMove, playerMove);
}

// === Listenery do guzików (ID: play-*) ===
document
	.getElementById('play-rock')
	.addEventListener('click', () => playGame(1));
document
	.getElementById('play-paper')
	.addEventListener('click', () => playGame(2));
document
	.getElementById('play-scissors')
	.addEventListener('click', () => playGame(3));

// playGame(3); // zostaw zakomentowane
