// 首頻地球
const earthAnimation = Vue.component("first-animation", {
    template: `
    <div class="earth_container">
        <div class="slogan">
            <h2>Welcome to jumper</h2>
            <h5>隨時隨地、隨心所欲，和我們一起暢跳世界！<br>
                立即開始您的線上旅遊！
            </h5>
            <img class="scroll_down" src="./images/index/content/scroll_down.png">
        </div>
        <a href="game.html">
            <button class="game">點我玩玩看</button>
        </a>
    </div>
    `,
})
const vue_aniamtion = new Vue({
    el: "#earth"
})

// 關於我們
const aboutUsService = Vue.component("the-service", {
    template: `
    <div class="about">
        <div class="about_container">
            <h2>我們的服務</h2>
            <div class="all_about">
                <div class="about_1" data-aos="fade-down" data-aos-duration="600" data-aos-once="false">
                    <img src="./images/index/content/about_1.jpg" alt="專業的線上導遊">
                    <div class="des_1"> 
                        <h3>專業的線上導遊</h3>
                        <h4>我們提供具有專業知識背景的線上導遊，零時差導覽您的線上旅程，透過直播即時互動，他們將帶領您身歷其境，讓您隨時隨地，開機就能遊覽世界。</h4>
                    </div>
                </div>
                <div class="about_2" data-aos="fade-down" data-aos-duration="600" data-aos-delay="300" data-aos-once="false">
                    <div class="des_2">
                        <h3>提供包場</h3>
                        <h4>在任何您舒適的環境享受這場線上社交活動，沒有陌生人，只有您和您的親朋好友，由專業的當地導遊帶領遊樂世界各處，創造獨一無二的旅遊體驗。</h4>
                    </div>    
                    <img src="./images/index/content/about_2.jpg" alt="提供包場">
                </div>
            </div>
        </div>
    <div class="light_bg"></div>
    <div class="fence"></div>    
    </div>
    `,
})
const vue_service = new Vue({
    el: "#our-service",
})

