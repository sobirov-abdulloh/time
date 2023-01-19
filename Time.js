let clock = document.getElementById("clock");
window.onload = function () {
    window.setInterval(function () {
      let now = new Date();
    clock.innerHTML = now.toLocaleTimeString();
  }, 1000);
};
