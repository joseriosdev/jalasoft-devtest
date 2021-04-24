class UI {
  constructor() {
    this.messageDisplayer = document.getElementById("alert-message");
    this.modalMessageDisplayer = document.getElementById("search-display");
  }

  alertMessage(message, bgClassNameColor) {
    this.messageDisplayer.classList.add(bgClassNameColor);
    this.messageDisplayer.innerHTML = message;

    setTimeout(() => {
      this.messageDisplayer.classList.remove(bgClassNameColor);
      this.messageDisplayer.innerHTML = "";
    }, 3000)

  }
  
  alertModalMessage(message, bgClassNameColor) {
    this.modalMessageDisplayer.classList.add(bgClassNameColor);
    this.modalMessageDisplayer.innerHTML = message;

    setTimeout(() => {
      this.modalMessageDisplayer.classList.remove(bgClassNameColor);
      this.modalMessageDisplayer.innerHTML = "";
    }, 3000)

  }
}