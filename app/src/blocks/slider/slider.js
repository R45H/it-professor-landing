const
	classBlock = 'slider',
	$blocks = $(`.${classBlock}`),
	arrowIcon =
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.17 37.76">
				<polygon class="cls-1" points="0.25 0.13 0.25 0.13 9.85 19.2 0.25 37.63 0.25 37.63 9.85 19.2 0.25 0.13"/>
			</svg>`;

$blocks.each(function() {
	const
		$this = $(this),
		sliderCols = $this.attr('data-cols') === 'variable' ? 'variable' : Number($this.attr('data-cols')) || 1,
		sliderSmCols = $this.attr('data-sm-cols') === 'variable' ? 'variable' : Number($this.attr('data-sm-cols')) || sliderCols || 1,
		sliderMdCols = $this.attr('data-md-cols') === 'variable' ? 'variable' : Number($this.attr('data-md-cols')) || sliderSmCols || sliderCols || 1,
		sliderLgCols = $this.attr('data-lg-cols') === 'variable' ? 'variable' : Number($this.attr('data-lg-cols')) || sliderMdCols || sliderCols || 1,
		sliderXlCols = $this.attr('data-xl-cols') === 'variable' ? 'variable' : Number($this.attr('data-xl-cols')) || sliderLgCols || sliderCols || 1;

	const config = {
		slidesToShow: sliderCols !== 'variable' ? sliderCols : 1,
		slidesToScroll: sliderCols !== 'variable' ? sliderCols : 1,
		variableWidth: sliderCols === 'variable',
		infinite: true,
		prevArrow: null,
		nextArrow: `<div class="${classBlock}__btn">${arrowIcon}</div>`,
		appendArrows: $this,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 575,
				settings: {
					slidesToShow: sliderSmCols !== 'variable' ? sliderSmCols : 1,
					slidesToScroll: sliderSmCols !== 'variable' ? sliderSmCols : 1,
					variableWidth: sliderSmCols === 'variable',
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: sliderMdCols !== 'variable' ? sliderMdCols : 1,
					slidesToScroll: sliderMdCols !== 'variable' ? sliderMdCols : 1,
					variableWidth: sliderMdCols === 'variable',
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: sliderLgCols !== 'variable' ? sliderLgCols : 1,
					slidesToScroll: sliderLgCols !== 'variable' ? sliderLgCols : 1,
					variableWidth: sliderLgCols === 'variable',
				}
			},
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: sliderXlCols !== 'variable' ? sliderXlCols : 1,
					slidesToScroll: sliderXlCols !== 'variable' ? sliderXlCols : 1,
					variableWidth: sliderXlCols === 'variable',
				}
			}
		]
	};

	$this
		.find(`.${classBlock}__wrap`)
		.slick(config);
});