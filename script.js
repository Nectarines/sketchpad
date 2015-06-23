$(document).ready(function() {
	createGrid(16);

	$(".box").mouseenter(function() {
		$(this).addClass("highlighted");
	});

	$("button").click(function() {
		$(".box").remove();
		var newNum = prompt("ENTER DIMENSION");
		createGrid(newNum);

		// this function had to be added HERE; perhaps because the DOM
		// needed to be reminded that these interactions still occur AFTER
		// "click"???
		$(".box").mouseenter(function() {
			$(this).addClass("highlighted");
		});
	});

});

function createGrid(side) {
	if ($.isNumeric(side)) {
		for (var x = 0; x < side; x++) {
			for (var y = 0; y < side; y++) {
				$square = $("<div></div>");
				$($square).height(800/side);
				$($square).width(800/side);
				$($square).addClass("box");
				$("#wrapper").append($square);
			};
		};
	} else {
		var retry = prompt("A NUMBER PLEASE");
		createGrid(retry);
	}
};

