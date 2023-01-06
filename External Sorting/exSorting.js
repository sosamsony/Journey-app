const sortAndPlanJourney = () => {
	// Get the inputted boarding passes
	const boardingPassesInput = document.getElementById('boardingPasses').value;

	// Parse the JSON string into an array of objects
	const boardingPasses = JSON.parse(boardingPassesInput);

	// Shuffle the array of boarding passes
	shuffleArray(boardingPasses);

	// Sort the array of boarding passes
	const sortedBoardingPasses = sortBoardingPasses(boardingPasses);

	// Output the description of the journey
	const outputDiv = document.getElementById('output');
	outputDiv.innerHTML = generateJourneyDescription(sortedBoardingPasses);
}

const shuffleArray = (array) => {
	// Shuffle the array using the Fisher-Yates shuffle algorithm
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

const sortBoardingPasses = (boardingPasses) => {
	// Create a copy of the array of boarding passes
	const sortedBoardingPasses = [...boardingPasses];

	// Sort the array of boarding passes by the 'from' location
	sortedBoardingPasses.sort((a, b) => a.from.localeCompare(b.from));

	return sortedBoardingPasses;
}


const generateJourneyDescription = (boardingPasses) => {
	// Initialize the journey description
	let journeyDescription = '';

	// Iterate through the array of boarding passes
	for (let i = 0; i < boardingPasses.length; i++) {
		const boardingPass = boardingPasses[i];

		// Add a description of the current leg of the journey to the journey description
		journeyDescription += `${i + 1}. Take ${boardingPass.type} ${boardingPass.number} from ${boardingPass.from} to ${boardingPass.to}.`;

		if (boardingPass.seat) {
			journeyDescription += ` Sit in seat ${boardingPass.seat}.`;
		} else {
			journeyDescription += ' No seat assignment.';
		}

		if (boardingPass.gate) {
			journeyDescription += ` Gate ${boardingPass.gate},`;
		}

		if (boardingPass.counter) {
			journeyDescription += ` Baggage drop at ticket counter ${boardingPass.counter}.`;
		} else if (i < boardingPasses.length - 1) {
			journeyDescription += ' Baggage will be automatically transferred from your last leg.';
		}

		journeyDescription += '<br>';
	}

	// Add a final message to the journey description
	journeyDescription += 'You have arrived at your final destination.';

	return journeyDescription;
}
