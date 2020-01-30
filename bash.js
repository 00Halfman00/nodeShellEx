let pwd = require('./pwd');
let ls = require('./ls');
let cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
	//const cmd = data.toString().trim();
	data = data.toString().trim().split(' ');
	const  cmd = data[0]
	const  file = data[1]
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
	if(cmd === 'cat') {
              cat(file);
              process.stdout.write('\nprompt > ');
      }

});
