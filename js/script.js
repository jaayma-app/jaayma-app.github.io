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
// const typed = new Typed('.multiple-text',{
//     strings: ['Buy', 'Sell', 'Deliver', 'Share'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });

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
// Get your form and radio buttons
const form = document.forms['contact-form'];
const androidRadio = document.querySelector('input[value="android"]');
const iphoneRadio = document.querySelector('input[value="i-phone"]');

// Define the script URL for Android submissions
const androidScriptURL = 'https://script.google.com/macros/s/AKfycbwf1kA4v1PQaExB6WIN2VQ8shfORMad5qZj0hid0KhokO6KbxS7qi00nPQJm71EFKdi/exec';

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Get the current language
    const currentLang = localStorage.getItem('lang') || 'fr';
    
    // Get appropriate translation object based on current language
    let translations;
    switch(currentLang) {
        case 'bs':
            translations = bs;
            break;
        case 'en':
            translations = en;
            break;
        case 'wo':
            translations = wo;
            break;
        default:
            translations = fr;
    }
    
    // Use the translated messages
    const thankYouKey = 'thank-you-message';
    const thankYouMessage = translations[thankYouKey] || "Thank you for applying! Our customer service will reach you soon.";
    const networkKey = 'network-error';
    const networkMessage = translations[networkKey] || "Network Error";
    const appstoreKey = 'appstoreMessage'
    const appstoreMessage = translations[appstoreKey] || "Sorry, Jaayma is not yet available on Iphone. Please find an Android in order to move forward."
    
    // Only fetch the script URL if Android is selected
    fetch(androidScriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        if (!response.ok) {
            throw new Error(networkMessage);
        }
        // Check if Android is selected
        if (androidRadio.checked) {
            alert(thankYouMessage);
        } else {
            // For iPhone, just show the message 
            alert(appstoreMessage);
        }
    })
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message));
    
});
