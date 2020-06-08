window.addEventListener("DOMContentLoaded", function () {
  var checkListOnOff = true, prevTarget;
  var listBox = document.querySelector('.section__portfolio--list');
  var closeBtn = document.querySelector('.close_btn');
  listBox.addEventListener("click", onList);

  init();

   closeBtn.addEventListener("click", offList);

  function onList(){
    if(checkListOnOff){
      checkListOnOff = false;
      var target = event.target;

      listBox.classList.add('active');
      prevTarget = target.closest('li');
      prevTarget.classList.add('on');
     
      closeBtn.classList.toggle('on');
    }
    
  }

  function offList(){
    checkListOnOff = true;
    listBox.classList.remove('active');
    prevTarget.classList.remove('on');
    closeBtn.classList.remove('on');
  }
  
  function closeList(){
    var listLi = document.querySelectorAll('.section__portfolio--list li');
    for(var i = 0; i < listLi.length; i++){
      console.log(listLi[i]);
      listLi[i].className = "";
    }
    closeBtn.classList.remove('on');
  }

});

function init() {
  setTimeout(function () {
    headerMenuBtn.click();
    lineBox.classList.add("portfolio");
  }, 500);


}