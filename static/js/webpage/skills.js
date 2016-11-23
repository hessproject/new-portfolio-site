var jumbotron = document.getElementById('jumbotron');
var skills = $('.skill').toArray();
var skillHeaders = $('.skillHeader').toArray();

TweenMax.from(jumbotron,.3, {opacity:0, scale:0});

TweenMax.staggerFrom(skills, 1, {opacity:0, scale: 1.5, rotationY:90, ease:SteppedEase.easeInOut,delay: .3}, .1);
TweenMax.staggerFrom(skillHeaders, 1, {opacity: 0, rotationY: 90, ease: SteppedEase.easeInOut,delay: .3}, .1);