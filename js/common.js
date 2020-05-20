window.addEventListener('DOMContentLoaded', function(){
    var header = document.querySelector('.header');
    var headerMenuBtn = header.querySelector('.header__menu');
    var onoffModeBtn = header.querySelector('.header__mode');

    var lineBox = document.querySelector('.line');
    console.log(headerMenuBtn);

    headerMenuBtn.addEventListener('click', function(){
        headerMenuBtn.classList.toggle('on');
        lineBox.classList.toggle('on');
    });

    onoffModeBtn.addEventListener('click', function(){
        var body = document.querySelector('body');
        
        body.classList.toggle('change');
        header.classList.toggle('change');
        lineBox.classList.toggle('change');
    });


});