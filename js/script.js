function toggleSidenav() {
    const sidenav = document.getElementById('sidenav');
    sidenav.classList.toggle('open');

    // Check if the sidenav is open
    if (sidenav.classList.contains('open')) {
        // Add the logo dynamically to the sidenav
        if (!document.getElementById('sidenav-logo')) {
            const logo = document.createElement('div');
            logo.id = 'sidenav-logo';
            logo.innerHTML = '<img src="../img/logo.png" alt="Logo" style="width: 100%; max-width: 150px; margin: 10px auto; display: block;">';
            sidenav.prepend(logo); // Add the logo at the top of the sidenav
        }
    } else {
        // Remove the logo when the sidenav is closed
        const logo = document.getElementById('sidenav-logo');
        if (logo) {
            logo.remove();
        }
    }
}

// Hide sidenav when clicking outside
document.body.addEventListener("click", (e) => {
    const sidenav = document.getElementById('sidenav');
    const toggler = document.querySelector('.navbar-toggler');

    if (!sidenav.contains(e.target) && !toggler.contains(e.target)) {
        sidenav.classList.remove('open');
        // Remove the logo when the sidenav is closed
        const logo = document.getElementById('sidenav-logo');
        if (logo) {
            logo.remove();
        }
    }
});
