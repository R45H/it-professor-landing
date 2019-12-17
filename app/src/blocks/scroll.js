var
	$blocks = $('.scroll'),
	delay = 700;

$blocks.each(function() {
	var
		$block = $(this),
		link = $block.attr('href'),
		$target = $(link);

	$block.on('click', function(e) {
		e.preventDefault();

		if (!$target.length) return;

		var
			targetPos = $target.offset().top;

		$('html, body')
			.stop(true)
			.animate({
				scrollTop: targetPos -30
			}, delay);
	});
});