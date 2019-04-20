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

db.collection('top-photos').get().then(async (snapshot) => {
    await snapshot.docs.forEach(doc => {
        // instead of placing an img tag inside the div to be rendered from slick
        // set each image as the background on a div inside another div that is rendered as the slides from slick
        let photo = $(`<div> <div style="height: 820px; background-image: url('${doc.data().img}'); background-position: center; background-size: cover;"></div> </div>`);
        $('.carousel').append(photo);
    })
    await $('.carousel').slick({
        arrows: false,
        slidesToShow: 1,
        slidestoScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        pauseOnHover: false
    })
})