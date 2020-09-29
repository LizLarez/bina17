

function validateForm(form) {
  var x = form[0].value;
  if (x.toLowerCase().trim() != "keira") {
    alert("Resposta errada!");
  } else {
    window.location.href = './keira.html';
  }
}

function shuffle() {
  snapfit.admix(document.getElementById("imgPuzzle") , true);
}

window.onload = shuffle

$("#form_container").submit(function(e) {
  e.preventDefault();
});