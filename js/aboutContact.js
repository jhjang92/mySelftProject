var sectionHeader,
  sectionContent,
  aboutInitCheck = true,
  wheelChangeChk = false,
  wheelIfElseChk = true;
window.addEventListener("DOMContentLoaded", function () {
  // 초기선언
  sectionHeader = document.querySelector(".section__header");
  sectionContentHTag = sectionHeader.querySelector("h2");
  sectionContent = document.querySelector(".section__content");
  sectionContact = document.querySelector(".section__contact");
  sectionContactTabMenus = sectionContact.querySelectorAll(
    ".section__contact--tabMenu button"
  );

  // 실행구문
  console.log(wheelIfElseChk);
  init();
  // 초기 이벤트 등록
  window.addEventListener("wheel", wheelUpDown);

  sectionContactTabMenus.forEach(function (menus) {
    menus.addEventListener("click", changeTabMenu);
  });
});

function init() {
  if (aboutInitCheck) {
    aboutInitCheck = false;

    setTimeout(function () {
      headerMenuBtn.click();
      lineBox.classList.add("aboutContact");
    }, 500);

    // Menu 에서 Contact or ABOUT 선택 시

    location.href.split("?").reverse()[0] == "contact"
      ? changeAboutContact("CONTACT", "init")
      : setTimeout(function () {
          sectionContent.classList.add("active");
        }, 2100);
  }

  setTimeout(function () {
    wheelChangeChk = true;
  }, 4000);
}

function wheelUpDown() {
  // wheel 이벤트 딜레이
  if (wheelChangeChk) {
    wheelChangeChk = false;

    // wheel 이벤트 Up & down Check
    if (event.deltaY >= 0) {
      // CONTACT 화면 띄우기
      if (wheelIfElseChk) {
        changeAboutContact("CONTACT", "");
      }
    }
    // ABOUT 화면 띄우기
    else {
      if (!wheelIfElseChk) {
        changeAboutContact("ABOUT", "");
      }
    }
    setTimeout(function () {
      wheelChangeChk = true;
    }, 2300);
  }
}

function changeAboutContact(targetName, contactInit) {
  targetName == "CONTACT" ? (wheelIfElseChk = false) : (wheelIfElseChk = true);

  sectionContent.classList.toggle("topMove");
  sectionContact.classList.toggle("topMove");
  sectionContentHTag.classList.toggle("topMove");

  // ABOUT & CONTACT 메뉴 선택으로 들어올 시
  contactInit == "init"
    ? (contactInit = "")
    : sectionContent.classList.toggle("active");

  setTimeout(function () {
    sectionContentHTag.innerText == "ABOUT"
      ? (sectionContentHTag.innerText = "CONTACT")
      : (sectionContentHTag.innerText = "ABOUT");
    sectionContentHTag.classList.toggle("topMove");
  }, 500);
}

function changeTabMenu() {
  var activeTarget = sectionContact.querySelector(".active");
  var formContent = sectionContact.querySelector(".section__contact--form");
  var commentContent = sectionContact.querySelector(
    ".section__contact--comment"
  );
  var target = event.currentTarget;
  if (!target.className.includes("active")) {
    target.classList.add("active");
    activeTarget.classList.remove("active");
    formContent.classList.toggle("off");
    commentContent.classList.toggle("on");
  } else {
  }
}