// 精選主題
const mobileTheme = Vue.component("mobile-theme", {
    template: `
    <div id="mobile_theme">
        <h2>精選主題</h2>
        <ul class="continents">
            <li v-for="continent in continents" :style="continent.image" data-aos="fade-up" data-aos-delay="100">
                <h3>{{continent.name}}</h3>
            </li>
        </ul>
    </div>
    `,
    data() {
        return {
            continents: [
                { image: "background-image: url('./images/index/content/asia.jpg')", name: "亞洲" },
                { image: "background-image: url('./images/index/content/europe1.jpg')", name: "歐洲" },
                { image: "background-image: url('./images/index/content/america4.jpg')", name: "美洲" },
                { image: "background-image: url('./images/index/content/africa.jpg')", name: "非洲" },
                { image: "background-image: url('./images/index/content/oceanina1.jpg')", name: "大洋洲" },

            ]
        }
    }
})
const blade = Vue.component("the-carosul", {
    template: `
    <div id="blade" data-aos="fade-up" data-aos-duration="1000" >
        <div class="description">
            <h2>精選主題</h2>
            <div v-for="mentor in mentors" :class ="mentor.num">
                <h3>{{mentor.title}}</h3>
                <p>{{mentor.content}}</p>
            </div> 
        </div>
        
        <div id="circle-carousel" class="circle-carousel">
            <div v-for="item in items" :class="item.name" :data-num="item.num" :data-mentorid="item.mentorid" :data-background="item.background">
                <div :style="item.circle"></div>
            </div>
        </div>
    </div>

    `,
    data() {
        return {
            mentors: [
                { num: "mentor 123", title: "非洲", content: "世界上第二大洲，橫跨赤道南北，亦是世界古文明的發源地之一。綿延無亙的金黃沙漠，以及數不盡的多樣野生動物，始終帶給世人無限的好奇前往探索。Jumper將為你開啟一趟前所未有的非洲之旅，無論是充滿神秘且未知的埃及金字塔及人面獅身像，又或是一年一度、壯闊非凡，位於東非草原的動物大遷徙，絕對重新打造您對於非洲國度的全新認知！" },
                { num: "mentor 456", title: "歐洲", content: "來到建築浪漫與景色宜人的歐洲城市，可玩性和故事性通通精彩到無以複加。歐洲那種惬意悠閑的生活，一向是人們熱衷旅行的目的地之一。Jumper專業線上導遊將零時差帶領你，一同穿梭在巴黎市區飽覽街景，再到繁華的倫敦體驗英倫風情。如果您想觀賞自然奇景，我們會帶您前往芬蘭的玻璃屋欣賞迷幻極光。" },
                { num: "mentor 789", title: "亞洲", content: "亞洲是五大洲中面積最大，人口最多的一個洲，地跨寒、溫、熱三帶，地形複雜多樣，世界上的各種氣候在亞洲都有分布。從北部精緻典雅的日本京都，到工藝成就舉世無雙的印度泰姬瑪哈陵，再到世界文化遺產的柬埔寨吳哥窟，Jumper將帶領你揭開東方的神祕面紗，讓您盡情體驗當地豐富的歷史文化。" },
                { num: "mentor 101112", title: "美洲", content: "美洲幅員遼闊，地大物博，橫跨溫帶、亞熱帶，地形生態多樣豐富，各地移民文化交融，就像一本厚厚的百科全書，東西南北各有風情。東岸古老西岸前衛，南方嬌懶中部原始，到底要從何玩起？就讓Jumper帶你參觀位於北美，世界上最大國之一的美國。往下至南美，到位於秘魯的「天空之城」馬丘比丘，登上被群山包圍的世界遺跡！" },
                { num: "mentor 131415", title: "大洋洲", content: "位於南太平洋上的無數國度，四周被美麗的蔚藍海洋包圍，大洋洲上的海島國家一直是許多人心中的首選度假勝地。跟著jumper的腳步，將帶您一覽澳大利亞所擁有的國寶動物—袋鼠及無尾熊，並帶您前往擁有壯麗景致、冰河與火山奇景共存的紐西蘭國度，又或是那些最令人嚮往旅遊的大溪地、斐濟等，我們將與您一同感受，那專屬於南半球的島嶼風情。" }
            ],
            items: [
                { name: "circle-carousel__item", num: "1", mentorid: "123", background: "./images/index/content/africa.jpg", circle: "background-image: url('./images/index/content/africa_circle.svg')" },
                { name: "circle-carousel__item", num: "2", mentorid: "456", background: "./images/index/content/europe1.jpg", circle: "background-image: url('./images/index/content/europe_circle.svg')" },
                { name: "circle-carousel__item active", num: "3", mentorid: "789", background: "./images/index/content/asia.jpg", circle: "background-image: url('./images/index/content/asia_circle.svg')" },
                { name: "circle-carousel__item", num: "4", mentorid: "101112", background: "./images/index/content/america4.jpg", circle: "background-image: url('./images/index/content/america_circle.svg')" },
                { name: "circle-carousel__item", num: "5", mentorid: "131415", background: "./images/index/content/oceanina1.jpg", circle: "background-image: url('./images/index/content/oceanina_circle.svg')" },
                { name: "circle-carousel__item", num: "6", mentorid: "123", background: "./images/index/content/africa.jpg", circle: "background-image: url('./images/index/content/africa_circle.svg')" },
                { name: "circle-carousel__item", num: "7", mentorid: "456", background: "./images/index/content/europe1.jpg", circle: "background-image: url('./images/index/content/europe_circle.svg')" },
                { name: "circle-carousel__item active", num: "8", mentorid: "789", background: "./images/index/content/asia.jpg", circle: "background-image: url('./images/index/content/asia_circle.svg')" },
                { name: "circle-carousel__item", num: "9", mentorid: "101112", background: "./images/index/content/america4.jpg", circle: "background-image: url('./images/index/content/america_circle.svg')" },
                { name: "circle-carousel__item", num: "10", mentorid: "131415", background: "./images/index/content/oceanina1.jpg", circle: "background-image: url('./images/index/content/oceanina_circle.svg')" },

            ]
        }
    }, mounted() {
        // 圓形輪播
        var container = $('#circle-carousel'),
            centerX = container.width() / 2,
            centerY = container.height() / 2,
            angle = 0,
            radius = 300;

        var carouselItems = $('.circle-carousel__item'),
            totalItems = carouselItems.length;

        carouselItems.each(function (i, e) {
            var w2 = $(e).outerWidth(true) / 2,
                h2 = $(e).outerHeight(true) / 2,
                angle = 360 / totalItems * i,
                x = Math.round(centerX + radius * Math.sin(angle * Math.PI / 180)),
                y = Math.round(centerY + radius * -Math.cos(angle * Math.PI / 180));
            $(e).css({ right: x - w2, top: y - h2 });
        });

        var rotate = 360 / totalItems
        var rotated = -rotate / 2

        // 初始設定
        $('#circle-carousel').css('transform', 'rotate(' + -rotate / 2 + 'deg)')
        $('.circle-carousel__item div').css('transform', 'rotate(' + rotate / 2 + 'deg)')
        $('.active').prev().addClass('next-to-active')
        $('.active').next().addClass('next-to-active')
        $('#blade').css('background-image', 'url("' + $('.active').data('background') + '")')
        $('.mentor.' + $('.active').data('mentorid')).addClass('mentor--show')

        $('.circle-carousel__item').click(function () {
            // console.log('current rotated: ', rotated)
            console.log($(this).data("num"));
            var thisNum = $(this).data("num");
            var currentNum = $('.active').data('num')

            var numOfRotations = (thisNum - currentNum)
            if (numOfRotations < -totalItems / 2) {
                numOfRotations += totalItems
            }
            if (numOfRotations > totalItems / 2) {
                numOfRotations -= totalItems
            }

            rotated += (rotate * numOfRotations)

            //   console.log('after rotated: ', rotated)
            $('#circle-carousel').css('transform', 'rotate(' + rotated + 'deg)')
            $('.circle-carousel__item div').css('transform', 'rotate(' + -rotated + 'deg)')
            $('.circle-carousel__item').removeClass('active').removeClass('next-to-active');
            $('.mentor').removeClass('mentor--show')

            $(this).addClass('active')
            $('.active').prev().addClass('next-to-active')
            $('.active').next().addClass('next-to-active')

            var thisCarouselItem = $(this)
            $('#blade').css('background-image', 'url("' + thisCarouselItem.data('background') + '")')
            setTimeout(function () {
                $('.mentor.' + thisCarouselItem.data('mentorid')).addClass('mentor--show')
            }, 200)
        })
    },

})
const vue_theme = new Vue({
    el: "#best_theme",
})


