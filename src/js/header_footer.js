const header = Vue.component("the-header", {
    template: `
    <div class="navigation">
        <div class="nav_logo">
            <a href="index.html">
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
                        <a href="index.html">
                            <img src="./images/icon/header/home_icon.svg" alt="home">
                        </a>
                    </li>
                    <li class="favorite">
                        <a href="member.html">
                            <img src="./images/icon/header/favorite_icon.svg" alt="favorite">
                        </a>
                    </li>
                    <li class="member">
                        <a href="login.html">
                            <img src="./images/icon/header/member_icon.svg" alt="member">
                        </a>
                    </li>
                    <li class="menu">
                        <img src="./images/icon/header/menu_icon.svg" alt="menu">
                    </li>
                </div>
            </ul>
        </nav>
    </div>
`, mounted() {
            let locationName = location.pathname;
            if(locationName == "/about.html"){
                $(".web_bar li:nth-child(1)").addClass("bold");
            }else if(locationName == "/travel_list.html"){
                $(".web_bar li:nth-child(2)").addClass("bold");
            }else if(locationName == "/postcard.html"){
                $(".web_bar li:nth-child(3)").addClass("bold");
            }else if(locationName == "/q_acc" || locationName == "/QA.html"){
                $(".web_bar li:nth-child(4)").addClass("bold");
            }
        // document.addEventListener('click', function (e) {
        //     // console.log(location.href);
        //     if (e.target.nodeName == "IMG") {
        //         let click = e.target.parentNode.getAttribute("href");
        //         // console.log(click);
        //         if (click != null) {
        //             if (click == "/about.html" || click == "/travel_list.html" || click == "/postcard.html" || click == "/q_acc" || click == "/index.html" || click == "/login.html") {
        //                 if (location.href.indexOf("ming851206") > 0) {
        //                     // console.log(location.href);
        //                     // let newClick = "/tfd102_g5" + click;
        //                     // location.href = newClick;
        //                     // console.log('1');
        //                     location.href = click;

        //                 } else {
        //                     // console.log(location.href);
        //                     location.href = click;
        //                     // console.log('2');
        //                 }
        //             }
        //         }
        //     } else {
        //         let click = e.target.getAttribute("href");
        //         if (click != null) {
        //             if (click == "/about.html" || click == "/travel_list.html" || click == "/postcard.html" || click == "/QA.html" || click == "/index.html" || click == "/login.html") {
        //                 if (location.href.indexOf("ming851206") > 0) {
        //                     // console.log(location.href);
        //                     // let newClick = "/tfd102_g5" + click;
        //                     // // location.href = newClick;
        //                     // console.log('3');
        //                     location.href = click;

        //                 } else {
        //                     // console.log(location.href);
        //                     location.href = click;
        //                     // console.log('4');
        //                 }
        //             }
        //         }
        //     }

        // });
    }
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