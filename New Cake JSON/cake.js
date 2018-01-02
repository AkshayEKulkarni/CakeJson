var data = [{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}];

function getDropDown(){
	var i=0;
	var JsonArraylen=data.length;
	for(i=0; i<JsonArraylen; i++){
	document.getElementById("ulDropDown").innerHTML += '<option value="' + i + '">' + data[i].name + '</option>';
}

}
function getInfo(){
	var dropDownValue = document.getElementById("ulDropDown").value;
	var idSpan = document.getElementById("idSpan");
	var typeSpan = document.getElementById("typeSpan");
	var ppuSpan = document.getElementById("ppuSpan");
	var batterDiv = document.getElementById("batterDiv");
	var toppingDiv = document.getElementById("toppingDiv");

	idSpan.innerHTML = " ";
	typeSpan.innerHTML = " ";
	ppuSpan.innerHTML = " ";
	batterDiv.innerHTML = " ";
	toppingDiv.innerHTML = " ";

	/*When select option is selected start*/
	if(dropDownValue === "selectOption"){
		idSpan.style.display = "none";
	}
	else{
		idSpan.style.display = "inline";
		/*Id label and input field start*/
		var idLabel = document.createElement("label");
	    var idLabelName = document.createTextNode("Id:");
	    idLabel.setAttribute("for", "Id:");
	    idLabel.appendChild(idLabelName);
	    idSpan.appendChild(idLabel);

		var idInput = document.createElement("input");
		idInput.type = "text";
		idInput.id = "txtId"; // set the CSS class
		idSpan.appendChild(idInput); // put it into the DOM

		document.getElementById("txtId").value = data[dropDownValue].id;
		/*Id label and input field end*/

		/*Type label and input field start*/
		var typeLabel = document.createElement("label");
	    var typeLabelName = document.createTextNode("Type:");
	    typeLabel.setAttribute("for", "Type:");
	    typeLabel.appendChild(typeLabelName);
	    typeSpan.appendChild(typeLabel);

		var typeInput = document.createElement("input");
		typeInput.type = "text";
		typeInput.id = "txtType"; // set the CSS class
		typeSpan.appendChild(typeInput); // put it into the DOM

		document.getElementById("txtType").value = data[dropDownValue].type;
		/*Type label and input field end*/	

		/*PPU label and input field start*/
		var ppuLabel = document.createElement("label");
	    var ppuLabelName = document.createTextNode("PPU:");
	    ppuLabel.setAttribute("for", "PPU:");
	    ppuLabel.appendChild(ppuLabelName);
	    ppuSpan.appendChild(ppuLabel);

		var ppuInput = document.createElement("input");
		ppuInput.type = "text";
		ppuInput.id = "txtPPU"; // set the CSS class
		ppuSpan.appendChild(ppuInput); // put it into the DOM

		document.getElementById("txtPPU").value = data[dropDownValue].ppu;
		/*PPU label and input field end*/

		/*Batter label and its list start*/
		var batterLabel = document.createElement("label");
	    var batterLabelName = document.createTextNode("Batter:");
	    var i=0;
	    batterTypeLen = Object.keys(data[dropDownValue].batters.batter).length;
	    batterLabel.setAttribute("for", "Batter:");
	    batterLabel.appendChild(batterLabelName);
	    batterDiv.appendChild(batterLabel);

	    var batterUnorderedList = document.createElement("ul");
	    batterUnorderedList.setAttribute("id","batterUl");
	    for(i=0; i<batterTypeLen; i++){
	    	var batterListItem = document.createElement("li");
	            batterListItem.setAttribute("class","item");
	            batterUnorderedList.appendChild(batterListItem);
	            batterListItem.innerHTML += data[dropDownValue].batters.batter[i].type;
	            batterUnorderedList.appendChild(batterListItem);
	    }
	    batterDiv.appendChild(batterUnorderedList);
		/*Batter label and its list end*/

		/*Topping label and its list start*/
		var toppingLabel = document.createElement("label");
	    var toppingLabelName = document.createTextNode("Topping:");
	    var j=0;
	    toppingTypeLen = Object.keys(data[dropDownValue].topping).length;
	    toppingLabel.setAttribute("for", "Topping:");
	    toppingLabel.appendChild(toppingLabelName);
	    toppingDiv.appendChild(toppingLabel);

	    var toppingUnorderedList = document.createElement("ul");
	    toppingUnorderedList.setAttribute("id","toppingUl");
	    for(j=0; j<toppingTypeLen; j++){
	    	var toppingListItem = document.createElement("li");
	            toppingListItem.setAttribute("class","topping-item");
	            toppingUnorderedList.appendChild(toppingListItem);
	            toppingListItem.innerHTML += data[dropDownValue].topping[j].type;
	            toppingUnorderedList.appendChild(toppingListItem);
	    }
	    toppingDiv.appendChild(toppingUnorderedList);
		/*Topping label and its list end*/
	}
	/*When select option is selected end*/
}