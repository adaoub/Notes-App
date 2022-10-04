const notesModel = require("./notesModel.js");
const notes = new notesModel();

describe("notesModel Class", () => {
  it("get notes", () => {
    const result = notes.getNotes();
    console.log(result);
    expect(result).toEqual([]);
  });

  it("add Note", () => {
    notes.addNote("Buy milk");
    notes.addNote("Go to the gym");
    const result = notes.getNotes();
    console.log(result);
    expect(result).toEqual(["Buy milk", "Go to the gym"]);
  });

  it("reset notes", () => {
    notes.reset();

    expect(notes.getNotes()).toEqual([]);
  });
});
