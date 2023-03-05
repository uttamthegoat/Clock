let clockAreaHours = document.querySelector(".hours");
let clockAreaMinutes = document.querySelector(".minutes");
let clockAreaSeconds = document.querySelector(".seconds");
let neatDisplay = (hours, minutes, seconds) => {};
let showTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  //   ---------------------------------
  let time;
  if (hours < 10 && seconds < 10 && minutes < 10) {
    hours = "0" + hours;
    minutes = "0" + minutes;
    seconds = "0" + seconds;
  } else if (hours < 10 && minutes < 10) {
    hours = "0" + hours;
    minutes = "0" + minutes;
    seconds = seconds;
  } else if (minutes < 10 && seconds < 10) {
    hours = hours;
    minutes = "0" + minutes;
    seconds = "0" + seconds;
  } else if (hours < 10 && seconds < 10) {
    hours = "0" + hours;
    minutes = minutes;
    seconds = "0" + seconds;
  } else if (hours < 10) {
    hours = "0" + hours;
    minutes = minutes;
    seconds = seconds;
  } else if (minutes < 10) {
    hours = hours;
    minutes = "0" + minutes;
    seconds = seconds;
  } else if (seconds < 10) {
    hours = hours;
    minutes = minutes;
    seconds = "0" + seconds;
  } else {
    hours = hours;
    minutes = minutes;
    seconds = seconds;
  }
  clockAreaHours.innerHTML = hours;
  clockAreaMinutes.innerHTML = minutes;
  clockAreaSeconds.innerHTML = seconds;
  console.log(time);
};

// ---------------------------------------
setInterval(() => {
  showTime();
}, 1000);

// Theme Change
let theme_btn = document.querySelector(".theme-btn");
theme_btn.addEventListener("click", function () {
  if (document.body.classList.contains("light-theme")) {
    document.body.classList.remove("light-theme");
    this.innerHTML = "Light ☀️";
  } else {
    document.body.classList.add("light-theme");
    this.innerHTML = "Dark 🌙";
  }
});
