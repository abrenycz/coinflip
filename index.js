
const sleep = require('then-sleep');

const coinflip = () => {
	const flip = Math.random();
	if(flip > 0.5)
		return 'heads';
	else
		return 'tails';
}

module.exports = async (req, res) => {
	await sleep(5000);
	return `flipping a coin: ${coinflip()}`;
}