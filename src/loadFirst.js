import createHome from './home.js';
import createHeader from './header.js';
import createFooter from './footer.js';

function loadFirst() {
    // alert('HOla')
    const content = document.getElementById('content');
    const header = createHeader();
    const home = createHome();
    const footer = createFooter();

    content.appendChild(header);
    content.appendChild(home);
    content.appendChild(footer);
}

export default loadFirst;
