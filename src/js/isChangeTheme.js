import refs from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'theme';

const onCheckboxClick = event => {
  let value = '';

  if (event.currentTarget.checked) {
    value = Theme.DARK;
    refs.body.classList.add(value);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    value = Theme.LIGHT;
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(value);
  }
  localStorage.setItem(STORAGE_KEY, value);
};

const savedThemeOnReloaded = () => {
  const savedValue = localStorage.getItem(STORAGE_KEY);

  if (savedValue) {
    refs.body.classList.add(savedValue);
  } else {
    refs.body.classList.add(Theme.LIGHT);
  }

  if (savedValue === Theme.DARK) {
    refs.toggleTheme.setAttribute('checked', true);
  }
};
savedThemeOnReloaded();

export default onCheckboxClick;
