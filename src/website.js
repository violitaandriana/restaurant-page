// import home, menu, contact
import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const title = document.createElement('span');
    title.classList.add('title');
    title.textContent = 'Byeol & Dal';

    const navbar = document.createElement('div');
    navbar.classList.add('navbar');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('home-btn');
    homeBtn.textContent = 'Home';
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu-btn');
    menuBtn.textContent = 'Menu';
    const contactBtn = document.createElement('button');
    contactBtn.classList.add('contact-btn');
    contactBtn.textContent = 'Contact';

    navbar.appendChild(homeBtn);
    navbar.appendChild(menuBtn);
    navbar.appendChild(contactBtn);

    header.appendChild(title);
    header.appendChild(navbar);

    return header;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.textContent = 'EST. 2023';
    return footer;
}

// home,menu,contact belum
function initializeWebsite() {
    const content = document.getElementById('content');
    const header = createHeader();
    // const home = createHome();
    // const menu = createMenu();
    const contact = createContact();
    const footer = createFooter();

    content.appendChild(header);
    // content.appendChild(home);
    // content.appendChild(menu);
    content.appendChild(contact);
    content.appendChild(footer);
}

export default initializeWebsite;