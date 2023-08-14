import refs from './refs';

const clearMarkup = () => {
  refs.searchOutput.innerHTML = '';
  refs.noun.innerHTML = '';
  refs.verb.innerHTML = '';
  refs.footer.innerHTML = '';
  refs.noData.innerHTML = '';
};

export default clearMarkup;
