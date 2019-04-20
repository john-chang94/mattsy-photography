const sisterWedding = $('#sisterWedding');
const joshJess = $('#joshJess');

renderDynamically = async (doc, fancybox, parent) => {
    let photo = $(`<a href="${doc.data().img}" data-fancybox="${fancybox}" data-thumb="${doc.data().img}"></a>`);
    $(parent).append(photo);

    $(`[data-fancybox="${fancybox}"]`).fancybox({
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
        // renderSisterWedding(doc);
        renderDynamically(doc, sisterWedding.attr('data-fancybox'), sisterWedding);
    })
})

db.collection('josh-jess').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        // renderJoshJess(doc)
        renderDynamically(doc, joshJess.attr('data-fancybox'), $('#joshJess'))
    })
})

