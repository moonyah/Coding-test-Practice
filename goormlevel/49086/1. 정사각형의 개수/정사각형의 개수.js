// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	for await (const line of rl) {
		let result = BigInt(0);
		for(let i = BigInt(1); i <= BigInt(line); i++){
			result += i*i;
		}
		console.log(result.toString())
		rl.close();
	}
	
	process.exit();
})();
