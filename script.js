const durationInput = document.querySelector("#duration-input");
const start = document.querySelector("#start-button");
const pause = document.querySelector("#pause-button");
const circle = document.querySelector("circle");
const perimeter = circle.getAttribute("r") * 2 * Math.PI;

circle.setAttribute("stroke-dasharray", perimeter);

let duration;
const timer1 = new Timer(durationInput, start, pause, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    console.log("time is completed!");
  },
});
