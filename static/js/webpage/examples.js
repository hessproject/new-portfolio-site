var jumbotron = document.getElementById('jumbotron');
var examples = $('.example').toArray();

function main(){
    TweenMax.from(jumbotron, .2, {scale:0});
    TweenMax.staggerFrom(examples, .6, {delay:.2, opacity:.5, scale:0}, .1);
}

$('#exampleModal').on('show.bs.modal', function(event){
    var link = $(event.relatedTarget);
    var title = link.data('title');
    var videoSrc = link.data('video');
    var modal = $(this);

    modal.find('.modal-title').text(title);
    modal.find('.modal-video').attr('src', videoSrc);
    document.getElementById('exampleVideo').play();
})