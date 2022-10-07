/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("./notesView");
const NotesModel = require("./notesModel");
const NotesApi = require("./notesApi");

jest.mock("./notesApi");

describe("page view", () => {
  it("displays two notes", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote("What is the DOM");
    model.addNote("Learn about the DOM");
    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toBe(2);
    expect(document.querySelectorAll("div.note")[0].textContent).toEqual(
      "What is the DOM"
    );
    expect(document.querySelectorAll("div.note")[1].textContent).toEqual(
      "Learn about the DOM"
    );
  });

  it("adds a new note", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);

    // 1. Fill the input
    const input = document.querySelector("#add-note-input");
    input.value = "My new amazing test note";

    // 2. Click the button
    const button = document.querySelector("#add-note-btn");
    button.click();

    // 3. The note should be on the page
    expect(document.querySelectorAll("div.note").length).toEqual(1);
    expect(document.querySelectorAll("div.note")[0].textContent).toEqual(
      "My new amazing test note"
    );
  });

  it("clear the list of previous notes before displaying", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote("one");
    model.addNote("two");

    view.displayNotes();
    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });

  //Test below is manual mocking of loadNotes

  it("displays notes from API class", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();

    const fakeApi = {
      loadNotes: (callback) => {
        callback(["Load notes", "kdnjwnfd", "wdnjwn"]);
      },
    };

    const view = new NotesView(model, fakeApi);
    view.displayNotesFromApi();

    expect(document.querySelectorAll("div.note").length).toEqual(3);
    expect(document.querySelectorAll("div.note")[0].textContent).toEqual(
      "Load notes"
    );
  });

  // test belwo uses mockImplemetation to test the displayNotesFromAPI function

  it("#displayNotesFromApi - returns notes from API class", (done) => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const jestMockedkApi = new NotesApi();
    const view = new NotesView(model, jestMockedkApi);

    jestMockedkApi.loadNotes.mockImplementation(() => {
      model.setNotes(["Fake note 1"]);
      view.displayNotes();
    });

    // this then runs the jestMockedApi's version of loadNotes():
    view.displayNotesFromApi();

    expect(jestMockedkApi.loadNotes).toHaveBeenCalledTimes(1);
    expect(document.querySelectorAll("div.note").length).toBe(1);
    expect(document.querySelector("div.note").textContent).toEqual(
      "Fake note 1"
    );

    done();
  });
});
