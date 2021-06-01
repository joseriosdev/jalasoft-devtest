// visit api link documentation here
// https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/

const addBtn = document.getElementById('btn-add-item');
const form = document.getElementById('form');
const modalForm = document.getElementById('modal-form');
const modalBtn = document.getElementById('search-btn');
const checkPattern = [false, true, true];

// only 2 events, one for each btn (add & search)
addPatternCheckerToInputs();
form.addEventListener('submit', addItem);
modalBtn.addEventListener('click', searchItem);

function addItem(evt) {
	evt.preventDefault();

	const board = document.getElementById('board');
	const listValue = document.getElementById('list');
	const cardValue = document.getElementById('card');
	const ui = new UI('alert-message');
	const trello = new ApiCalls();


	trello.getBoards().then(res => {
		if (res.length < 10) {
			if (!checkPattern.includes(false)) {
				trello.postBoard(board.value)
				.then((res) => {
					console.log(res);
					ui.alertMessage('Board added :D', 'bg-success');
				});
			} else {
				ui.alertMessage('Check what you wrote o.O', 'bg-info');
			}
		} else {
			ui.alertMessage('You\'ve reached the max amount of boards, delete some of them. :/', 'bg-danger');
		}	
	});
}

function searchItem(evt) {
	evt.preventDefault();
	const trello = new ApiCalls();
	const searchBar = document.getElementById('search-bar').value;

	trello.getBoards()
		.then((res) => locateBoardNames(res, searchBar))
		.catch((err) => console.log(err));
}


function locateBoardNames(boardListObj, data) {
	console.log('boards length: ' + boardListObj.length);
	console.log('response' + boardListObj);
	console.log(boardListObj);

	for (let i = 0; i < boardListObj.length; i++) {
		console.log(boardListObj[i].name);
		console.log(data);
		if (data.toLowerCase() === boardListObj[i].name.toLowerCase()) {
			let searchDisplay = document.getElementById('search-display');
			searchDisplay.innerHTML = ''; //for cleaning when creating a new search
			
			let ul = document.createElement('ul');
			ul.classList.add('text-dark');

			ul.innerHTML = `<li>Card Name: ${boardListObj[i].name}</li>`;
			console.log(ul)

			searchDisplay.appendChild(ul);
			break;
		} 				
		else if (i === boardListObj.length-1) {
			let ui = new UI('search-display');
			ui.alertMessage('Nothing to show', 'bg-danger');
		}
	}
}

function addPatternCheckerToInputs() {
	let inputs = document.querySelectorAll('input[name="board-item"]');
	
	for (let i = 0; i < inputs.length; i++) {
		const regex = /^(?! )([A-Za-z0-9 ]){1,20}$/;
		const index = i;

		inputs[i].addEventListener('blur', (evt) => {

      if (evt.target.value !== '') {
        if (regex.test(evt.target.value)) {
          inputs[i].classList.remove('is-invalid');
          checkPattern[index] = true;
        } else {
          inputs[i].classList.add('is-invalid');
          checkPattern[index] = false;
        }
      }
    })
	}
}