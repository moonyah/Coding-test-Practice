// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		console.log(line.split('').length);
		rl.close();
	}
	
	process.exit();
})();
