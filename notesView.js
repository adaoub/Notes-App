class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");
    console.log(this.mainContainerEl);
    document.querySelector("#add-note-btn").addEventListener("click", () => {
      const newNote = document.querySelector("#add-note-input").value;
      this.addNewNote(newNote);
    });
  }

  displayNotes() {
    // 1. Remove all previous notes
    document.querySelectorAll(".note").forEach((element) => {
      element.remove();
    });

    //2. clear input value

    document.querySelector("#add-note-input").value = "";

    const allNotes = this.model.getNotes();

    allNotes.forEach((element) => {
      const newElement = document.createElement("div");
      newElement.className = "note";
      newElement.textContent = element;
      this.mainContainerEl.append(newElement);
    });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }
}

module.exports = NotesView;
