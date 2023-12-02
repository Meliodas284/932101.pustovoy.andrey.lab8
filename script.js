const inputContainer = document.querySelector(".inputs-container");
const textField = document.querySelector(".text-field");


function addElement(){
	const newBlock = document.createElement("div");
	newBlock.classList.add("input-block");
	newBlock.innerHTML = `<input class="input first-input" type="text" name="left">
					<input class="input second-input" type="text" name="right">
					<button class="inp-btn" onclick="moveUp(this)">
						<div class="up-img"></div>
					</button>
					<button class="inp-btn" onclick="moveDown(this)">
						<div class="down-img"></div>
					</button>
					<button class="inp-btn" onclick="removeBlock(this)">
						<div class="cross-img"></div>
					</button>`;
	inputContainer.appendChild(newBlock);
}

function moveUp(button){
	const box = button.parentNode;
    const index = Array.from(inputContainer.children).indexOf(box);

    if (index > 0) {
      inputContainer.insertBefore(box, inputContainer.children[index - 1]);
    }
}

function moveDown(button){
	const box = button.parentNode;
    const index = Array.from(inputContainer.children).indexOf(box);

    if (index < inputContainer.children.length - 1) {
      inputContainer.insertBefore(inputContainer.children[index + 1], box);
    }
}

function removeBlock(button){
	const box = button.parentNode;
	inputContainer.removeChild(box);
}

function saveText(){
	const inputBlocks = inputContainer.querySelectorAll(".input-block");
	var data = {};

	inputBlocks.forEach((block) =>{
		var firstText = block.querySelector(".first-input").value;
		var secondText = block.querySelector(".second-input").value;
		data[firstText] = secondText;
	});
	
	textField.innerHTML = "";
	for (var key in data){
		const p = document.createElement("p");
		p.textContent = `${key} : ${data[key]}`
		textField.appendChild(p);
	}
}