// My api key and token:  key=7b738a4073116f90588fff2455603834&token=2dd3912586fd373d6bfb656db9ca66ec22bc42f7756b248fabaa99178be98657

// Keep in mind that Trello will only allow 20 items stored for free

class ApiCalls {

  async postBoard(boardName) {
    await fetch(`https://api.trello.com/1/boards/?key=7b738a4073116f90588fff2455603834&token=2dd3912586fd373d6bfb656db9ca66ec22bc42f7756b248fabaa99178be98657&name=${boardName}`, 
    { method: 'POST' });
  }

  async postList(listName, boardID) {

    if (listName !== "") {
      await fetch(`https://api.trello.com/1/lists?key=7b738a4073116f90588fff2455603834&token=2dd3912586fd373d6bfb656db9ca66ec22bc42f7756b248fabaa99178be98657&name=${listName}idBoard=${boardID}`, 
      { method: 'POST' });
    }
  }

  async postCard(cardName, listID) {
    if (cardName !== "") {
      await fetch(`https://api.trello.com/1/cards?key=7b738a4073116f90588fff2455603834&token=2dd3912586fd373d6bfb656db9ca66ec22bc42f7756b248fabaa99178be98657&idList=${listID}`, 
      { method: 'POST' });
    }
  }

  async getBoards() {
    const response = await fetch(`https://api.trello.com/1/members/me/boards/?key=7b738a4073116f90588fff2455603834&token=2dd3912586fd373d6bfb656db9ca66ec22bc42f7756b248fabaa99178be98657`);
    const data = await response.json();

    return data;
  }
}