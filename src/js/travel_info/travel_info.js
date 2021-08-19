// 輪播圖
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true, // 循環播放
        margin: 10, // 外距 10px
        nav: true, // 顯示按鍵
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

// 回到最上方
$("#info_go_top").click(function () {
    $("html, body").animate({
        scrollTop: 0,
    }, 1000)
});

// 收藏功能
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

// 臉書分享功能  
window.fbAsyncInit = function() {
  FB.init({
    appId      : '385510642997838',
    xfbml      : true,
    version    : 'v2.4'
    });
};
      
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
     
function share(){
    FB.ui({
        method: 'share',
        href: 'https://tibamef2e.com/tfd102/project/g5/travel_info.html',
        // href: 'https://tibamef2e.com/tfd102/project/g5/postcard.html',
    },
     // callback
    function(response) {
        if (response && !response.error_message) {
            alert('分享至臉書，邀請朋友一起成為jumper!');
        } else {
            // alert('Error while posting.');
        }
    })
};

// v-calendar
new Vue({
    el: '#app',
    data: {
      selectedDate: null,
    }
  })

// 計算人數
var vm = new Vue({
    el: '#num',
    data: {
      number: 1,
      min: 1,
      max: 10,
    },
    methods: {
      add() {
        this.number = this.number + 1;
        if (this.number > this.max) {
          this.number = this.max;
        }
      },
      minus() {
        this.number = this.number - 1;
        if (this.number < this.min) {
          this.number = this.min;
        }
      }
    }
  });

//mb彈窗
$(function(){
  
    // 開啟 Modal 彈跳視窗
    $("button.btn_modal").on("click", function(){
      $("div.overlay").fadeIn();
    });
    
    // 關閉 Modal
    $("button.btn_modal_close").on("click", function(){
      $("div.overlay").fadeOut();
    });
    
  });