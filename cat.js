const fs = require('fs');

function cat(file) {
	fs.readFile(file, 'utf8', (err, data) => {
		if(err) {
			throw err
		} else {
			process.stdout.write('\n')
			process.stdout.write(data)
			process.stdout.write("\nprompt > ");
		}
	})
}

module.exports = cat;
