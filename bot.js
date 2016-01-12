console.log('Bot started');

var Twit = require('twit');
var exec = require('child_process').exec;
var fs = require('fs');

var config = require('./config');
var T = new Twit(config);

tweetIt();

function tweetIt(txt) {
	var cmd = "processing-java --sketch=D:\\Coding\\NodeJS\\TwitBot\\imageBot --run"
	exec(cmd, processing);

	function processing() {
		var filename = 'imageBot/output.png'
		var params = { 
			encoding: 'base64'
		}
		var processingOutput = fs.readFileSync(filename, params);
		T.post('media/upload', { media_data: processingOutput }, uploaded);

		function uploaded (err, data, response) {
			//here i will tweet
			var mediaIdStr = data.media_id_string;
			var tweet = {
				status: 'This image was created using @ProcessingOrg and published using NodeJS and Twit\nP.D. not a bot, but bot',
				media_ids: [mediaIdStr]
			}
			T.post('statuses/update', tweet, tweeted);
		}
		function tweeted(err, data, response) {
			if(err) {
				console.log("Didn't work :( ");
			} else {
		  		console.log("Worked /,,/,");
		  	}
		}
	}
}