window.addEventListener("DOMContentLoaded", function () {
  init();
});

function init() {
  setTimeout(function () {
    headerMenuBtn.click();
    lineBox.classList.add("portfolio");
  }, 500);
}
