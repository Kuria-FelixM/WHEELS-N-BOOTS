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

// Fetch countries from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(countries => {
  countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
  countries.forEach(country => {
    // Add to Country Dropdown
    const countryOption = document.createElement('option');
    countryOption.value = country.cca2;
    countryOption.textContent = `${country.flag} ${country.name.common}`;
    document.getElementById('countryInput').appendChild(countryOption);

    // Add to Phone Code Dropdown
    if (country.idd && country.idd.root && country.idd.suffixes) {
      country.idd.suffixes.forEach(suffix => {
        const phoneOption = document.createElement('option');
        phoneOption.value = country.idd.root + suffix;
        phoneOption.textContent = `${country.flag} ${country.idd.root}${suffix}`;
        document.getElementById('phoneCodeSelect').appendChild(phoneOption);
      });
    }
  });
})
.catch(error => console.error('Error fetching countries:', error));