const menuTrigger = document.querySelector('#menu-trigger');

menuTrigger.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('noscroll');
  } else {
    document.body.classList.remove('noscroll');
  }
});
