const canvas = document.getElementById('diceCanvas');
const ctx = canvas.getContext('2d');
canvas.height = 120;
canvas.width = 120;
const drawNumber = (number) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  ctx.font = '30px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  switch (number) {
    case 1:
      ctx.fillText('•', canvas.width / 2, canvas.height / 2);
      break;
    case 2:
      ctx.fillText('•', canvas.width / 3, canvas.height / 3);
      ctx.fillText('•', 2 * canvas.width / 3, 2 * canvas.height / 3);
      break;
    case 3:
      ctx.fillText('•', canvas.width / 3, canvas.height / 3);
      ctx.fillText('•', canvas.width / 2, canvas.height / 2);
      ctx.fillText('•', 2 * canvas.width / 3, 2 * canvas.height / 3);
      break;
    case 4:
      ctx.fillText('•', canvas.width / 3, canvas.height / 3);
      ctx.fillText('•', 2 * canvas.width / 3, canvas.height / 3);
      ctx.fillText('•', canvas.width / 3, 2 * canvas.height / 3);
      ctx.fillText('•', 2 * canvas.width / 3, 2 * canvas.height / 3);
      break;
    case 5:
      ctx.fillText('•', canvas.width / 3, canvas.height / 3);
      ctx.fillText('•', 2 * canvas.width / 3, canvas.height / 3);
      ctx.fillText('•', canvas.width / 3, 2 * canvas.height / 3);
      ctx.fillText('•', 2 * canvas.width / 3, 2 * canvas.height / 3);
      ctx.fillText('•', canvas.width / 2, canvas.height / 2);
      break;
    case 6:
      ctx.fillText('•', canvas.width / 3, canvas.height / 4);
      ctx.fillText('•', 2 * canvas.width / 3, canvas.height / 4);
      ctx.fillText('•', canvas.width / 3, canvas.height / 2);
      ctx.fillText('•', 2 * canvas.width / 3, canvas.height / 2);
      ctx.fillText('•', canvas.width / 3, 3 * canvas.height / 4);
      ctx.fillText('•', 2 * canvas.width / 3, 3 * canvas.height / 4);
      break;
    default:
      break;
  }
}

const rollDice = () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  drawNumber(randomNumber);
}

window.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    rollDice();
  }
});

drawNumber();