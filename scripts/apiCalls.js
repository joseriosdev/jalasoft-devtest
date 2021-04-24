// key=7b738a4073116f90588fff2455603834&token=2dd3912586fd373d6bfb656db9ca66ec22bc42f7756b248fabaa99178be98657`

class ApiCalls {

  async postBoard(boardName) {
    const response = await fetch(`https://api.trello.com/1/boards/?key=7b738a4073116f90588fff2455603834&token=2dd3912586fd373d6bfb656db9ca66ec22bc42f7756b248fabaa99178be98657&name=${boardName}`, 
    { method: 'POST' });
  }

  async getBoards() {
    const response = await fetch(`https://api.trello.com/1/members/me/boards/?key=7b738a4073116f90588fff2455603834&token=2dd3912586fd373d6bfb656db9ca66ec22bc42f7756b248fabaa99178be98657`);
    const data = await response.json();
  
    return data;
  }
}