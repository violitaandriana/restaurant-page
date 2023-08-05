function createHome() {
  const homeMain = document.createElement('main');
  homeMain.classList.add('home-main');

  const homeImg = document.createElement('img');
  homeImg.classList.add('home-img');
  homeImg.src = "https://cdn.vox-cdn.com/thumbor/IuYgtyYrIbQom7Ld2qrW-5iN6hs=/0x0:4079x2791/1200x800/filters:focal(1714x1070:2366x1722)/cdn.vox-cdn.com/uploads/chorus_image/image/70852583/interior_christianholder.0.jpg";

  const homeText = document.createElement('div');
  homeText.classList.add('home-text');
  const h1Home = document.createElement('h1');
  h1Home.textContent = 'Welcome to Byeol & Dal';
  const pHome = document.createElement('p');
  pHome.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos amet autem magni ex deserunt necessitatibus nesciunt tempore at optio nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga impedit corrupti. Eligendi eaque commodi odio? Obcaecati eaque placeat qui sed deserunt! Aspernatur tempore quos facilis ut inventore sunt adipisci';

  homeText.appendChild(h1Home);
  homeText.appendChild(pHome);
  homeMain.appendChild(homeImg);
  homeMain.appendChild(homeText);

  return homeMain;
}

export default createHome;