const navMenu =document.getElementById('nav-menu'),
      navToggle = document.getElementById('toggle-btn'),
      navClose = document.getElementById('nav-close'),
      Search_area = document.getElementById('Search-area')

if(navToggle){
    navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
    Search_area.classList.add('show-form')
    })
}
     
/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
     navMenu.classList.remove('show-menu')
     Search_area.classList.remove('show-form')
    })
    }