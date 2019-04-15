let one = 'C:/Users/chang/Documents/GitHub/sy-photography/images/wedding/_12A0076.jpg';
let two = 'C:/Users/chang/Documents/GitHub/sy-photography/images/couple.jpg';
let three = 'C:/Users/chang/Documents/GitHub/sy-photography/images/clouds.jpg'

db.collection('top-photos').get().then((snapshot) => {
    let photos = [one, two, three, 'C:/Users/chang/Documents/GitHub/sy-photography/images/lightroom.jpg', 'C:/Users/chang/Documents/GitHub/sy-photography/images/lights-night.jpg', 'C:/Users/chang/Documents/GitHub/sy-photography/images/reflection.jpg', 'C:/Users/chang/Documents/GitHub/sy-photography/images/bank.jpg']
    snapshot.docs.forEach(doc => {
        let photo = $(`<div> <div style="height: 825px; background-image: url('${doc.data().img}'); background-position: center; background-size: cover;"></div></div>`);
        $('.carousel').append(photo);
    })
    // setTimeout(() => {
    //     for (let i = 0; i < photos.length; i++) {
    //         setTimeout(() => {
    //             $('#hero').css('background-image', 'url(' + photos[i] + ')')
    //         }, i*3000);
    //     }
    // }, 50);
})

setTimeout(() => {
    $('.carousel').slick({
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
}, 500);



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