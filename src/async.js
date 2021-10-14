const Url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const getGame = async () => {
  if (localStorage.getItem('leaderBoardId')) return;
  const game = {
    name: 'LeAdErBoArD Game',
  };

  const response = await fetch(`${Url}games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  });
  const data = await response.json();
  const leaderBoardId = data.result.split(' ')[3];
  localStorage.setItem('leaderBoardId', leaderBoardId);
};

const refreshPage = async () => {
  const leaderBoardId = localStorage.getItem('leaderBoardId');
  const list = document.getElementById('displayedScores');
  list.innerHTML = '';
  const response = await fetch(`${Url}games/${leaderBoardId}/scores`);
  const scores = await response.json();
  scores.result.forEach((score) => {
    const li = document.createElement('li');
    li.innerText = `${score.user}: ${score.score}`;
    list.append(li);
  });
};

const submit = async (e) => {
  e.preventDefault();

  const leaderBoardId = localStorage.getItem('leaderBoardId');
  const name = document.getElementById('userName');
  const score = document.getElementById('userScores');

  const newScore = {
    user: name.value,
    score: score.value,
  };
  await fetch(`${Url}games/${leaderBoardId}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newScore),
  });
  name.value = '';
  score.value = '';
};

module.exports = {
  getGame,
  refreshPage,
  submit,
};