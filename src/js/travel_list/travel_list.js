const vue_opinion = new Vue({
    el: "",
    data: {

    }
})

// $(選取).處理();
$(document).ready(function () {


    $(".owl-carousel:not(#bigcard)").owlCarousel({
        loop: true, // 循環播放
        margin: 10, // 外距 10px
        nav: true, // 顯示點點
        dots: false,

        responsive: {
            0: {
                items: 2 // 螢幕大小為 0~600 顯示 1 個項目
            },
            600: {
                items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
            },
            1000: {
                items: 4 // 螢幕大小為 1000 以上 顯示 5 個項目
            }
        }
    });
    $("#bigcard").owlCarousel({
        loop: true, // 循環播放
        margin: 10, // 外距 10px
        nav: true, // 顯示點點

        responsive: {
            0: {
                items: 1 // 螢幕大小為 0~600 顯示 1 個項目
            },
            600: {
                items: 1.5 // 螢幕大小為 600~1000 顯示 3 個項目
            },
            1000: {
                items: 2.5 // 螢幕大小為 1000 以上 顯示 5 個項目
            }
        }
    });
});

$("#go_the_top").click(function () {
    $("html, body").animate({
        scrollTop: 0,
    }, 1000)
})
