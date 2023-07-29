console.log("Document linked successfully");

const intro = $(".intro");
const enter = $(".enter-header");
var enterSpan = $(".enter");
enterSpan = [...enterSpan];

$(document).ready(function() {

	setTimeout(( ) => {

		enterSpan.forEach((span, idx) => {
			setTimeout(( ) => {
				span.classList.add("active");
			}, (idx + 1) * 400)
		});

		setTimeout(( ) => {
			enterSpan.forEach((span, idx) => {
				setTimeout(( ) => {
					span.classList.remove("active");
					span.classList.add("fade");
				}, (idx + 1) * 50);
			})

		}, 2000);

		setTimeout(( ) => {
		    intro.css("height", "0vh");
		}, 2300)
	})
})