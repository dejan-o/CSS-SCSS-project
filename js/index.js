


let checkbox = document.getElementById('navi-toggle');

let navLinks = document.querySelectorAll('.navigation__link');

navLinks.forEach((e) => {
    e.addEventListener('click', () => {
        if(checkbox.checked)
            checkbox.checked = false;
    })
});