const tela = document.querySelector('canvas');
const pincel = tela.getContext('2d');

pincel.fillStyle = 'Green';
pincel.fillRect(0, 0, 600, 400);

pincel.fillStyle = 'Yellow';
pincel.beginPath();
pincel.moveTo(300, 70);
pincel.lineTo(100, 200);
pincel.lineTo(500, 200);
pincel.fill();

pincel.fillStyle = 'Yellow';
pincel.beginPath();
pincel.moveTo(300, 330);
pincel.lineTo(100, 200);
pincel.lineTo(500, 200);
pincel.fill();

pincel.fillStyle = 'Blue';
pincel.beginPath();
pincel.arc(300, 200, 70, 0, 2 * 3.14);
pincel.fill();





