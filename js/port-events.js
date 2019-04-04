const sisterWedding = $('#sisterWedding');

renderGallery = doc => {
    let photo = $(`<a href="${doc.data().img}" data-fancybox="sister-wedding" data-thumb="${doc.data().img}"></a>`);
    $(sisterWedding).append(photo);

    $('[data-fancybox="sister-wedding"]').fancybox({
        thumbs: {
            autoStart: true,
            axis: 'x'
        },
        arrows: true,
        buttons: [
            'zoom',
            'close',
            'thumbs'
        ]
    });
}

db.collection('sister-wedding').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderGallery(doc);
    })
})

$('[data-fancybox="gallery1"]').fancybox({
    thumbs: {
        autoStart: true,
        axis: 'x'
    },
    arrows: true,
    buttons: [
        'zoom',
        'close',
        'thumbs'
    ]
});

$('[data-fancybox="gallery2"]').fancybox({
    thumbs: {
        autoStart: true,
        axis: 'x'
    },
    arrows: true,
    buttons: [
        'zoom',
        'close',
        'thumbs'
    ]
});