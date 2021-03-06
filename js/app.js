$(document).ready(function() {
	$(".ryu, .hulk-ryu").mouseenter(function() {
		$(".ryu-still, .hulk-ryu-still").hide();
		$(".ryu-ready, .hulk-ryu-ready").show();
	})
	.mouseleave(function() {
		$(".ryu-ready, .hulk-ryu-ready").hide();
		$(".ryu-still, .hulk-ryu-still").show();
	})
	.mousedown(function() {
		playHadouken();//play hadouken sound
		$(".ryu-ready, .hulk-ryu-ready").hide();
		$(".ryu-throwing, .hulk-ryu-throwing").show();
		$(".hadouken").finish().show().animate({
			left: "1020px"
		}, 500, function() {
			$(this).hide();
			$(this).css("left", "615px");
		});
		/**Here we grab the hadouken and "show" it then we "finish" the animation 
		in case someone clicks before it has finished, and last we tell it to animate
		the hadouken until its "right" value is 1020px.  "500" is how many miliseconds 
		we want this to take. Then we toss in a function to hide the hadouken and 
		set it back to its start posidion of 615px from the right.**/
		$(".hulk-hadouken").finish().show().animate({
			right: "1020px"
		}, 500, function() {
			$(this).hide();
			$(this).css("right", "615px");
		});
		
	})
	/**When mouse is released hide throwing and show ready pics**/
	.mouseup(function() {
		$(".ryu-throwing, .hulk-ryu-throwing").hide();
		$(".ryu-ready, .hulk-ryu-ready").show();
	});

	/**Listen for the X key**/
	$(document).keydown(function() {
		if (event.which == 88) {
			$(".ryu-still").hide();
			$(".ryu-ready").hide();
			$(".ryu-cool").show();
		}
		$(this).keyup(function() {
			$(".ryu-cool").hide();
			$(".ryu-still").show();
		});
	});
	
	/** HULK RYU **/

	/**Listen for the M key**/
	$(document).keydown(function() {
		if (event.which == 77) {
			$(".hulk-ryu-still").hide();
			$(".hulk-ryu-ready").hide();
			$(".hulk-ryu-cool").show();
		}
		$(this).keyup(function() {
			$(".hulk-ryu-cool").hide();
			$(".hulk-ryu-still").show();
		});
	});

});

function playHadouken () {
	$("#hadouken-sound")[0].volume=0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
}