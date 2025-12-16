//notification of image load
const image = document.querySelector("img");
image.addEventListener("load", function (event) {
  console.log("Your image has loaded!!!!!!!", event);
});

//notifications of basic audio interaction
const audio = document.querySelector("audio");
audio.addEventListener("play", function (event) {
  console.log("Audio playing", event);
});
audio.addEventListener("pause", function (event) {
  console.log("Audio paused", event);
});
audio.addEventListener("ended", function (event) {
  console.log("Audio ended", event);
});

//notifications of basic audio interaction, plus timer that does not seem to work
const video = document.querySelector("video");
video.addEventListener("time", function (event) {
  console.log("Time event:", event); // this exmaple form the workshop does not seem to work :(
});
video.addEventListener("play", function (event) {
  console.log("Video playing", event);
});
video.addEventListener("pause", function (event) {
  console.log("Video paused", event);
});

const playButton = document.querySelector("#playbtn"); // play button
const pauseButton = document.querySelector("#pausebtn"); // pause button
const stopButton = document.querySelector("#stopbtn"); // stop button
//(pauses and returns to 0.01sec into audio)
const volumeSlider = document.querySelector("#slider"); // slider that adjusts audio volume

playButton.addEventListener("click", function (event) {
  audio.play();
});
pauseButton.addEventListener("click", function (event) {
  audio.pause();
});
stopButton.addEventListener("click", function (event) {
  audio.pause;
  audio.currentTime = 0.01;
});
volumeSlider.addEventListener("change", function (event) {
  audio.volume = event.target.value;
});
