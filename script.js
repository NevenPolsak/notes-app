let submit = document.querySelector(".submit");
let title = document.querySelector("#title");
let note = document.querySelector("#note");

let notesElem = document.querySelector(".notes");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  addNotes();
});
function addNotes(obj) {
  let titleVal = title.value;
  let noteVal = note.value;
  if (obj) {
    titleVal = obj.title;
    noteVal = obj.note;
  }
  let card = document.createElement("div");
  card.classList.add("card");
  if (titleVal) {
    card.innerHTML = `
     <h3>${titleVal}</h3>
        <p>${noteVal}</p>
        <button class="del">Delete</button> `;
    notesElem.appendChild(card);
  }
  let clear = card.querySelector(".del");
  clear.addEventListener("click", function () {
    card.remove();
  });
}
