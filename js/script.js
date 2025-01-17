/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id +']').classList.add('active');
            });
        }
    } );

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading , .detail-content h2',{ origin: 'top' });
ScrollReveal().reveal('.home-img, .about-img, .services-container, .portfolio-box, .contact form, .detail-paragraph p',{ origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-content h3, .about-content a, .detail-img img',{ origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content p, .detail-content h3',{ origin: 'right' });

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text',{
    strings: ['Buy', 'Sell', 'Deliver', 'Share'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*==================== pass data between screens ====================*/
function displayData() {
    console.log('displayData function called');
    
    // Get data from localStorage
    const data = JSON.parse(localStorage.getItem('articleData'));
    console.log('Retrieved data:', data);
    
    // Check if data exists
    if (data) {
        const titleElement = document.getElementById('title');
        const descriptionElement = document.getElementById('description');
        
        console.log('Found elements:', { titleElement, descriptionElement });
        
        if (titleElement && descriptionElement) {
            
            console.log('Data set successfully');
        } else {
            console.log('Elements not found in DOM');
        }
    } else {
        console.log('No data found in localStorage');
    }
}

// Call this function when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    displayData();
});

/*==================== upload data ====================*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbwTXE1gOIYs8ieCWtTKYYtA2Dxm0eeO6wYZow-Dm5BnYNYTwmlxOHJP_YnUGZcUzplr/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)}).then(response => alert("Thank you for applying! Our customer service will reach you soon."))
    .then(() => { window.location.reload();})
    .catch(error => console.error('Error!', error.message))
})

/*==================== show more====================*/
document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Find the closest parent services-box and then find the content within it
        const servicesBox = this.closest('.services-box');
        const content = servicesBox.querySelector('.content');
        
        content.classList.toggle('expanded');
        
        if (content.classList.contains('expanded')) {
            this.textContent = 'Read Less';
        } else {
            this.textContent = 'Read More';
        }
    });
});
