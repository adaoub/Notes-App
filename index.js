const notesModel = require("./notesModel.js");
const NotesView = require("./notesView.js");

console.log("The notes app is running");

const notes = new notesModel();

notes.addNote("this is an example note");
notes.addNote("This is a second note");
notes.addNote("This is a thirs note");
const view = new NotesView(notes);

view.displayNotes();

console.log(notes.getNotes());
