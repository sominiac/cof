const cardMore = document.querySelector('.second-frame__card-more');
const arrowText = document.querySelector('.second-frame__arrow-text');

cardMore.addEventListener('click', () => {
    arrowText.classList.add('second-frame__arrow-text--animated');
    arrowText.classList.remove('hidden');
})