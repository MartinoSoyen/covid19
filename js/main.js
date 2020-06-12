var header = document.getElementById("projet");
var btns = header.getElementByClassName("btn-projet");
for (var i = 0; i < hrs.length; i++) {
	hrs[i].addEventListener("click", function {
		var current = document.getElementByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}
