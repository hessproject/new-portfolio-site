$(window).on('load', function(){
    $('.preloader').hide();
    main();
});

$('#exampleModal').on('show.bs.modal', function(event){
    var link = $(event.relatedTarget);
    var title = link.data('title');
    var videoSrc = link.data('video');
    var modal = $(this);

    modal.find('.modal-title').text(title);
    modal.find('.modal-video').attr('src', videoSrc);
    document.getElementById('exampleVideo').play();
})