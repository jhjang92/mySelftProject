var header, headerMenuBtn, headerTopMenuBtn, onoffModeBtn, onoffSpan,
    section, lineBox,
    sectionContactQuick, sectionText;

window.addEventListener('DOMContentLoaded', function(){
    var loadHeader = document.querySelector('header');
    fetch("/html/header.html")
    .then(function(response){
        response.text().then(function(text){
            loadHeader.innerHTML = text;

            setTimeout(function(){
                initQuerySelector();
                var menuOnOff = true;
                console.log(sectionText);
                if(sectionText){
                    sectionText.classList.add('active');
                }
                headerMenuBtn.addEventListener('click', function(){
                    if(menuOnOff){
                        menuOnOff = false;
                        headerMenuBtn.classList.toggle('on');
                        lineBox.classList.toggle('on');
                        header.classList.toggle('on');
                        section.classList.toggle('on');

                        if(lineBox.className.includes("about")){
                            lineBox.querySelectorAll('span').forEach(function(span){
                                    span.classList.toggle('off');
                            });

                            sectionContactQuick.classList.toggle('on');
                        }
                        
                        setTimeout(function(){menuOnOff = true}, 2000);
                    }
                });

                onoffModeBtn.addEventListener('click', function(){
                    var body = document.querySelector('body');
                    
                    body.classList.toggle('change');
                    lineBox.classList.toggle('change');

                    if(header.classList.toggle('change')){
                        onoffSpan.innerText = "OFF";
                    }else{
                        onoffSpan.innerText = "ON";
                    }

                    section.classList.toggle('change');
                });
                
                var linkUrl = document.location.href;
                
                headerTopMenuTexts.forEach(function(topMenu){
                    if(linkUrl.includes(topMenu.text.toLowerCase())){
                        topMenu.classList.add('active');
                    }
                })

            }, 100);
        })
    })
});

                
function initQuerySelector(){
    header = document.querySelector('.header');
    headerMenuBtn = header.querySelector('.header__menu');
    headerTopMenuBtn = header.querySelector('.header__topNavigation');
    headerTopMenuTexts = headerTopMenuBtn.querySelectorAll('ul li a');
    onoffModeBtn = header.querySelector('.header__mode');
    onoffSpan = onoffModeBtn.querySelector('.header__mode--light');
    section = document.querySelector('section');
    lineBox = document.querySelector('.line');

    console.log(location.href.includes("about"));
    sectionText = section.querySelector('h3');
    if(document.querySelector(".section__contact-quick")){
        sectionContactQuick = document.querySelector(".section__contact-quick");
    }
}