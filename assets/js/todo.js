var spans = document.getElementsByTagName("span");
var input = document.getElementById("entry");
var list = document.getElementById("list");

// check off todo by clicking
list.addEventListener("click", function(event) {
	// remove todo by clicking x

	if (event.target.tagName.toLowerCase() === "i") {
		event.stopPropagation();
		event.target.parentElement.parentElement.remove();
	}
	
	if (event.target.tagName.toLowerCase() === "span") {
		event.stopPropagation();
		event.target.parentElement.remove();
	}

	// check off todo by clicking
	else if (event.target.tagName.toLowerCase() === "li") {
		event.stopPropagation();
		event.target.classList.toggle("completed");
	}
});

// add new todo when "enter" is pressed
input.addEventListener("keypress", function(event) {
	if (event.which === 13) {
		var todoText = this.value;
		console.log(todoText);
		var ul = document.getElementById("list");
		var newItem = document.createElement("li");
		newItem.innerHTML = "<span><i class='fa fa-trash'></i></span>" + todoText;
		ul.appendChild(newItem);
		this.value = "";
	}
});