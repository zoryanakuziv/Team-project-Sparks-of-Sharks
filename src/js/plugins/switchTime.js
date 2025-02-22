import getRefs from '../getRef';
import * as mainPage from '../main';

const refs = getRefs();

refs.switchTime.addEventListener('change', onSwitchTimeChanged);

export default function typeoftime() {
  console.log('refs.switchTime.checked', refs.switchTime.checked);
  if (localStorage.time === 'week') {
    refs.switchTime.checked = false;
  } else {
    localStorage.setItem('time', 'day');
    refs.switchTime.checked = true;
  }
  return;
}

function onSwitchTimeChanged() {
  console.log('refs.switchTime.checked', refs.switchTime.checked);
  console.log('Click', localStorage.time);

  if (localStorage.time === 'day') {
    localStorage.setItem('time', 'week');
    mainPage.renderPage();
  } else {
    localStorage.setItem('time', 'day');
    mainPage.renderPage();
  }

  console.log('refs.switchTime.checked', refs.switchTime.checked);
}
