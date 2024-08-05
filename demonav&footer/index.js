const navMenu =document.getElementById('nav-menu'),
      navToggle = document.getElementById('toggle-btn'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
    })
}
     
     /* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
     navMenu.classList.remove('show-menu')
    })
    }