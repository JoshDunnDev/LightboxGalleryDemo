/* ----- Variables For Loops ----- */
var html = '';
var content;

/* ----- Prints Data To Page ----- */
function print(html) {
	var outputDiv = document.getElementById('masonry');
	outputDiv.innerHTML = html;
}

/* ----- Generates HTML ----- */
for (var i = 0; i < photos.length; i++) {
	content = photos[i];
	html += '<li class="photos">';
	html += '<a href="' + content.image + '">';
	html += '<img src="' + content.image + '" alt="' + content.alt + '" />';
	html += '</a>';
	html += '</li>';
}

print(html);