function regexChecker() {
  let FirstName = document.getElementById("firstName").value;

  let LastName = document.getElementById("lastName").value;

  let regex = /^[A-Z][a-z]+$/;

  if (FirstName.match(regex) && LastName.match(regex)) {
    alert("Yay! Your inputs were all correct!");
  } else {
    alert("Oh no! Thats an invalid format!");
  }
}
