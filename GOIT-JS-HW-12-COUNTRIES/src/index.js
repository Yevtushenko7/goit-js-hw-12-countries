import './styles.css';

import refs from './js/refs.js'
import fetchCountries from './js/fetchCountries.js'
import info from './js/result.js'

const debounce = require('lodash.debounce');



const  onInputChange = e => {
    let searchQuery = e.target.value;
if (searchQuery) {
  fetchCountries(searchQuery).then(info.showResult)
}
}

refs.input.addEventListener('input', debounce(onInputChange, 500))

refs.clearBtn.addEventListener('click', onBtnClick);

function onBtnClick() {
  refs.input.value = '';
  refs.countriesContainer.innerHTML = '';
}