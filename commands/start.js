const { exec } = require("child_process");
const settings = require('./config.json');

exports.run = async (client, message, args) => {
	//code to run when command is sent
	exec(settings.start, (error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			message.channel.send( " Error! Please message Owner. ")
			return;
		}
		if (stdout) {
			message.channel.send( "Starting! Just a minute :) ")		
		}
		console.log(`stdout: ${stdout}`);
	});

}
