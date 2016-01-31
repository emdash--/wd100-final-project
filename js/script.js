

/* Changing to work with class! Go! */
window.onload = function() {

	function hideSections() {
		var recipeGet = document.getElementsByClassName('recipe');
		for ( var i = 0; i < recipeGet.length; i++ ) {
				recipeGet[i].style.display = 'none';
			};
	};

	function showBreakfast() {
		var breakfastGet = document.getElementsByClassName('breakfast');
		for ( var i = 0; i < breakfastGet.length; i++ ) {
				breakfastGet[i].style.display = 'inline-block';
			};
	};

	function showSnacks() {
		var snacksGet = document.getElementsByClassName('snack');
		for ( var i = 0; i < snacksGet.length; i++ ) {
				snacksGet[i].style.display = 'inline-block';
		};
	};

	// Menu Link //
	var breakfastFilter = document.getElementById("breakfastFilter");

	document.getElementById('breakfastFilter').addEventListener("click", function() {
		hideSections();
		showBreakfast();
/*		var breakfastGet = document.getElementsByClassName('breakfast')[0];
		breakfastGet.style.display = 'inline-block';*/
	});

	document.getElementById('snackFilter').addEventListener("click", function() {
		hideSections();
		showSnacks();
/*		var snackGet = document.getElementsByClassName('snack')[0];
		snackGet.style.display = 'inline-block';*/
	});

}
