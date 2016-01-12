console.log('Bot started');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var stream = T.stream('user');
stream.on('follow', followed);

function followed (eventMsg) {
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetIt('.@' + screenName + ' thank you for follow us! :D');
}
//tweetIt();
//setInterval(tweetIt, 1000*20)

function tweetIt(txt) {
	var tweet = {
		status: txt
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if(err) {
			console.log("Didn't work :( ");
		} else {
	  		console.log("Worked /,,/,");
	  	}
	}
}
