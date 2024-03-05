// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		let result = line.split(' ').reduce((a, b)=> a/1+b/1);
		console.log(result.toFixed(6));
		rl.close();
	}
	
	process.exit();
})();
