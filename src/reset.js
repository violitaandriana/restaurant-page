import createHeader from './header.js';

function resetScreen() {
    const content = document.getElementById('content');
    content.textContent = '';
    const header = createHeader();
    content.appendChild(header); 
}

export default resetScreen;