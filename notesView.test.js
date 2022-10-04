/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("./notesView");
const NotesModel = require("./notesModel");

describe("page view", () => {
  it("displays two notes", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote("What is the DOM");
    model.addNote("Learn about the DOM");
    view.displayNotes();

    expect(document.querySelectorAll("p.note").length).toBe(2);
    expect(document.querySelectorAll("p.note")[0].textContent).toEqual(
      "What is the DOM"
    );
    expect(document.querySelectorAll("p.note")[1].textContent).toEqual(
      "Learn about the DOM"
    );
  });
});
