//grabbing all the panels
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen)); //take each of the panels, loop over each one of them, listen for a clink on each one of them, run the toggle fuction when it is run
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
