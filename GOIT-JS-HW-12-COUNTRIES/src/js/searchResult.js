import showNotification from './notification'
import render from './render'




function showQueryResults(data) {
  const countriesCount = data.length;

  if (countriesCount > 10) {
    const message =
      'Too many matches found. Please enter a more specific query!';
    const type = 'info';

    showNotification(message, type);
  } else if ((countriesCount >= 2) & (countriesCount <= 10)) {
    render.countriesList(data);
  } else if (countriesCount === 1) {
     render.country(data);
  } else {
    const errorMessage = 'Matches not found. Please adjust your request';
    const type = 'error';

    showNotification(errorMessage, type);
  }
}



export default showQueryResults;