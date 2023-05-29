const nav = document.getElementById('nav')
window.addEventListener('scroll', function(){
 scrollposition = window.scrollY
 
 if (scrollposition >= 60) {
    nav.classList.add('nav-dark')
 } else if (scrollposition <= 60) {
    nav.classList.remove('nav-dark')
 }
})

const scrollToTop = document.getElementById('scrollToTop');
window.addEventListener('scroll', function(){
   scrollposition = this.window.scrollY

   if(scrollposition <= 1200) {
      scrollToTop.classList.add('d-none')
   } else if (scrollposition >= 1200) {
      scrollToTop.classList.remove('d-none')
   }
})

function scrollKeatas() {
   window.scrollTo({
      top: 0,
      behavior: "smooth"
   })
}