function getLocal()
{
  var notes = localStorage.getItem("noteList");

  if(notes != null)
  {
    return JSON.parse(notes);
  }
  else {
      return [];
    }
}

function setLocal(inputText, inputDate, inputImportant, inputIcon)
{
  var origNotes = getLocal();
  var newNote = {
    text:       inputText,
    date:       inputDate,
    important:  inputImportant,
    icon:       inputIcon
  };

  origNotes.push(newNote);

  var newNotes = JSON.stringify(origNotes);

  localStorage.setItem("noteList", newNotes);
}

setLocal('blabla', '2018-03-07 11:24:00, false', false, 'empire');

window.onload = function()
{
  var notes = getLocal();
  console.log(notes);

  var ulElm = document.querySelector("ul");

  for(var i = 0; i < notes.length; i++)
  {
    var liElm = document.createElement("li");
    var pElm = document.createElement("p");

    pElm.innerHTML = notes[i].text;

    liElm.appendChild(pElm);

    ulElm.appendChild(liElm);
  }
}
