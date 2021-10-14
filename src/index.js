import './style.css';
import {getGame, refreshPage, submit} from './async.js'

const displayScores = () => {
  const ul = document.getElementById('displayedScores');
  const li = document.createElement('li');
  ul.appendChild(li);
  
  getGame();
  refreshPage();
  
   document.getElementById('submitScore').addEventListener('click', submit);
  
  document.getElementById('refresh').addEventListener('click', refreshPage);
}

document.addEventListener('DOMContentLoaded', displayScores);

// const populate = () => {
//   Score.forEach((element) => {
//     const template = `
//     <li class='individualScores d-flex lst-sty'>
//     <p >${element.Name} : <span>${element.Score}</span></p>
//   </li>
//   <hr/>
//     `;
//     container.innerHTML += template;
//   });
// };

// populate();