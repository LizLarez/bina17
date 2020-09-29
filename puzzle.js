

function validateForm(form) {
  var x = form[0].value;
  if (x.toLowerCase().trim() != "laduree" && x.toLowerCase().trim() != "ladurée") {
    alert("Resposta errada!");
  } else {
    window.location.href = './puzzle.html';
  }
}

function shuffle() {
  snapfit.admix(document.getElementById("imgPuzzle") , true);
}

window.onload = shuffle