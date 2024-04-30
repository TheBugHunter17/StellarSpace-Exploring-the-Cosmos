function createStars() {
  const container = document.querySelector("body");
  for (let i = 0; i < 1000; i++) {
    // Increase the number of stars to 1000
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = ".1px";
    star.style.height = ".1px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    container.appendChild(star);
  }
}
window.onload = function() {

  // Play background music
  var bgMusic = document.getElementById("bgMusic");

  // Pause/Play music button
  var musicButton = document.getElementById("musicButton");
  musicButton.addEventListener("click", function() {
      if (bgMusic.paused) {
          bgMusic.play();
          musicButton.innerHTML = "<i style='font-size:24px' class='fas'>&#xf028;</i>"; // Play icon
      } else {
          bgMusic.pause();
          musicButton.innerHTML = "<i style='font-size:24px' class='fas'>&#xf6a9;</i>"; // Pause icon
      }
  });
}

createStars();
