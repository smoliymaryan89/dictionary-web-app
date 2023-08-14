import refs from './refs';

const savedFont = localStorage.getItem('selectedFont');

if (savedFont) {
  refs.fontSelector.value = savedFont;
  document.body.style.fontFamily = `var(${savedFont})`;
} else {
  refs.fontSelector.value = refs.fontSelector.options[0].value;
  document.body.style.fontFamily = `var(${refs.fontSelector.value})`;
}

refs.fontSelector.addEventListener('change', () => {
  const selectedFont =
    refs.fontSelector.options[refs.fontSelector.selectedIndex].value;
  document.body.style.fontFamily = `var(${selectedFont})`;
  localStorage.setItem('selectedFont', selectedFont);
});
