// Function to toggle sidenav and logo visibility
function toggleSidenav() {
    const sidenav = document.getElementById('sidenav');
    const logo = document.getElementById('logo');
    sidenav.classList.toggle('open');

    // Show the logo only when the sidenav is hidden
    if (sidenav.classList.contains('open')) {
        logo.style.display = 'none'; // Hide logo
    } else {
        logo.style.display = 'block'; // Show logo
    }
}

// Hide sidenav when clicking outside
document.body.addEventListener("click", (e) => {
    const sidenav = document.getElementById('sidenav');
    const toggler = document.querySelector('.navbar-toggler');

    if (!sidenav.contains(e.target) && !toggler.contains(e.target)) {
        sidenav.classList.remove('open');

        // Ensure logo reappears when sidenav is closed
        const logo = document.getElementById('logo');
        logo.style.display = 'block';
    }
});
