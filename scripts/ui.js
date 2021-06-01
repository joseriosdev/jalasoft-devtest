class UI {
  constructor(elementId = undefined) {
    this.messageDisplayer = 
      typeof elementId === 'string' ? 
        document.getElementById(elementId) 
        : 
        elementId;
  }

  alertMessage(message, bgClassNameColor) {
    this.messageDisplayer.classList.add(bgClassNameColor);
    this.messageDisplayer.innerHTML = message;

    setTimeout(() => {
      this.messageDisplayer.classList.remove(bgClassNameColor);
      this.messageDisplayer.innerHTML = '';
    }, 4000)
  }
}