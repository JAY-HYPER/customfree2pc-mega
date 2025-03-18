function changeImageA(filename) {
  let img = document.querySelector('.main');
  img.setAttribute("src", filename);
}
function changeImageB(filename) {
  let img = document.querySelector('.arm');
  img.setAttribute("src", filename);
}
function changeImageC(filename) {
  let img = document.querySelector('.side');
  img.setAttribute("src", filename);
}