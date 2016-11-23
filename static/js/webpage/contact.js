var jumbotron = document.getElementById('jumbotron');
var contactForm = document.getElementById('contactForm');
var contactButtons = document.getElementById('contactButtons');

function main(){
    TweenMax.from(jumbotron, .75, {opacity:0, y:-100});

    TweenMax.from(contactForm, .5, {opacity:0, x:-75, delay:.75});
    TweenMax.from(contactButtons, .5, {opacity:0, x:75, delay:.75});
}