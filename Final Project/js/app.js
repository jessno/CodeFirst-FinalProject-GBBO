document.addEventListener('DOMContentLoaded', function(){

    
    var navlink = document.getElementsByTagName('a');
     console.log(navlink);
    
    
    navlink[0].addEventListener('mouseover', function(event){
         event.target.style.color = 'black';
    })
    
    navlink[1].addEventListener('mouseover', function(event){
        event.target.style.color = 'black';
    })

    navlink[2].addEventListener('mouseover', function(event){
        event.target.style.color = 'black';
    })

    navlink[0].addEventListener('mouseleave', function(event){
        event.target.style.color = 'white';
    })

    navlink[1].addEventListener('mouseleave', function(event){
        event.target.style.color = 'white';
    })

    navlink[2].addEventListener('mouseleave', function(event){
        event.target.style.color = 'white';
    })




});

