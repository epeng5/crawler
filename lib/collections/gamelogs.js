Gamelogs = new Mongo.Collection('gamelogs');

Meteor.methods({
	getUrl: function(playerName) {
		url = 'http://sports.yahoo.com/nba/players?type=lastname&first=1&query='+encodeURIComponent(playerName);
		console.log(url);
		res = Meteor.http.get(url);
		console.log(res.statusCode, res.content)
		return { playerName: playerName };
	}
});