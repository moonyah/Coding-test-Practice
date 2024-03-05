// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		console.log(line.split(' ').reduce((a, b)=> a/1+b/1));
		rl.close();
	}
	
	process.exit();
})();
