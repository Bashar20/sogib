


function slideShow(video){
     document.getElementById('banner-slider').src = video ;
}




let ToggleMenu = document.querySelector('.toggle-menu');
let ChangeMenu = document.getElementById('change');
let navBar = document.getElementById('nav');
 ToggleMenu.addEventListener('click', function(){
     ChangeMenu.classList.toggle('fa-times')
     navBar.classList.toggle('show')
 
 })

