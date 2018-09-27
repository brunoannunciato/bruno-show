var music = document.querySelector('.tuts-tuts'),
    tudo = document.querySelector('.tudo');

music.play();

    tudo.addEventListener('click', function() {
    music.play();
});

console.log('Email: contato@brunoannunciato.com');
console.log('Likedin: www.linkedin.com/in/bruno-annunciato-b20163149/');
console.log('Instagram: @brunobannunciato');

addEventListener('mousemove', function() {

    if (document.querySelector('body').classList == '' ) {
        document.querySelector('body').classList.add('bg-02');
    } else {
        document.querySelector('body').classList.remove('bg-02');
    }
})

console.log('teste')