var music = document.querySelector('.tuts-tuts'),
    tudo = document.querySelector('.tudo');

music.play();

    tudo.addEventListener('click', function() {
    music.play();
});

addEventListener('mousemove', function() {

    if (document.querySelector('body').classList == '' ) {
        document.querySelector('body').classList.add('bg-02');
    } else {
        document.querySelector('body').classList.remove('bg-02');
    }
})