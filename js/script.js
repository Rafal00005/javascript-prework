{
	// Stałe pomocnicze w zasięgu bloku (brak wycieków do globalnego scope)
	const WIN_AGAINST = {
		kamień: 'papier',
		papier: 'nożyce',
		'nożyce': 'kamień',
	};

	// zamiana liczby/tekstu na nazwę ruchu
	const getMoveName = (arg) => {
		const a = typeof arg === 'string' ? arg.toLowerCase() : arg;
		if (a === 1 || a === '1' || a === 'kamień' || a === 'kamien') return 'kamień';
		if (a === 2 || a === '2' || a === 'papier') return 'papier';
		if (a === 3 || a === '3' || a === 'nożyce' || a === 'nozyce') return 'nożyce';
		return 'nieznany ruch';
	};

	// ocena wyniku
	const displayResult = (computerMove, playerMove) => {
		if (playerMove === 'nieznany ruch') {
			printMessage('Błędny ruch – spróbuj jeszcze raz.');
			return;
		}
		if (computerMove === playerMove) {
			printMessage('Remis!');
			return;
		}
		if (WIN_AGAINST[computerMove] === playerMove) {
			printMessage('Ty wygrywasz!');
		} else {
			printMessage('Tym razem przegrywasz :(');
		}
	};

	// === Główna funkcja: cała runda gry ===
	const playGame = (playerInput) => {
		clearMessages(); // na początku funkcji

		const randomFraction = Math.random();
		printMessage(`Wylosowany ułamek to: ${randomFraction}`);

		const calculation = randomFraction * 3 + 1;
		printMessage(`Ułamek pomnożony przez 3 i powiększony o 1: ${calculation}`);

		const roundNumber = Math.floor(calculation);
		printMessage(`Liczba po zaokrągleniu w dół to: ${roundNumber}`);

		const computerMove = getMoveName(roundNumber);
		const winningMove = WIN_AGAINST[computerMove];
		printMessage(
			`Zagrałem ${computerMove}! Jeśli Twój ruch to ${winningMove}, to wygrywasz!`
		);

		const playerMove = getMoveName(playerInput);
		printMessage(`Twój ruch to: ${playerMove}`);

		displayResult(computerMove, playerMove);
	};

	// Listenery dodajemy po załadowaniu DOM (mniejszy zakres, brak nulli)
	document.addEventListener('DOMContentLoaded', () => {
		const rockBtn = document.getElementById('play-rock');
		const paperBtn = document.getElementById('play-paper');
		const scissorsBtn = document.getElementById('play-scissors');

		if (rockBtn) rockBtn.addEventListener('click', () => playGame(1));
		if (paperBtn) paperBtn.addEventListener('click', () => playGame(2));
		if (scissorsBtn) scissorsBtn.addEventListener('click', () => playGame(3));
	});

	// playGame(3); // zostaw zakomentowane
}
