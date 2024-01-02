const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'Lightgrey';
pincel.fillRect(0, 0, 600, 400);

pincel.fillStyle = 'Green';
pincel.fillRect(0, 0, 200, 400);

pincel.fillStyle = 'Red';
pincel.fillRect(400, 0, 400, 400);

pincel.fillStyle = 'Yellow';
pincel.beginPath();
pincel.moveTo(300, 200);
pincel.lineTo(200, 400);
pincel.lineTo(400, 400);
pincel.fill();

pincel.fillStyle = 'Blue';
pincel.beginPath();
pincel.arc(300, 200, 50, 0, 2 * 3.14);
pincel.fill();
