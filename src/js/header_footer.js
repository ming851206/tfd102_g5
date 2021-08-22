const header = Vue.component("the-header", {
    template: `
    <div class="navigation">
        <div class="nav_logo">
            <a href="home.html">
                <img class="logo" src="./images/logo/logo.svg" alt="logo">
            </a>
        </div>
        <nav class="nav">
            <ul class="nav_list">
                <div class="web_bar">
                    <li><a href="about.html">關於我們</a></li>
                    <li><a href="travel_list.html">旅遊總覽</a></li>
                    <li><a href="postcard.html">客製明信片</a></li>
                    <li><a href="QA.html">常見問題</a></li>
                </div>
                <div class="mobile_bar">
                    <li class="home">
                        <a href="home.html">
                            <img src="./images/icon/header/home_icon.svg" alt="home">
                        </a>
                    </li>
                    <li class="favorite"  @click="loginCheck1">
                        <img src="./images/icon/header/favorite_icon.svg" alt="favorite">
                    </li>
                    <li class="member" @click="loginCheck">
                        <img src="./images/icon/header/member_icon.svg" alt="member">
                    </li>
                    <li class="menu">
                        <img src="./images/icon/header/menu_icon.svg" alt="menu">
                    </li>
                </div>
            </ul>
        </nav>
    </div>
`,
    methods: {
        loginCheck() {
            $.ajax({
                method: "POST",
                url: "php/LoginCheck.php",
                data: {},
                dataType: "text",
                success: function (response) {
                    if (response == "") {
                        location.href = 'login.html';
                    } else {
                        location.href = 'member.html';
                    }
                },
                error: function (exception) {
                    alert("數據載入失敗: " + exception.status);
                }
            });
        },
        loginCheck1() {
            $.ajax({
                method: "POST",
                url: "php/LoginCheck.php",
                data: {},
                dataType: "text",
                success: function (response) {
                    if (response == "") {
                        alert('請先登入，將前往登入頁');
                        location.href = 'login.html';
                    } else {
                        location.href = 'member.html';
                    }
                },
                error: function (exception) {
                    alert("數據載入失敗: " + exception.status);
                }
            });
        },
    },
    mounted() {
        let locationName = location.pathname;
        if (locationName == "/tfd102/project/g5/about.html") {
            $(".web_bar li:nth-child(1) a").addClass("bold");
        } else if (locationName == "/tfd102/project/g5/travel_list.html") {
            $(".web_bar li:nth-child(2) a").addClass("bold");
        } else if (locationName == "/tfd102/project/g5/postcard.html") {
            $(".web_bar li:nth-child(3) a").addClass("bold_3");
        } else if (locationName == "/tfd102/project/g5/q_acc" || locationName == "/tfd102/project/g5/QA.html") {
            $(".web_bar li:nth-child(4) a").addClass("bold");
        }
    },
})
const menu_item = Vue.component("menu-item", {
    template: `
    <div id="nav_rwd">
        <img class="logo_rwd" src="./images/logo/logo.svg" alt="logo">
        <div class="menu">
            <img id="close_menu" src="./images/icon/header/close.svg" alt="close">
            <div class="menu_item">
                <button class="btnL_light"><a href="about.html">關於我們</a></button>
                <button class="btnL_light"><a href="travel_list.html">旅遊總覽</a></button>
                <button class="btnL_light"><a href="postcard.html">客製明信片</a></button>
                <button class="btnL_light"><a href="QA.html">常見問題</a></button>
            </div>
        </div>
    </div>
    `,
})
const footer = Vue.component("the-footer", {
    template: `
    <div>
        <div class="socialLink_icon">
            <a href="/">
                <img src="./images/icon/footer//twitter_icon.svg" alt="twitter">
            </a>
            <a href="/">
                <img src="./images/icon/footer/fb_icon.svg" alt="facebook">
            </a>
            <a href="/">
                <img src="./images/icon/footer/ig_icon.svg" alt="instagram">
            </a>
        </div>
        <div class="statement">
            &copy; 2021 BY JUMPER
            <br>
            本網站為緯育TibaMe前端設計工程師班第68期學員專題作品，本平台僅供學習、展示之用。
            <br>
            若有侵權疑慮，您可以私訊[TibaMe-前端設計工程師養成班]，後續會由專人協助處理。
        </div>
    </div>
    `,
})
const vue_header = new Vue({
    el: "#the_header",
})
const vue_menu = new Vue({
    el: "#mobile_menu",
})
const vue_footer = new Vue({
    el: "#the_footer",
})

$(function () {
    $(".menu").on("click", function () {
        $('#nav_rwd').fadeIn();
        $("html").css({
            position: "fixed",
            width: "100%",
        })
    });
    $("#close_menu").on("click", function (e) {
        e.stopPropagation();
        $("#nav_rwd").fadeOut();
        $("html").css({
            position: "static",
            width: "100%",
        })
    });
})