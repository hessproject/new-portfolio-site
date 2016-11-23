var splitText = new SplitText('.paragraph',{type:'words'});
var paragraphs = document.getElementById('mainContainer');
var jumbotron = document.getElementById('jumbotron');
var numWords = splitText.words.length;
var tl = new TimelineMax({delay:0.5});


TweenMax.set(paragraphs, {transformPerspective:600, perspective:300, transformStyle:"preserve-3d", autoAlpha:1});


for(var i = 0; i < numWords; i++){
  tl.from(splitText.words[i], 1, {z:randomNumber(-500,300), opacity:0, rotationY:randomNumber(-40, 40)}, Math.random()*1);
}

TweenMax.from(jumbotron, .2, {opacity:0, delay:2.5, onComplete:finished});

function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function finished(){
    splitText.revert();
}