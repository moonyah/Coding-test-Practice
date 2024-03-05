// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let result = BigInt(1);
	for await (const line of rl) {
		for(let i = BigInt(1); i <= line; i++){
			result *= i;
		}
		console.log((result%BigInt(1000000007)).toString());
		rl.close();
	}
	
	process.exit();
})();
