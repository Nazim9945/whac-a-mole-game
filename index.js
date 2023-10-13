const score = document.querySelector("#score");
const container = document.querySelector(".container");
const time = document.querySelector(".time");
const input = document.querySelectorAll("input");

let timeid = null;
let timeleftid = null;
let count = 0;
const timer = 60;
let timelimit = timer;
let positiondivRandom;
time.textContent = timelimit;
for (let i = 0; i < 9; i++) {
  const div = document.createElement("div");
  div.setAttribute("id", i);
  div.setAttribute("class", "box");
  container.append(div);
  div.style.height = "20vh";
  div.style.width = "20vw";
  div.style.border = "solid 1px black";
  div.addEventListener("click", hitting);
}
const containerdiv = document.querySelectorAll(".box");

function createboard() {
  containerdiv.forEach((div) => {
    div.classList.contains("mole") ? div.classList.remove("mole") : null;
  });
  positiondivRandom = containerdiv[Math.floor(Math.random() * 9)];

  positiondivRandom.classList.add("mole");
}
function callingboard() {
  timeid = setInterval(createboard, 500);
  timeleftid = setInterval(reducingtime, 1000);
}

function reducingtime() {
  timelimit--;
  time.textContent = timelimit;
  if (timelimit == 0) {
    clearInterval(timeleftid);
    clearInterval(timeid);
    containerdiv.forEach((div) => div.removeEventListener("click", hitting));
    ///msg for end game
    setTimeout(
      () => (time.textContent = "Time is over click start btn to restart!!"),
      1000
    );
  }
}
function checkid() {
  if (newdivid[0] == newdivid[1]) {
    newdivid = [];
  }
}
function hitting(e) {
  const newdiv = e.target;

  if (newdiv.classList.contains("mole")) {
    count++;
    score.textContent = count;
  }
}
//for start btn
function timecalling(e) {
  clearInterval(timeleftid);
  clearInterval(timeid);
  if (timelimit >= 0) {
    time.textContent = timer;
    timelimit = timer;
    score.textContent = 0;
    count = 0;
    containerdiv.forEach((div) => div.addEventListener("click", hitting));
    callingboard();
  }
}
input[0].addEventListener("click", timecalling);

input[1].addEventListener("click", (e) => {
  clearInterval(timeleftid);
  clearInterval(timeid);
  containerdiv.forEach((div) => div.removeEventListener("click", hitting));
});
