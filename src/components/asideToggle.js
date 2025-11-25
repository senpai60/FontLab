const burgerBtn = document.getElementById("burger");
const asideEl = document.getElementById('aside');
let isAsideOpen = false;

export const asideToggle = () => {
  burgerBtn.addEventListener("click", () => {
  isAsideOpen = !isAsideOpen;
  console.log(isAsideOpen);

  if (isAsideOpen) {
    asideEl.style.width = '20%';
    burgerBtn.innerHTML = `<i class="ri-menu-unfold-3-line"></i>`;
  } else {
    asideEl.style.width = '0%';
    burgerBtn.innerHTML = `<i class="ri-menu-fold-line"></i>`;
  }
});
}