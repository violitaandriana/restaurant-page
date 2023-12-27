// Next, set up your restaurant site to use tabbed browsing to access the Contact and Menu pages.
// Put the contents of each ‘tab’ inside of its own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.

// Write the tab-switching logic inside of index.js. You should have event listeners for each tab that wipes out the current contents and then runs the correct ‘tab module’ to populate it again.
import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';
import createFooter from './footer.js';
import loadFirst from './loadFirst.js';
import resetScreen from './reset.js';
import '../dist/styles.css';

// kalau ga ada main() yang dipanggil di dlm addEventListener, ga akan kepanggil lagi index.js
function main() {
    const content = document.getElementById('content');
    const homeButton = document.querySelector('.home-btn');
    const menuButton = document.querySelector('.menu-btn');
    const contactButton = document.querySelector('.contact-btn');
    const footer = createFooter();

    homeButton.addEventListener('click', () => {
        // alert('mainhomecss')
        resetScreen();
        const home = createHome();
        content.appendChild(home);
        content.appendChild(footer);
        main();
    });

    menuButton.addEventListener('click', () => {
        // alert('mainmenu')
        resetScreen();
        const menu = createMenu();
        content.appendChild(menu);
        content.appendChild(footer);
        main();
    });

    contactButton.addEventListener('click', () => {
        // alert('contactloop')
        resetScreen();
        const contact = createContact();
        content.appendChild(contact);
        content.appendChild(footer);
        main();
    });
}

loadFirst();
main();