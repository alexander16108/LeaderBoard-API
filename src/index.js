import './style.css';

const container = document.getElementById('displayedScores');

const Score = [
  {
    Name: 'martins law',
    Score: 20,
  },
  {
    Name: 'martins law',
    Score: 20,
  },
  {
    Name: 'martins law',
    Score: 20,
  },
  {
    Name: 'martins law',
    Score: 20,
  },
];

const populate = () => {
  Score.forEach((element) => {
    const template = `
    <li class='individualScores d-flex lst-sty'>
    <p >${element.Name} : <span>${element.Score}</span></p>
  </li>
  <hr/>
    `;
    container.innerHTML += template;
  });
};

populate();