let meuBotao = document.querySelector('button.share');
let options = document.querySelector('div.share-options');
let profile = document.querySelector('div.profile');

function fechar() {
    let fechar = document.querySelector('button.sharing');
    options.style.display = 'none';
    profile.style.display = 'flex';
}

meuBotao.addEventListener('click', function () {
    if (window.innerWidth <= 768) {
        if (options.style.display === 'none') {
            options.style.display = 'flex';
            profile.style.display = 'none';
        } else {
            options.style.display = 'none';
            profile.style.display = 'flex';
        }
    } else {
        if (options.style.display === 'none') {
            options.style.display = 'flex';
        } else {
            options.style.display = 'none';
            profile.style.display = 'flex';
        }
    }
});
