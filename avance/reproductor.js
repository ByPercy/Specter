const lista = document.getElementById('lista');
const player = document.getElementById('player');

    lista.addEventListener('click', e => {
    const li = e.target.closest('li');
    if (!li) return;

    const id = li.dataset.id;
    player.src = `https://drive.google.com/file/d/${id}/preview`;
});