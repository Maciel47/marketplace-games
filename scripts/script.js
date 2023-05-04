let addValue = 1;

const qs = (item) => document.querySelector(item);
const qsa = (item) => document.querySelectorAll(item) ;

gamesJson.map((item, index) => {
    let gamesItem = qs('.game-model .game').cloneNode(true);

    gamesItem.setAttribute('data-key', index);
    gamesItem.querySelector('.game-img img').src = item.img
    gamesItem.querySelector('.game-description-name').innerHTML = item.name;
    gamesItem.querySelector('.game-description-year').innerHTML = `Ano: ${item.year}`;
    gamesItem.querySelector('.game-description-price').innerHTML = `$ ${item.price.toFixed(2)}`;

    gamesItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault();  
        let key = e.target.closest('.game').getAttribute('data-key');
        addValue = 1;
        
        qs('.game-window-img-body img').src = gamesJson[key].img;
        qs('.game-window-body-desc h1').innerHTML = gamesJson[key].name;
        qs('.game-plataform.selected').classList.remove('selected');
        qsa('.game-plataform').forEach((plataforms, plataformIndex) => {
            if(plataformIndex == 0) {
                plataforms.classList.add('selected');
            }
            plataforms.querySelector('span').innerHTML = gamesJson[key].plataform[plataformIndex];
        });

        qs('.value-add').innerHTML = addValue;

        qs('.game-window-description-year').innerHTML = `Ano: ${gamesJson[key].year}`;
        qs('.game-window-description-price').innerHTML = `Valor: $ ${gamesJson[key].price.toFixed(2)}`;

        qs('.game-window').style.opacity = 0;
        qs('.game-window').style.display = 'flex';
        setTimeout(() => {
            qs('.game-window').style.opacity = 1;
        }, 200);
    });
    qs('.games').append(gamesItem);
});

function closeWindow() {
    qs('.game-window').style.opacity = 0;
    setTimeout(() => {
        qs('.game-window').style.display = 'none';
    }, 200);
}
qs('.game-window-btn-back').addEventListener('click', closeWindow);