// 旅遊項目
const travel = Vue.component("travel-item", {
    template: `
    <div class="travel">
        <h2>熱門旅遊</h2>
        <div id="the-travel">
            <ul id="travel_container">
                <li id="travel_li" v-for="trip in trips"  data-aos="zoom-in-up" data-aos-duration="1200" data-aos-once="false">
                    <img class="place" :src="trip.photo" alt="看吳哥窟全景">
                    <div class="main_content">
                        <div class="first">
                            <div class="star_num">
                                <img src="./images/index/content/star.svg">
                                <p>{{trip.star}}</p>
                            </div> 
                            <p class="middle">({{trip.num}}).</p>
                            <p>{{trip.place}}</p>    
                        </div>
                        <h3>{{trip.title}}</h3>
                        <p class="third">每人 $ {{trip.price}} TWD 起</p>
                    </div>
                </li>    
            </ul>
        </div>
        <a href="travel_list.html">
            <button id="index_travel_more" class="btnL_line">更多旅遊</button>
        </a>
    </div>
    `,
    data() {
        return {
            trips: [
                { photo: "./images/index/content/travel_1.jpg", star: '5', num: "1503", place: "柬埔寨", title: "探索吳哥窟全景", price: "590" },
                { photo: "./images/index/content/travel_2.jpg", star: '5', num: "583", place: "埃及", title: "揭開古埃及神秘面紗", price: "720" },
                { photo: "./images/index/content/travel_3.jpg", star: '4.9', num: "888", place: "南非", title: "暢遊非洲野生動物園", price: "830" },
                { photo: "./images/index/content/travel_4.jpg", star: '4.9', num: "55", place: "義大利", title: "漫步古羅馬遺址", price: "690" },
            ]
        }
    }
})
const vue_travel = new Vue({
    el: "#popular_travel",
    data: {

    },
})

// 選擇我們
const video = Vue.component("the-reason", {
    template: `
    <div class="the_reason">
        <div class="text" data-aos="zoom-in" data-aos-duration="0">
            <h2>為何選擇我們？</h2>
            <ul class="reasons">
                <li v-for="reason in reasons">{{reason}}</li>
            </ul>
        </div>
        <iframe id="index_video" src="https://www.youtube.com/embed/pTq7qMTPHBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-aos="flip-left" data-aos-duration="1500" data-aos-delay="100" data-aos-once="false"></iframe>
    </div>
    `,
    data() {
        return {
            reasons: [
                "超過80位專業的線上導遊",
                "超過70個位於全球各地的知名觀光景點",
                "1200個曾舉辦過的線上旅遊",
                "最獨一無二的線上導覽互動",
            ]
        }
    }
})
const vue_video = new Vue({
    el: "#choose_us",
})


