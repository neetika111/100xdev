function todoComponent(todo) {
	const div = document.createElement("div");
	const h1 = document.createElement("h1");
	const button = document.createElement("button");
	button.innerHTML = "Delete";
	h1.innerHTML = todo.title;
	div.appendChild(h1);
	div.appendChild(button);
}