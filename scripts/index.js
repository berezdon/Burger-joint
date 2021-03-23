const startScreen = document.querySelector('.screen-start');
const intermediateScreen = document.querySelector('.screen-intermediate');
const homeScreen = document.querySelector('.screen-home');
const intermediateScreenButtons = intermediateScreen.querySelectorAll('.screen-intermediate__button');
const cancelButton = homeScreen.querySelector('.screen-home__header-button');
const contentButtons = homeScreen.querySelectorAll('.screen-home__content-buttons');

function openScreen(screen) {
  screen.classList.add('screen_opened');
}

function closeScreen(screen) {
  screen.classList.remove('screen_opened');
}

function handleClickOnScreen(evt) {
  if (evt.currentTarget.classList.contains('screen')) {
    closeScreen(evt.currentTarget);
  }
}

function addClassActive(button) {
  contentButtons.forEach((button) => {
    if (button.classList.contains('screen-home__content-buttons_active'))
      return button.classList.remove('screen-home__content-buttons_active');
  })
  button.classList.add('screen-home__content-buttons_active');
}

function cancelFunction() {
  closeScreen(homeScreen);
  addClassActive(contentButtons[0]);
}

startScreen.addEventListener('click', (evt) => {
  handleClickOnScreen(evt);
  openScreen(intermediateScreen);
});
intermediateScreenButtons.forEach((button) => {
  button.addEventListener('click', () => {
    closeScreen(intermediateScreen);
    openScreen(homeScreen);
  })
})
cancelButton.addEventListener('click', () => {
  cancelFunction();
  openScreen(startScreen);
})

contentButtons.forEach((button) => {
  button.addEventListener('click', () => {
    addClassActive(button);
  });
});
