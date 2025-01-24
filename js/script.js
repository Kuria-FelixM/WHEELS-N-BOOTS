function toggleSidenav() {
    const sidenav= document.getElementById('sidenav');
    sidenav.classList.toggle('open');
}


// hide sidenav when clicking outside
document.body.addEventListener("click",(e) => {
    const sidenav = document.getElementById('sidenav');
    const toggler = document.querySelector('.navbar-toggler');


    if(!sidenav.contains(e.target) && !toggler.contains(e.target)) {
        sidenav.classList.remove('open');
    }
});