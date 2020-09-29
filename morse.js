function validateForm(form) {
  var x = form[0].value;
  if (x.toLowerCase().trim() != "life of art") {
    alert("Resposta errada!");
  } else {
    window.location.href = './lifeofart.html';
  }
}

$("#form_container").submit(function(e) {
  e.preventDefault();
});