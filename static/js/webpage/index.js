var headerSplit = new SplitText('#header', {type: 'words,chars'});
var subheaderSplit = new SplitText('#subheader', {type: 'words,chars'});

function main(){
    TweenMax.set('#header', {perspective:400});

    TweenMax.staggerFrom(headerSplit.chars, 1.0, {opacity:0,scale:0,y:80,rotationY:90}, 0.01, headerDone);

    TweenMax.staggerFrom(subheaderSplit.words, 1.5, {opacity:0, y:75, delay:0.8}, 0.2, subheaderDone);
}

function headerDone(){
    headerSplit.revert();
}

function subheaderDone(){
    subheaderSplit.revert();
}