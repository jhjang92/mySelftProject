window.addEventListener('DOMContentLoaded', function(){
    var loadHeader = document.querySelector('header');
    fetch("/html/header.html")
    .then(function(response){
        response.text().then(function(text){
            loadHeader.innerHTML = text;
        })
    })
});