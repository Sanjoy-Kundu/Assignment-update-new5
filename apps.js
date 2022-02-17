


function expencesAdd() {
	let incomeInput = document.getElementById("income-input");
	let foodInput = document.getElementById("food-input").value;
	let rentInput = document.getElementById("rent-input").value;
	let clothInput = document.getElementById("cloth-input").value;


	let expenceAdd = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput);
	//adding total expences
	document.getElementById("total-expences").innerText = expenceAdd;
	// handeling total Balance
	document.getElementById("balace-text").innerText = parseFloat(incomeInput.value) - expenceAdd;






	//handeling error
	/* 	if (incomeInput.innerText > expenceAdd) {
			document.getElementById("total-expences").innerText = expenceAdd;
		} else if {
			alert('You have to need some money');
		} */

}


/* ===========================
Bonous Part
============================*/
document.getElementById("saving-amount").addEventListener("click", function () {
	let incomeInput = document.getElementById("income-input");
	let savingInput = document.getElementById("saving-input");

	let savingAmount = document.getElementById("saving-amount");
	let savingText = savingAmount.innerText + savingAmount;



})