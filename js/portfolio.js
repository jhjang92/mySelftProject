window.addEventListener("DOMContentLoaded", function () {

  var listBox = document.querySelector('.section__portfolio--list');

  listBox.addEventListener("click", onOffList);

  init();

});

function init() {
  setTimeout(function () {
    headerMenuBtn.click();
    lineBox.classList.add("portfolio");
  }, 500);
}

function onOffList(){
  
  console.log(event.target.closest("li"));
  console.log(event.currentTarget);
  var listLi = event.currentTarget.children;
  console.log(listLi);
  for(var i = 0; i < listLi.length; i++){
    console.log(listLi[i]);
    listLi[i].className = "off";
  }
  event.target.closest("li").className = "on";
}