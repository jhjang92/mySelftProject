var sectionHeader;
window.addEventListener('DOMContentLoaded', function(){
    sectionHeader = document.querySelector(".section__header");
    init();
});


function init(){
    setTimeout(function(){
        sectionHeader.classList.add('active');
        var visualTexts = sectionHeader.querySelectorAll('.section__header--visual-text');


        setTimeout(function(){
            visualTexts.forEach(function(textBox){
                textBox.classList.add('disable');
            });
        }, 2000);
        
        // checkHeader();
    }, 500);
}

var checkHeader = function (){ 
    setTimeout(function(){
        if(headerTopMenuBtn == undefined){
            checkHeader();
        }else{
            activeTopMenu();
        }
    }, 1500);
}

function activeTopMenu(){
    headerTopMenuBtn.classList.add('on');
}
