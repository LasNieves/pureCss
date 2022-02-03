const bars = document.getElementById('bars');
const cancel = document.getElementById('cancel');
const toggleMenu = document.getElementById('toggleMenu');
const headerImgContainer = document.getElementById('headerImgContainer');

const desplegarMenu = () => {
  toggleMenu.classList.toggle('header__list--top');
  setTimeout(() => {
      bars.classList.toggle('invisible');
      cancel.classList.toggle('invisible');
  }, 310)
}

headerImgContainer.addEventListener('click', desplegarMenu);

window.addEventListener('scroll', () => {
  toggleMenu.classList.add('header__list--top')
  setTimeout(() => {
    bars.classList.remove('invisible');
    cancel.classList.add('invisible');
}, 310)
})
