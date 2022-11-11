"use strict";

// ---------- Variables ----------

const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

// ---------- Functions ----------

function startTimer() {
  // We're Launching In 14 Days

  let time = 14 * 24 * 60 * 60;

  const timer = setInterval(() => {
    const numDays = Math.trunc(time / (24 * 60 * 60));
    const numHours = Math.trunc((time - numDays * 24 * 60 * 60) / (60 * 60));
    const numMinutes = Math.trunc(
      (time - numDays * 24 * 60 * 60 - numHours * 60 * 60) / 60
    );
    const numSeconds =
      time - numDays * 24 * 60 * 60 - numHours * 60 * 60 - numMinutes * 60;

    days.textContent = String(numDays).padStart(2, "0");
    hours.textContent = String(numHours).padStart(2, "0");
    minutes.textContent = String(numMinutes).padStart(2, "0");
    seconds.textContent = String(numSeconds).padStart(2, "0");

    if (time === 0) {
      clearInterval(timer);
    }

    time--;
  }, 1000);
}

startTimer();
