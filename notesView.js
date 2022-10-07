class NotesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
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
    console.log("Notes below are all notes");
    console.log(allNotes);

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

  displayNotesFromApi() {
    this.api.loadNotes((notesData) => {
      console.log("Notes below are from api server");
      console.log(notesData);
      this.model.setNotes(notesData);

      this.displayNotes();
    });
  }
}

module.exports = NotesView;
