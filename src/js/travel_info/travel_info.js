
// $(選取).處理();
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: false, // 循環播放
        margin: 10, // 外距 10px
        nav: false, // 顯示按鍵
        dots: false, //顯示點點
        responsive: {
            0: {
                items: 2 // 螢幕大小為 0~600 顯示 1 個項目
            },
            600: {
                items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
            },
            1000: {
                items: 5 // 螢幕大小為 1000 以上 顯示 5 個項目
            }
        }
    });
});

$("#info_go_top").click(function () {
    $("html, body").animate({
        scrollTop: 0,
    }, 1000)
});

var flag=true;
$(".fav").click(function(){
    if(flag){
        $(this).find("img").attr("src","./images/icon/like.svg");
        flag=false;
    }else{
        $(this).find("img").attr("src","./images/icon/like_full.svg");
        flag=true;
    }
});
