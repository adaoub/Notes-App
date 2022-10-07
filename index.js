const NotesApi = require("./notesApi.js");
const notesModel = require("./notesModel.js");
const NotesView = require("./notesView.js");

console.log("The notes app is running");

const api = new NotesApi();
const notes = new notesModel();

const view = new NotesView(notes, api);

notes.addNote("Note aded manually");
view.displayNotesFromApi();

// console.log(notes.getNotes());
