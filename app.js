const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


const refs = {
  galleryContainer: document.querySelector(".js-gallery"),
  lightboxContainer: document.querySelector(".js-lightbox"),
  imgLightbox: document.querySelector("img.lightbox__image"),
  closeLightBoxContainer: document.querySelector(
    `[data-action = "close-lightbox"]`
  ),
  boxOverlay: document.querySelector("div.lightbox__overlay"),
};

let counter = 0;

const imagesListTemplate = ({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
};

const addImg = galleryItems.map(imagesListTemplate).join("");

refs.galleryContainer.insertAdjacentHTML("afterbegin", addImg);

const galleryClick = (event) => {
  event.preventDefault();

  const currentImg = event.target.dataset.source;
  const currentAlt = event.target.alt;
  

  const findImgNavPosotion = () => {
    counter = 0;
    for (let i = 0; i < galleryItems.length; i++) {
      counter += 1;
      if (currentImg.includes(galleryItems[i].original)) {
        counter -= 1;
        return counter;
      }
    }
  };
  findImgNavPosotion();

  if (event.target.nodeName === "IMG") {
    refs.lightboxContainer.classList.add("is-open");
    refs.imgLightbox.setAttribute("src", `${currentImg}`);
    refs.imgLightbox.setAttribute("alt", `${currentAlt}`);
  }
};
refs.galleryContainer.addEventListener("click", galleryClick);

const closeLightBox = (event) => {
  if (
    event.target.nodeName === "BUTTON" &&
    event.target.dataset.action === "close-lightbox"
  ) {
    closeContainer();
  }
  if (event.target.nodeName === "DIV") {
    closeContainer();
  }
};

refs.closeLightBoxContainer.addEventListener("click", closeLightBox);
refs.boxOverlay.addEventListener("click", closeLightBox);

const closeContainer = () => {
  refs.lightboxContainer.classList.remove("is-open");
  refs.imgLightbox.setAttribute("src", "");
  refs.imgLightbox.setAttribute("alt", "");
};

