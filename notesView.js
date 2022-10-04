class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");
    console.log(this.mainContainerEl);
  }

  displayNotes() {
    const allNotes = this.model.getNotes();

    allNotes.forEach((element) => {
      const newElement = document.createElement("p");
      newElement.className = "note";
      newElement.textContent = element;
      this.mainContainerEl.append(newElement);
    });
  }
}

module.exports = NotesView;
