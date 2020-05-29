var sectionHeader, sectionContent,
aboutInitCheck = true, wheelChangeChk = false, wheelIfElseChk = true;
window.addEventListener('DOMContentLoaded', function(){
    sectionHeader = document.querySelector(".section__header");
    sectionContentHTag = sectionHeader.querySelector("h2");
    sectionContent = document.querySelector(".section__content");
    sectionContact = document.querySelector(".section__contact");
    sectionContactTabMenus = sectionContact.querySelectorAll(".section__contact--tabMenu button");
    
    init();

    window.addEventListener('wheel', wheelUpDown);

    sectionContactTabMenus.forEach(function(menus){
        menus.addEventListener('click', changeTabMenu);
    });
});


function init(){
    
    if(aboutInitCheck){
        aboutInitCheck = false;

        setTimeout(function(){
            console.log(headerMenuBtn);
            headerMenuBtn.click();
            lineBox.classList.add('about');
            sectionContactQuick.classList.add('on');
            setTimeout(function(){
                sectionContent.classList.add('active');
            }, 1500);
    
        }, 500);
    }
    
    setTimeout(function(){
        wheelChangeChk = true;
    }, 4000); 
}

function wheelUpDown(){
    if(wheelChangeChk){
        wheelChangeChk = false;

        console.log(event.deltaY);
        if(event.deltaY >= 0){
            if(wheelIfElseChk){
                wheelIfElseChk = false;
                sectionContent.classList.add('topMove');
                sectionContact.classList.add('topMove');
                sectionContentHTag.classList.add('topMove');
                sectionContent.classList.remove('active');
                sectionContactQuick.classList.remove('on');
            
                setTimeout(function(){
                    sectionContentHTag.innerText == "ABOUT" ? sectionContentHTag.innerText = "CONTACT" : sectionContentHTag.innerText = "ABOUT";
                    sectionContentHTag.classList.remove('topMove');
                    
                },500);
            }

        }else{
            if(!wheelIfElseChk){
                wheelIfElseChk = true;
                sectionContent.classList.remove('topMove');
                sectionContact.classList.remove('topMove');
                sectionContentHTag.classList.add('topMove');
                sectionContent.classList.add('active');
                sectionContactQuick.classList.add('on');
        
                setTimeout(function(){
                    sectionContentHTag.innerText == "ABOUT" ? sectionContentHTag.innerText = "CONTACT" : sectionContentHTag.innerText = "ABOUT";
                    sectionContentHTag.classList.remove('topMove');
                    
                },500);
            }
        }
        setTimeout(function(){
            wheelChangeChk = true;
        }, 2300);
    }

}

function changeTabMenu(){
    var activeTarget = sectionContact.querySelector(".active");
    var formContent = sectionContact.querySelector(".section__contact--form");
    var commentContent = sectionContact.querySelector(".section__contact--comment");
    var target = event.currentTarget;
    if(!target.className.includes('active')){
        target.classList.add('active');
        activeTarget.classList.remove('active');
        formContent.classList.toggle('off');
        commentContent.classList.toggle('on');
    }else{
    }

}