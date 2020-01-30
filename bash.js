let pwd = require('./pwd');
let ls = require('./ls');


process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
	const cmd = data.toString().trim();

	process.stdout.write('You typed: ' + cmd);
	process.stdout.write('\nprompt > ');
	if(cmd  === 'pwd') {
	pwd();
	process.stdout.write('\nprompt > ');
	}
	if(cmd  === 'ls') {
	ls();
	process.stdout.write('\nprompt > ');
	}

});
