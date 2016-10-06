/* ----- Creates Button ----- */
var $button = $("<div></div>").attr({"id":"button"});
$(".wrapper").append($button);

/* ----- Creates Clickable Link For Button ----- */
var $link = $("<a></a>").attr({"class":"button-link", "href":"#"});
$button.append($link);

/* ----- Scrolls To Top On Click ----- */
$link.click(function(event) {
	event.preventDefault();
	/* ----- Animates & Executes Scroll ----- */
	$('body,html').animate({scrollTop:0});
});

/* ----- Hides Scroll Button Until Scrolled Down ----- */
$(window).scroll(function() {
	if ($(window).scrollTop() > 300 && $('#overlay').is(':hidden')) {
		$button.show();
	} else {
		$button.hide();
	}
});

function hideToTop() {
	if ($('#overlay').is(':hidden')) {
		$button.hide();
	}
}