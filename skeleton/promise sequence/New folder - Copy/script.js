function Person() {
	var timer;
	var count = 0;
	
	this.start = function() {
		timer = setInterval(function() {
			console.log("count : " + count + " " + timer);
			count++;
		}, 1000);
	};
	
	this.stop = function() {
		window.clearInterval(timer);
	};
}