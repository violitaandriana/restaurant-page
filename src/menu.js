// Foods & Beverages
const menuTitles =
    ['Tuna Kimbap | 참치김밥',
        'Tteokbokki | 떡볶이',
        'Jajangmyeon | 짜장면',
        'Soju | 소주',
        'Makgeolli | 막걸리',
        'Maekju | 맥주'
    ];
const menuDescriptions =
    ['made with seaweed, carrot, egg, and tuna.',
        'made with tteok, odeng, onion, and egg.',
        'made with seaweed, carrot, egg, and tuna.',
        'clear and colorless distilled alcoholic.',
        'milky, off-white, and lightly sparkling rice wine.',
        'just the usual beer but in Korean.'
    ];
const menuPrices = ['8', '8', '8', '7', '7', '7'];


function createMenu() {
    const menuMain = document.createElement('main');
    menuMain.classList.add('menu-main');

    // Foods
    const h2Food = document.createElement('h2');
    h2Food.textContent = 'Foods';
    menuMain.appendChild(h2Food);

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('container-menu');
    menuMain.appendChild(menuContainer);

    for (let i = 0; i < 3; i++) {
        const menu = document.createElement('div');
        menu.classList.add('menu');

        const menuTitle = document.createElement('h3');
        menuTitle.classList.add('menu-title');
        menuTitle.textContent = menuTitles[i];

        const menuDesc = document.createElement('p');
        menuDesc.classList.add('menu-desc');
        menuDesc.textContent = menuDescriptions[i];

        const menuPrice = document.createElement('p');
        menuPrice.classList.add('menu-price');
        menuPrice.textContent = menuPrices[i];

        menu.appendChild(menuTitle);
        menu.appendChild(menuDesc);
        menu.appendChild(menuPrice);
        menuContainer.appendChild(menu);
    }
    menuMain.appendChild(menuContainer);


    // Beverages
    const h2Bev = document.createElement('h2');
    h2Bev.textContent = 'Beverages';
    menuMain.appendChild(h2Bev);

    const menuContainer2 = document.createElement('div');
    menuContainer2.classList.add('container-menu');
    menuMain.appendChild(menuContainer2);

    for (let i = 3; i < 6; i++) {
        const menu = document.createElement('div');
        menu.classList.add('menu');

        const menuTitle = document.createElement('h3');
        menuTitle.classList.add('menu-title');
        menuTitle.textContent = menuTitles[i];

        const menuDesc = document.createElement('p');
        menuDesc.classList.add('menu-desc');
        menuDesc.textContent = menuDescriptions[i];

        const menuPrice = document.createElement('p');
        menuPrice.classList.add('menu-price');
        menuPrice.textContent = menuPrices[i];

        menu.appendChild(menuTitle);
        menu.appendChild(menuDesc);
        menu.appendChild(menuPrice);
        menuContainer2.appendChild(menu);
    }
    menuMain.appendChild(menuContainer2);

    return menuMain;
}

export default createMenu;