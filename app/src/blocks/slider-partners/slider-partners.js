const block = 'slider-partners';

$(`.${block}`).each(function() {
	const $this = $(this),
		arrowIcon =
			`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.17 37.76">
				<polygon class="cls-1" points="0.25 0.13 0.25 0.13 9.85 19.2 0.25 37.63 0.25 37.63 9.85 19.2 0.25 0.13"/>
			</svg>`;

	$this
		.find(`.${block}__wrap`)
		.slick({
			infinite: true,
			variableWidth: true,
			prevArrow: null,
			nextArrow: `<div class="${block}__btn">${arrowIcon}</div>`,
			appendArrows: $this
		});
});