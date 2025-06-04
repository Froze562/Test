const dropdowns = document.querySelectorAll('.dropdown');

// Close dropdowns on outside click
document.addEventListener('click', () => {
    dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
});

// Add click event to each dropdown toggler
dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggler');

    toggle.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        // Close all other dropdowns
        dropdowns.forEach(d => {
            if (d !== dropdown) d.classList.remove('active');
        });

        // Toggle current dropdown
        dropdown.classList.toggle('active');
    });
});

const sidebarToggler = document.querySelector('.sidebar-toggler');
const navList = document.querySelector('.nav-list');
let isnBoxActive = false;

sidebarToggler.addEventListener('click', function (e) {
    e.stopPropagation(); // Stop click from reaching document
    isnBoxActive = !isnBoxActive;
    navList.classList.toggle('active', isnBoxActive);
    sidebarToggler.classList.toggle('active', isnBoxActive);
});

navList.addEventListener('click', function (e) {
    e.stopPropagation(); // Click inside navList shouldn't close it
});

document.addEventListener('click', function () {
    if (isnBoxActive) {
      navList.classList.remove('active');
      sidebarToggler.classList.remove('active');
      isnBoxActive = false;
    }
});