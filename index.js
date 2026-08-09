"use strict";

const scores = [];

const displayScores = () => scores.join("     ");

const calculateAverage = () => {
	const total = scores.reduce( (prev, curr) => prev + parseInt(curr), 0);
	return total / scores.length;
};

// load user entries in scores array
for (let i = 2; i < process.argv.length; i++) {
	scores.push(parseFloat(process.argv[i]));
}

if (scores.some(score => isNaN(scores)))
{
	console.log('Please enter valid arguments!')
}

// display all scores
console.log(`All scores: ${displayScores()}`);

// display average score
console.log(`Average score: ${calculateAverage().toFixed(0)}`);
