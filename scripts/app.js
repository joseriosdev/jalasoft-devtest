// visit api link documentation here
// https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/
// curl --request POST \
 /* --url 'https://api.trello.com/1/boards/?key=0471642aefef5fa1fa76530ce1ba4c85&token=9eb76d9a9d02b8dd40c2f3e5df18556c831d4d1fadbe2c45f8310e6c93b5c548&name={name}'*/

const API_KEY = "7b738a4073116f90588fff2455603834";
const TOKEN = "2dd3912586fd373d6bfb656db9ca66ec22bc42f7756b248fabaa99178be98657";

const BTN_ADD = document.getElementById("btn-add-item");
const FORM = document.getElementById("form");





FORM.addEventListener("submit", addItem);

function addItem(evt) {
	evt.preventDefault();

	const BOARD = document.getElementById("board").value;
	const LIST = document.getElementById("list").value;
	const CARD = document.getElementById("card").value;

	let apiCalls = new ApiCalls();

	apiCalls.postBoard(BOARD);
	apiCalls.getBoards()
		.then((res) => console.log(res));

	console.log(evt)
	console.log(BOARD + LIST + CARD)
	console.log(CARD)
	
}




async function getBoards(boardId = "boards") {
	const response = await fetch(`https://api.trello.com/1/members/me/boards/?key=7b738a4073116f90588fff2455603834&token=2dd3912586fd373d6bfb656db9ca66ec22bc42f7756b248fabaa99178be98657`);
	const data = await response.json();

	return data;
}

getBoards()
	.then((response) => console.log(response))
	.catch((err) => console.log(err));
