const burgerBtn = document.getElementById("burger");
const asideEl = document.getElementById("aside");
let isAsideOpen = false;

export const openAside = () => {
  asideEl.style.width = "40%";
  burgerBtn.innerHTML = `<i class="ri-menu-unfold-3-line"></i>`;
  isAsideOpen = true;
};

export const closeAside = () => {
  asideEl.style.width = "0%";
  burgerBtn.innerHTML = `<i class="ri-menu-fold-line"></i>`;
  isAsideOpen = false;
};

export const asideToggle = () => {
  if (isAsideOpen) {
    closeAside();
  } else {
    openAside();
  }
};
