
window.onload = function() {
	var breakfast = document.getElementById("breakfast");

	function changeCat(newCat) {
		// for (var i = newCat.length - 1; i >= 0; i--) {
			breakfast.style.display = 'none';
		// };
	};

	document.getElementById('breakfastFilter').addEventListener("click", function() {
		changeCat('breakfast');
	});
}
