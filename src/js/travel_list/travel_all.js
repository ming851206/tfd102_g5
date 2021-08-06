// ===== 全部旅遊 =====
Vue.component('all', {
    data() {
        return {  //組件的變數寫在這裡！
            items_counts: {
                besttrip: "4",
                maintrip: "4",
                viewedtrip: "7",
            },

            besttrip_items: [
                {
                    id: 2,
                    link: "./travel_info.html",
                    cover_img: "./images/travel_list/250/louvre.jpg",
                    avatar: "./images/avatar/avatar1.jpg",
                    counts: "102",
                    star: "5",
                    place: "歐洲",
                    trip_intro: " 羅浮宮象徵藝術，撼動人心之情久久保留",
                    startprice: "800",
                },
                {
                    id: 4,
                    link: "./travel_info.html",
                    cover_img: "./images/travel_list/250/glasshouse.jpg",
                    avatar: "./images/avatar/avatar19.jpg",
                    counts: "102",
                    star: "5",
                    place: "歐洲",
                    trip_intro: "於芬蘭玻璃屋邂逅屬於北極圈的夢幻自然",
                    startprice: "999",
                },
                {
                    id: 3,
                    link: "./travel_info.html",
                    cover_img: "./images/travel_list/250/niagarafalls.jpg",
                    avatar: "./images/avatar/avatar2.jpg",
                    counts: "102",
                    star: "5",
                    place: "美洲",
                    trip_intro: "怔怔地望著尼基拉瓜大瀑布那滂薄的氣勢。",
                    startprice: "399",
                },
                {
                    id: 6,
                    link: "./travel_info.html",
                    cover_img: "./images/travel_list/250/goldenbay.jpg",
                    avatar: "./images/avatar/avatar18.jpg",
                    counts: "102",
                    star: "5",
                    place: "大洋洲",
                    trip_intro: "來探索澳洲黃金海岸，吹吹海風踏踏浪",
                    startprice: "399",
                },
            ],
            maintrip_items: [
                {
                    id: 2,
                    link: "./travel_info.html",
                    cover_img: "./images/travel_list/250/louvre.jpg",
                    subject: "歐洲",
                    trip_intro: " 羅浮宮象徵藝術，撼動人心之情久久保留",
                },
                {
                    id: 4,
                    link: "./travel_info.html",
                    cover_img: "./images/travel_list/250/glasshouse.jpg",
                    subject: "歐洲",
                    trip_intro: "於芬蘭玻璃屋邂逅屬於北極圈的夢幻自然",
                },
                {
                    id: 3,
                    link: "./travel_info.html",
                    cover_img: "./images/travel_list/250/niagarafalls.jpg",
                    subject: "美洲",
                    trip_intro: "怔怔地望著尼基拉瓜大瀑布那滂薄的氣勢。",
                },
                {
                    id: 6,
                    link: "./travel_info.html",
                    cover_img: "./images/travel_list/250/goldenbay.jpg",
                    subject: "大洋洲",
                    trip_intro: "來探索澳洲黃金海岸，吹吹海風踏踏浪",
                },
            ],
            viewedtrip_items: [
                {
                    id: 1, link: "./travel_info.html",
                    cover_img: "./images/travel_list/400/bigben.jpg",
                    avatar: "./images/avatar/avatar18.jpg",
                    counts: "102",
                    star: "5",
                    place: "歐洲",
                    trip_intro: "Bib Ben 大笨鐘倫敦，最具指標性的景觀。",
                    startprice: "399",
                },
                {
                    id: 3,
                    link: "./travel_info.html",
                    cover_img: "./images/travel_list/250/niagarafalls.jpg",
                    avatar: "./images/avatar/avatar2.jpg",
                    counts: "102",
                    star: "5",
                    place: "美洲",
                    trip_intro: "怔怔地望著尼基拉瓜大瀑布那滂薄的氣勢。",
                    startprice: "399",
                },
                {
                    id: 4,
                    link: "./travel_info.html",
                    cover_img: "./images/travel_list/250/glasshouse.jpg",
                    avatar: "./images/avatar/avatar19.jpg",
                    counts: "102",
                    star: "5",
                    place: "歐洲",
                    trip_intro: "於芬蘭玻璃屋邂逅屬於北極圈的夢幻自然",
                    startprice: "999",
                },
                {
                    id: 5,
                    link: "./travel_info.html",
                    cover_img: "./images/travel_list/400/sydney.jpg",
                    avatar: "./images/avatar/avatar18.jpg",
                    counts: "102",
                    star: "5",
                    place: "大洋洲",
                    trip_intro: "雪梨絕不可錯過的地標等級景點",
                    startprice: "399",
                },
                {
                    id: 6,
                    link: "./travel_info.html",
                    cover_img: "./images/travel_list/250/maltive.jpg",
                    avatar: "./images/avatar/avatar18.jpg",
                    counts: "102",
                    star: "5",
                    place: "大洋洲",
                    trip_intro: "來探索澳洲黃金海岸，吹吹海風踏踏浪",
                    startprice: "399",
                },
                {
                    id: 7, link: "./travel_info.html",
                    cover_img: "./images/travel_list/250/africa_elephant.jpg",
                    avatar: "./images/avatar/avatar18.jpg",
                    counts: "102",
                    star: "5",
                    place: "非洲",
                    trip_intro: "遊走非洲野生動物園，見證動物大遷徙實現對冒險的渴望",
                    startprice: "399",
                },
                {
                    id: 8, link: "./travel_info.html",
                    cover_img: "./images/travel_list/250/maltive.jpg",
                    avatar: "./images/avatar/avatar.jpg",
                    counts: "102",
                    star: "5",
                    place: "歐洲",
                    trip_intro: "穿梭於千年的神話國度，走過了金邊和暹羅，一起看餘韻藏著悠久歷史的文明古國吳哥窟全景。",
                    startprice: "399",
                },
            ],
        };
    },
    template: `
    <div>
    <div class="the_new_trip">
                <h3>最新旅遊</h3>
                <div class="container">
                    <div class="left_block">
                        <a href="">
                            <div class="trip_item">
                                <div class="pic">
                                    <img src="./images/travel_list/800/wugerku.jpg">
                                </div>
                                <div class="content">
                                    <div class="avatar">
                                        <img src="./images/avatar/avatar.jpg">
                                    </div>
                                    <div class="the_icon">
                                        <div class="share" @click="share"></div>
                                        <div class="fav" @click="changeiColor"></div>
                                    </div>
                                    <div class="the_star_num">
                                        <div>
                                            <img src="./images/index/content/star.svg">
                                        </div>
                                        <p class="star_get">5(102) · </p>
                                        <p class="area">亞洲</p>
                                    </div>
                                    <h4 class="trip_intro">
                                        穿梭於千年的神話國度，走過了金邊和暹羅，一起看餘韻藏著悠久歷史的文明古國吳哥窟全景。
                                    </h4>
                                    <p>每人 $ 800 TWD 起</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="right_block">
                        <a href="">
                            <div class="upper_area">
                                <div class="trip_item">
                                    <div class="pic upper">
                                        <img src="./images/travel_list/250/africa_elephant.jpg">
                                    </div>
                                    <div class="content">
                                        <div class="avatar">
                                            <img src="./images/avatar/avatar1.jpg">
                                        </div>
                                        <div class="the_icon">
                                        <div class="share" @click="share"></div>
                                        <div class="fav" @click="changeiColor"></div>
                                        </div>
                                        <div class="the_star_num">
                                            <img src="./images/index/content/star.svg">
                                            <p class="star_get">5(102) · </p>
                                            <p class="area">非洲</p>
                                        </div>
                                        <h4 class="trip_intro">
                                            遊走非洲野生動物園，見證動物大遷徙實現對冒險的渴望
                                        </h4>
                                        <p class="startprice">每人 $ 800 TWD 起</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="">
                            <div class="down_area">
                                <div class="trip_item">
                                    <div class="pic down">
                                        <img src="./images/travel_list/250/louvre.jpg">
                                    </div>
                                    <div class="content">

                                        <div class="avatar">
                                            <img src="./images/avatar/avatar21.jpg">
                                        </div>
                                        <div class="the_icon">
                                            <div class="share" @click="share"></div>
                                            <div class="fav" @click="changeiColor"></div>
                                        </div>
                                        <div class="the_star_num">
                                            <img src="./images/index/content/star.svg">
                                            <p class="star_get">5(12) · </p>
                                            <p class="area">歐洲</p>
                                        </div>
                                        <h4 class="trip_intro">
                                            羅浮宮象徵藝術，撼動人心之情久久保留
                                        </h4>
                                        <p class="startprice">每人 $ 800 TWD 起</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="the_best_trip">
            <h3>最獲好評的旅遊</h3>
            <div class="slider_arrow">
                <p class="slider_count">顯示 {{items_counts.besttrip}} 個</p>
            </div>
            <ul class="owl-carousel owl-theme">
                <li v-for="item in besttrip_items" :id="item.id" class="item">
                    <a :href="item.link">
                        <div class="trip_item">
                            <img :src="item.cover_img">
                            <div class="content">
                                <div class="avatar">
                                    <img :src="item.avatar">
                                </div>
                                <div class="the_icon">
                                    <div class="share" @click="share"></div>
                                    <div class="fav" @click="changeiColor"></div>
                                </div>
                                <div class="the_star_num">
                                    <img src="./images/index/content/star.svg">
                                    <p class="star_get">{{item.star}}({{item.counts}}) · </p>
                                    <p class="area">{{item.place}}</p>
                                </div>
                                <h4 class="trip_intro">
                                    {{item.trip_intro}}
                                </h4>
                                <p class="startprice">每人$ {{item.startprice}} 起</p>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
            <div class="the_main_trip">
                <h3>本月主打的旅遊</h3>
                <div class="slider_arrow">
                    <p class="slider_count">顯示 {{items_counts.maintrip}} 個</p>
                </div>
                <ul class="owl-carousel owl-theme" id="bigcard">
                    <li v-for="item in maintrip_items" :id="item.id" class="item">
                                <a :href="item.link">
                                <div class="trip_item">
                                    <img :src="item.cover_img">

                                    <div class="content">
                                        <p class="subject">主題系列 · {{item.subject}}</p>
                                        <p class="txt">{{item.trip_intro}}</p>
                                        <button>顯示所有旅遊</button>
                                    </div>
                                </div>
                            </a>
                    </li>
                </ul>
            </div>
            <div class="the_viewed_trip">
                    <h3>近期瀏覽的旅遊</h3>
                    <div class="slider_arrow">
                        <p class="slider_count">顯示 {{items_counts.viewedtrip}} 個</p>
                    </div>
                    <ul class="owl-carousel owl-theme">
                        <li v-for="item in viewedtrip_items" :id="item.id" class="item">
                            <a :href="item.link">
                                <div class="trip_item">
                                    <img :src="item.cover_img">
                                    <div class="content">
                                        <div class="avatar">
                                            <img :src="item.avatar">
                                        </div>
                                        <div class="the_icon">
                                            <div class="share" @click="share"></div>
                                            <div class="fav" @click="changeiColor"></div>
                                        </div>
                                        <div class="the_star_num">
                                            <img src="./images/index/content/star.svg">
                                            <p class="star_get">{{item.star}}({{item.counts}}) · </p>
                                            <p class="area">{{item.place}}</p>
                                        </div>
                                        <h4 class="trip_intro">
                                            {{item.trip_intro}}
                                        </h4>
                                        <p class="startprice">每人$ {{item.startprice}} 起</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
         </div>
    </div>
    `,
    methods: {
        changeiColor(e) {
            e.preventDefault();
            // console.log(e.target);
            e.target.classList.toggle('clicked');

        },
        share() {
            FB.ui(
                {
                    method: 'share',
                    href: 'https://tibamef2e.com/tfd102/project/g5/travel_list.html',
                    // href: 'https://tibamef2e.com/tfd102/project/g5/postcard.html',
                },
                // callback
                function (response) {
                    if (response && !response.error_message) {
                        alert('分享至臉書，邀請朋友一起成為jumper!');
                    } else {
                        // alert('Error while posting.');
                    }
                }
            )
        },
    },
});