function createContact() {
    const contactMain = document.createElement('main');
    contactMain.classList.add('contact-main');

    const h3Text = document.createElement('h3');
    h3Text.textContent = 'Contact us !';
    const pNum = document.createElement('p');
    pNum.textContent = '️☎️ 012 345 678';
    const pEmail = document.createElement('p');
    pEmail.textContent = '📩 byeolanddal@gmail.com';
    const pAddress = document.createElement('p');
    pAddress.textContent = '📍 62889 Monahan Fields, Bernierborough';

    const img = document.createElement('img');
    img.src = "https://s1.cdn.autoevolution.com/images/news/google-maps-data-confirms-the-traffic-trends-everybody-expected-151897_1.jpg";

    contactMain.appendChild(h3Text);
    contactMain.appendChild(pNum);
    contactMain.appendChild(pEmail);
    contactMain.appendChild(pAddress);
    contactMain.appendChild(img);
    return contactMain;
}

export default createContact;