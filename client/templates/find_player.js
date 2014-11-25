Template.findPlayer.events({
	'submit form': function(e) {
		e.preventDefault();
		var playerName = $(e.target).find('[name=name]').val();		
		
		Meteor.call('getUrl', playerName, function(error, result) {
			if (error) { return alert(error.reason); }
			console.log(result);
		});
	}
});