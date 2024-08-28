
function createDiv(textTitle) {
    const divStatus = document.createElement('div');
    divStatus.classList = 'status';
    divStatus.innerHTML = textTitle;
    document.querySelector('body').prepend(divStatus);
}

createDiv('Попаданий: <span>0</span><br>Промахов: <span>0</span><br>');

function createH3_2(textTitle) {
    const titleH3 = document.createElement('h3');
    titleH3.classList = 'titleH3';
    titleH3.textContent = textTitle;

    document.querySelector('body').prepend(titleH3);
}

createH3_2('- считается промахом');

function createH3_1(textTitle) {
    const titleH3 = document.createElement('h3');
    titleH3.classList = 'titleH3';
    titleH3.textContent = textTitle;

    document.querySelector('body').prepend(titleH3);
}

createH3_1('Пропустил 5 появлений гоблина(или 5 секунд)');


function createH1(textTitle) {
    const titleH1 = document.createElement('h1');
    titleH1.classList = 'titleH1';
    titleH1.textContent = textTitle;

    document.querySelector('body').prepend(titleH1);
}

createH1('игра: Убей гоблина');

