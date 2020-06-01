var body, 
    header, headerMenuBtn, headerTopMenuBtn, 
    onoffModeBtn, onoffSpan, 
    section, 
    lineBox;
var menuOnOff = true;
window.addEventListener("DOMContentLoaded", function () {
  var loadHeader = document.querySelector("header");
  
  // header Load
  fetch("header.html")
  .then(function (response) {
    response.text().then(function (text) {
      loadHeader.innerHTML = text;
      commonInit();
    });
  });
});

function commonInit(){
  setTimeout(function () {
    initQuerySelector();

    headerMenuBtn.addEventListener("click", onOffHeaderMenu);
    onoffModeBtn.addEventListener("click", changeOnOffMode);

    // var linkUrl = document.location.href;
    // headerTopMenuTexts.forEach(function (topMenu) {
    //   if (linkUrl.includes(topMenu.text.toLowerCase())) {
    //     topMenu.classList.add("active");
    //   }
    // });
  }, 100);
}

function initQuerySelector() {
  body = document.querySelector("body");
  header = document.querySelector(".header");
  headerMenuBtn = header.querySelector(".header__menu");
  headerTopMenuBtn = header.querySelector(".header__topNavigation");
  headerTopMenuTexts = headerTopMenuBtn.querySelectorAll("ul li a");
  onoffModeBtn = header.querySelector(".header__mode");
  onoffSpan = onoffModeBtn.querySelector(".header__mode--light");
  lineBox = document.querySelector(".line");
  section = document.querySelector("section");
}

function onOffHeaderMenu(){
  if (menuOnOff) {
    menuOnOff = false;
    headerMenuBtn.classList.toggle("on");
    lineBox.classList.toggle("on");
    header.classList.toggle("on");
    section.classList.toggle("on");
    if (
      lineBox.className.includes("about") ||
      lineBox.className.includes("portfolio")
    ) {
      lineBox.querySelectorAll("span").forEach(function (span) {
        span.classList.toggle("off");
      });
    }

    setTimeout(function () {
      menuOnOff = true;
    }, 2000);
  }
}

function changeOnOffMode(){
  body.classList.toggle("change");
  lineBox.classList.toggle("change");

  if (header.classList.toggle("change")) {
    onoffSpan.innerText = "OFF";
  } else {
    onoffSpan.innerText = "ON";
  }

  section.classList.toggle("change");
}
