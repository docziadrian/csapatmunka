function grafikon1() {
  var graf2 = document.getElementById("graf2");
  graf2.style.display = "none";
  var graf3 = document.getElementById("graf3");
  graf3.style.display = "none";
  var x = document.getElementById("graf1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function grafikon2() {
  var graf1 = document.getElementById("graf1");
  graf1.style.display = "none";
  var graf3 = document.getElementById("graf3");
  graf3.style.display = "none";
  var x = document.getElementById("graf2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function grafikon3() {
  var graf2 = document.getElementById("graf2");
  graf2.style.display = "none";
  var graf1 = document.getElementById("graf1");
  graf1.style.display = "none";
  var x = document.getElementById("graf3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}