function desenhaQuadrado(x, y, cor) {
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d'); 
    
    pincel.fillStyle = cor;
    
    pincel.fillRect(x, y, 50, 50);
    pincel.fillStroke = 'Black';
    pincel.strokeRect(x, y, 50, 50);
}

var x = 0
while (x < 500) {
    desenhaQuadrado(x, 0, 'Green');
    desenhaQuadrado(x, 50, 'Green');
    x += 50
    desenhaQuadrado(x, 0, 'Red');
    desenhaQuadrado(x, 50, 'Red');
    x += 50
    desenhaQuadrado(x, 0, 'yellow');
    desenhaQuadrado(x, 50, 'yellow');
    x += 50
}

