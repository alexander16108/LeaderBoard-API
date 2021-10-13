import './style.css';

const displayScores = () => {
  const ul = document.getElementById('displayedScores');
  const li = document.createElement('li');
  ul.appendChild(li);
  
  
  
   document.getElementById('submitScore').addEventListener('click');
  
  document.getElementById('refresh').addEventListener('click',);
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