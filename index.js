const notesModel = require("./notesModel.js");

console.log("The notes app is running");

const notes = new notesModel();

notes.addNote("Helllloo");
console.log(notes.getNotes());
