function main(){
    var jumbotron = document.getElementById('jumbotron');
    var examples = $('.example').toArray();

    TweenMax.from(jumbotron, .2, {scale:0});
    TweenMax.staggerFrom(examples, .6, {delay:.2, opacity:.5, scale:0}, .1);
}