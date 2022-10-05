const notesModel = require("./notesModel.js");
const NotesView = require("./notesView.js");

console.log("The notes app is running");

const notes = new notesModel();

const view = new NotesView(notes);

// view.displayNotes();

console.log(notes.getNotes());
