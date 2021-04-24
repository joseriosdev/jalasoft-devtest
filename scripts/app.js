// visit api link documentation here
// https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/

const BTN_ADD = document.getElementById("btn-add-item");
const FORM = document.getElementById("form");
const MODAL_FORM = document.getElementById("modal-form");
const MODAL_BTN = document.getElementById("search-btn");

// only 2 events, one for each btn (add & search)
FORM.addEventListener("submit", addItem);
MODAL_BTN.addEventListener("click", searchItem);

function addItem(evt) {
	evt.preventDefault();

	const BOARD = document.getElementById("board").value;
	const LIST = document.getElementById("list").value;
	const CARD = document.getElementById("card").value;

	let apiCalls = new ApiCalls();
	let ui = new UI();

	apiCalls.postBoard(BOARD)
		.then((res) => {
			console.log(res);
			ui.alertMessage("Item added", "bg-success");
		});

	apiCalls.getBoards()
		.then((res) => console.log(res));
	
}

function searchItem(evt) {
	evt.preventDefault();
	console.log("entre en el evento");
	const SEARCH_BAR = document.getElementById("search-bar").value;

	let apiCalls = new ApiCalls();

	apiCalls.getBoards()
		.then((res) => locateBoardNames(res, SEARCH_BAR))
		.catch((err) => console.log(err));
}


function locateBoardNames(boardListObj, data) {
	for (let i=0; i<boardListObj.length; i++) {
		console.log("entre en el for");
		if (data === boardListObj[i].name) {
			let searchDisplay = document.getElementById("search-display");
			searchDisplay.innerHTML = ""; //for cleaning when creating a new search
			
			let ul = document.createElement("ul");

			ul.innerHTML = `<li>${boardListObj[i].name}</li>`;

			searchDisplay.appendChild(ul);
		} 				
		else if (i == boardListObj.length-1) {
			let ui = new UI();
			ui.alertModalMessage("Nothing to show", "bg-warning");
		}
	}
}