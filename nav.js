const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');
    /*console.log(visibility) should return false bcs that's how its set in the html*/
    if (visibility === "false"){
        primaryNav.setAttribute('data-visible', true); /*in the brackets its ('attribute', what value you set)*/  
        navToggle.setAttribute('aria-expanded', true); /*for s-r aria-expanded becomes true bcs the menu is expanded*/
    } else {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})


/*to minimise transition when resizing screen [its not really necessary]*/
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.   body.classList.remove("resize-animation-stopper");
  }, 400);
});
