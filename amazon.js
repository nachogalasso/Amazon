/* Traemos los id para poder trabajar con ellos */
const modal = document.querySelectorAll('.modal');
const openModal = document.querySelectorAll('.modalBtn');
const closeModal = document.querySelectorAll('.closeBtn');
const iconMenu = document.getElementById('toggle-menu');
const mainMenu = document.getElementById('main-menu');
const mainLogo = document.getElementById('logo');

// Responsive Menu
iconMenu.addEventListener('click', () => { 
    mainMenu.classList.toggle('show');
    iconMenu.classList.toggle('toggle-responsive');
    mainLogo.classList.toggle('logo');
})


// Open Modal
for(let i=0; i < openModal.length; i++) {
    openModal[i].onclick = function()  {
        modal[i].classList.add('showed')
    }
}

// Close Modal
for(let i=0; i < closeModal.length; i++) {
    closeModal[i].onclick = function() {
        modal[i].classList.remove('showed')
    }
}

