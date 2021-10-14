import './style.css';
import {
  getGame,
  refreshPage,
  submit,
} from './async.js';

const displayScores = () => {
  const ul = document.getElementById('displayedScores');
  const li = document.createElement('li');
  ul.appendChild(li);

  getGame();
  refreshPage();

  document.getElementById('submitScore').addEventListener('click', submit);

  document.getElementById('refresh').addEventListener('click', refreshPage);
};

document.addEventListener('DOMContentLoaded', displayScores);
