var main = function() {
	var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	for(var i = 0; i < channels.length; i ++) {
		$.ajax({
	 		type: 'GET',
	 		url: 'https://api.twitch.tv/kraken/channels/'+channels[i],
	 		headers: {
	   			'Client-ID': '' // cant share my own client id. you will get your's once you make your own account on twitch.tv
	 		},
	 		success: function(data) {
	   			$('body').append("<div class='col-xs-12 col-sm-6 col-md-4 col-lg-3 channel'><div class='col-xs-12' id='channelTopic'><a href='" + data.url + "'>" + data.display_name + "</a></div><div class='col-xs-12' id='channelDescription'>" + data.status + "</div></div>");
	   			console.log(data);
	 		}
		});
	}
};

$(document).ready(main);