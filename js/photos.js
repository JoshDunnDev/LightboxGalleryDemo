/* ----- Creates Images Array ----- */
var photos = [ 
	{ 
		image: 'img/T&E_Engagements-1.jpg',
		alt: 'T&E_Engagements-1'
	},
];	

/* ----- Adds All Other Images To Array ----- */
for (var i = 1; i < 20; i++) {
	photos.push({ image: 'img/T&E_Engagements-' + (i + 1) + '.jpg', alt: 'T&E_Engagements-' + (i + 1)});
}