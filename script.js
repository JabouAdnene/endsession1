function showit(id = "") {
  document.querySelector("#modal" + id).classList.remove("d-none");
}
function hideit(id = "") {
  document.querySelector("#modal" + id).classList.add("d-none");
}
var likes = document.getElementsByClassName("like");
console.log(likes);
