let swiperWork = document.querySelectorAll('.swiper');

swiperWork.forEach(function (work){
    let swipers = new Swiper(work, {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    });

    // let swiperSaleProduct = document.querySelectorAll('.js-sale-product');

    // swiperSaleProduct.forEach(function (product){
    //     let swipers = new Swiper(product, {
    //       effect: 'fade',
    
    //       fadeEffect: {
    //         crossFade: true
    //       },
    
    //       pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //       },
    //       autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //       },
    //     });
    // });