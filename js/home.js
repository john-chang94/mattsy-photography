const topPhotos = $('#thisCarousel');

renderTopPhotos = (doc) => {
    let photo = $('<a href=' + doc.data().img + ' data-fancybox> <img src=' + doc.data().img + ' />');
    $(topPhotos).append(photo);
}

db.collection('top-photos').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderTopPhotos(doc);
    })
    setTimeout(() => {
        $('.owl-carousel').owlCarousel({
            loop: true,
            items: 4,
            margin: 13,
            dots: false,
            nav: true,
            navText: ['<i class="fas fa-angle-left" aria-hidden="true"></i>', '<i class="fas fa-angle-right" aria-hidden="true"></i>']
        });
    }, 50);
})

$().fancybox({
    selector: '.owl-item:not(.cloned) a' && '.owl-item a',
    hash: false,
    thumbs: {
        autoStart: false
    },
    arrows: false,
    infobar: false,
    buttons: [
        'zoom',
        'close'
    ]
});


$('#navBarFb').mouseenter(() => {
    $('#navBarFb').attr('src', 'images/facebook-gold.png')
}).mouseleave(() => {
    $("#navBarFb").attr('src', 'images/facebook-white.png')
})

$('#navBarIg').mouseenter(() => {
    $('#navBarIg').attr('src', 'images/instagram-gold.png')
}).mouseleave(() => {
    $('#navBarIg').attr('src', 'images/instagram-white.png')
})

$('#footerFb').mouseenter(() => {
    $('#footerFb').attr('src', 'images/facebook-white.png')
}).mouseleave(() => {
    $('#footerFb').attr('src', 'images/facebook-dark.png')
})

$('#footerIg').mouseenter(() => {
    $('#footerIg').attr('src', 'images/instagram-white.png')
}).mouseleave(() => {
    $('#footerIg').attr('src', 'images/instagram-dark.png')
})