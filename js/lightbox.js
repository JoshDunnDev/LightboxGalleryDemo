var $overlay = $('<div id="overlay"></div>');
var $imageBox = $('<div id="image-box"></div>');
var $image = $('<img>');
var $prevButton = $('<a id="prev-arrow"></a>');
var $nextButton = $('<a id="next-arrow"></a>');
var $lastImage;
var $lightboxImage;
var $firstImage;


/* ----- Adds HTML To Page ----- */

$overlay.append($imageBox);
$overlay.append($prevButton);
$overlay.append($nextButton);
$imageBox.append($image);
$(".content-wrapper").append($overlay)

/* ----- Capture Click of Mouse ----- */

$("#masonry li a").click(function(event){
  event.preventDefault();
  var $imageLink = $(this);
  var $imageLocation = $(this).attr("href");
  
  	/* ----- Updates Overlay With Image Linked In Anchor Tag ----- */

    $image.attr("src", $imageLocation);
  
  	/* ----- Shows Overlay & Hides Extra Buttons ----- */
  	$button.hide();
  	hideNextPrevButtons();
    $overlay.show();


    /* ----- Shows Next Image If Right Arrow Clicked ----- */

	$("#next-arrow").click(function(){

		/* ----- Finds Next Image ----- */

		$imageLink = $imageLink.parent().next().find("a")
		$imageLocation = $imageLink.attr("href");

		/* ----- Updates Overlay With Image Linked In Anchor Tag ----- */

		$image.attr("src", $imageLocation);
		hideNextPrevButtons();

	});

	$("#prev-arrow").click(function(){

	/* ----- Finds Next Image ----- */

	$imageLink = $imageLink.parent().prev().find("a")
	$imageLocation = $imageLink.attr("href");

		/* ----- Updates Overlay With Image Linked In Anchor Tag ----- */

		$image.attr("src", $imageLocation);
		hideNextPrevButtons();
	});

});

/* ----- Hides Next/Previous Buttons At Start/End Of Gallery ----- */

function hideNextPrevButtons() {
	$lightboxImage = $('#image-box').find('img').attr('src');
	$lastImage = $('.photos a').last().find("img").attr("src");
	$firstImage = $('.photos a').first().find("img").attr("src");
    
    if ($lightboxImage === $lastImage) {
		$("#next-arrow").hide();
	} else {
		if ($lightboxImage === $firstImage) {
			$("#prev-arrow").hide();
		} else {
			$("#next-arrow").show();
			$("#prev-arrow").show();
		}
	}
}

/* ----- Hides Overlay When Clicked ----- */

$overlay.click(function(){
	$overlay.hide();

	/* ----- Shows To Top Button When Overlay Hide If Scroll > 300 ----- */
	if ($(window).scrollTop() > 300) {
		$button.show();
	} else {
		$button.hide();
	}
});

/* ----- Does Not Hide Overlay If Next/Previous Button Are Clicked ----- */

$('#next-arrow').click(function(event) {
	event.stopPropagation();
});

$('#prev-arrow').click(function(event) {
	event.stopPropagation();
});

