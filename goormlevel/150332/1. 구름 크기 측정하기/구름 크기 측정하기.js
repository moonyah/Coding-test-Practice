// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		let arr = line.split(' ');
		console.log(arr[0]*arr[1])
		rl.close();
	}
	
	process.exit();
})();
