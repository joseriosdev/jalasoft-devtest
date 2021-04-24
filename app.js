// visit api link documentation here
// https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/
const API_KEY = "7b738a4073116f90588fff2455603834";
const TOKEN = "2dd3912586fd373d6bfb656db9ca66ec22bc42f7756b248fabaa99178be98657";

let someBoardId = "5fb5f9ff46eef70f158bef33";

async function getBoards(boardId = "boards") {
	const response = await fetch(`https://api.trello.com/1/members/me/boards/?key=${API_KEY}&token=${TOKEN}`);
	const data = await response.json();

	return data;
}

getBoards()
	.then((response) => console.log(response))
	.catch((err) => console.log(err));
