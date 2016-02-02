

/* Changing to work with class! Go! */
window.onload = function() {

/*	document.getElementById('moreRecipes').addEventListener("click", function() {
		if ( 

		var subnavShow = document.getElementById('subnav');
		subnavShow.style.display = 'inline-block';
	});	*/
 
	function showHome() {
		var home = document.getElementById('welcome');
		home.style.display = 'block';
	};

	function hideSections() {
		var recipeGet = document.getElementsByClassName('recipe');
		for ( var i = 0; i < recipeGet.length; i++ ) {
				recipeGet[i].style.display = 'none';
			};
	};

	function hideHome() {
		var home = document.getElementById('welcome');
		home.style.display = 'none';
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

	function showMeals() {
		var mealsGet = document.getElementsByClassName('meal');
		for ( var i = 0; i < mealsGet.length; i++ ) {
				mealsGet[i].style.display = 'inline-block';
		};
	};



/*	function allRecipes () {
		var allRecipesGet = document.getElementsByClassName('recipes');
		for ( var i = 0; i < allRecipesGet.length; i++ ) {
				allRecipesGet[i].style.display = 'inline-block';
		};
	};*/


	// Menu Link //

	document.getElementById('home').addEventListener("click", function() {
		hideSections();
		showHome();
	});

	document.getElementById('breakfastFilter').addEventListener("click", function() {
		hideSections();
		hideHome();
		showBreakfast();
	});

	document.getElementById('snackFilter').addEventListener("click", function() {
		hideSections();
		hideHome();
		showSnacks();

	});

	document.getElementById('mealFilter').addEventListener("click", function() {
		hideSections();
		hideHome();
		showMeals();
	});


	document.getElementById('allRecipes').addEventListener("click", function() {
		hideHome();
		showBreakfast();
		showSnacks();
		showMeals();
		
	});

}