// 更多評價
const opinion = Vue.component("the-opinion", {
    template: `
    <div class="more_opinion">
        <aside class="fence_col"></aside>
        <div class="opinion_container">
            <h2>看看大家怎麼說 . . .</h2>
            <div id="opinion">
                <ul id="all_opinion" data-aos="fade-up" data-aos-duration="700">
                <li class="person" v-for="person in people">
                    <div class="top">
                        <img :src="person.avatar">
                        <div class="right">
                            <div class="star_num">
                                <img src="./images/index/content/star.svg">
                                <p>{{person.star}}</p>
                            </div>
                            <p>{{person.name}}</p>
                        </div>    
                    </div>
                    <p class="content">{{person.content}}</p>
                </li>
            </ul>
            </div>
            <button id="opinion_more" class="btnL_line">觀看更多</button>
        </div>
        <img id="going_top" src="./images/icon/toTop_dark.svg" alt="jump to top">
    </div>
    `,
    data() {
        return {
            people: [
                { avatar: "./images/index/content/people_1.svg", star: "5", name: 'Andy', content: "這趟動物之旅對我與我的朋友來說，是一次非常棒的體驗！Diana是一位了不起的導遊，對所有動物都非常了解。很高興看到美麗的非洲大草原和所有可愛的野生動物。強烈推薦給所有人！" },
                { avatar: "./images/index/content/people_2.svg", star: "5", name: '王家豪', content: "這是一場非常令人享受的旅程！我非常喜歡Federica導遊，帶我們從一個艾菲場鐵塔走到凱旋門，她透過專業的直播裝備向我們展示景點細節。我們這團大約有 15 人一起參加這場活動。這是一趟生動引人入勝的巴黎之旅。Federica 是一位完美的導遊——幽默風趣、健談且知識淵博。她設法在三個多個小時內帶我們走訪了大量景點，還有講述有趣的歷史故事，我們每個人都很喜歡她，強烈推薦給所有人！" },
                { avatar: "./images/index/content/people_3.svg", star: "5", name: 'Bruce Lee', content: "我與家人們一起參與了一場美好的旅程。因為山本導遊是一位非常會講故事的人，他的溫暖親切透過螢幕散發出來。山本總是熱情地回答我們的問題，他帶我們認識了很多關於伏見稻荷神社和神道儀式的知識等等。歡迎任何對日本神社文化有興趣的人，來參與山本所舉行的旅遊活動！" },
                { avatar: "./images/index/content/people_4.svg", star: "5", name: '陳曉婷', content: "雨果真是太厲害了！我們團隊之所以報名參加這樣的旅程，是為了可以更加凝聚團隊的向心力。我們多數人都在不同的時區，使得雨果在當地時間兩點時，依舊非常有活力地帶我們體驗曼哈頓夜生活！在雨果的帶領下我們所有人都大開眼界，迫不及待地想有一天飛去紐約！推薦這種線上旅遊的方式給所有人:)" },
                { avatar: "./images/index/content/people_5.svg", star: "5", name: 'William Chen', content: "這是我第一次參加線上旅遊。真的很推薦Lisa導遊了。她所帶領的森林之旅非常放鬆療癒。她不僅告訴了我很多阿里山的故事，旅程沿途也教我認識了非常多植物。能跟著她的腳步線上走訪阿里山，是件非常開心的事情。" },
                { avatar: "./images/index/content/people_6.svg", star: "5", name: 'Silvia Lee', content: "這是我第三次參加本田導遊所舉辦的線上旅遊了。真的很喜歡本田所帶領的旅遊！這次參加他的京都旅程，彷彿我們真的從那裡穿過托里門，沿著森林的礫石步道走著。透過他的鏡頭，可以感受到溫暖的陽光穿過高大的樹木，還有潺潺的溪水聲。雖然現在因為疫情無法實際走訪京都，但參加本田的行程也是非常非常過癮啊！" },
            ]
        }
    },
    mounted() {
        $("#opinion_more").click(function () {
            $(".person").show();
        });

        $("#going_top").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000)
        })
    },
})

const vue_opinion = new Vue({
    el: "#more_opinion",
})

$(function () {
    AOS.init();
});

$(window).on('load', function () {
    AOS.refresh();
});