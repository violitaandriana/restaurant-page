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

export default createHeader;