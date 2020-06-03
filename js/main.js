window.addEventListener('DOMContentLoaded', function(){
    init();
});


function init(){
    setTimeout(function(){
        headerMenuBtn.classList.toggle('on');

        var sectionText = section.querySelector("h3");
        if (sectionText) {
            console.log(sectionText);
            sectionText.classList.add("active");
          }
    }, 500);
}
