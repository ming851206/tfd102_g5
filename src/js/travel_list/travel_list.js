// =================== 以下為子組件 ===================
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

// ===== 美洲旅遊 =====
Vue.component('us', {
    data() {
        return {  //組件的變數寫在這裡！
            category: "美洲",
            item_counts: "1",
            items: [
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
            ],
        };
    },
    template: `
    <div class="the_cat_trip">
        <h3>{{category}}旅遊</h3>
        <p class="slider_count">根據你的篩選條件搜尋到 {{item_counts}} 筆結果</p>
        <ul class="item_list">
            <li v-for="item in items" :id="item.id" class="item">
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

// ===== 歐洲旅遊 =====
Vue.component('eu', {
    data() {
        return {  //組件的變數寫在這裡！
            category: "歐洲",
            item_counts: "3",
            items: [
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
                    id: 2,
                    link: "./travel_info.html",
                    cover_img: "./images/travel_list/250/louvre.jpg",
                    avatar: "./images/avatar/avatar1.jpg",
                    counts: "102",
                    star: "5",
                    place: "歐洲",
                    trip_intro: "  羅浮宮象徵藝術，撼動人心之情久久保留",
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
            ],
        };
    },
    template: `
    <div class="the_cat_trip">
        <h3>{{category}}旅遊</h3>
        <p class="slider_count">根據你的篩選條件搜尋到 {{item_counts}} 筆結果</p>
        <ul class="item_list">
            <li v-for="item in items" :id="item.id" class="item">
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

// ===== 亞洲旅遊 =====
Vue.component('as', {
    data() {
        return {  //組件的變數寫在這裡！
            category: "亞洲",
            item_counts: "1",
            items: [
                {
                    id: 8, link: "./travel_info.html",
                    cover_img: "./images/travel_list/800/wugerku.jpg",
                    avatar: "./images/avatar/avatar.jpg",
                    counts: "102",
                    star: "5",
                    place: "亞洲",
                    trip_intro: "穿梭於千年的神話國度，走過了金邊和暹羅，一起看餘韻藏著悠久歷史的文明古國吳哥窟全景。",
                    startprice: "399",
                },
            ],
        };
    },
    template: `
    <div class="the_cat_trip">
        <h3>{{category}}旅遊</h3>
        <p class="slider_count">根據你的篩選條件搜尋到 {{item_counts}} 筆結果</p>
        <ul class="item_list">
            <li v-for="item in items" :id="item.id" class="item">
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

// ===== 非洲旅遊 =====
Vue.component('af', {
    data() {
        return {  //組件的變數寫在這裡！
            category: "非洲",
            item_counts: "1",
            items: [
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
            ],
        };
    },
    template: `
    <div class="the_cat_trip">
        <h3>{{category}}旅遊</h3>
        <p class="slider_count">根據你的篩選條件搜尋到 {{item_counts}} 筆結果</p>
        <ul class="item_list">
            <li v-for="item in items" :id="item.id" class="item">
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

// ===== 大洋洲旅遊 =====
Vue.component('oc', {
    data() {
        return {  //組件的變數寫在這裡！
            category: "大洋洲",
            item_counts: "6",
            items: [
                {
                    id: 5,
                    link: "./travel_info.html",
                    cover_img: "./images/travel_list/400/sydney.jpg",
                    avatar: "./images/avatar/avatar18.jpg",
                    counts: "102",
                    star: "5",
                    place: "歐洲",
                    trip_intro: "雪梨絕不可錯過的地標等級景點",
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
            ]
        };
    },
    template: `
    <div class="the_cat_trip">
        <h3>{{category}}旅遊</h3>
        <p class="slider_count">根據你的篩選條件搜尋到 {{item_counts}} 筆結果</p>
        <ul class="item_list">
            <li v-for="item in items" :id="item.id" class="item">
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
    }
});



// ===== 搜尋旅遊 =====
Vue.component('filterTrip', {
    props: ['the-input'],
    data() {
        return {  //組件的變數寫在這裡！
            category: "你所搜尋的",
            item_counts: "7",
            items: [
                {
                    id: 1,
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
                    id: 2,
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
                    id: 4,
                    link: "./travel_info.html",
                    cover_img: "./images/travel_list/250/goldenbay.jpg",
                    avatar: "./images/avatar/avatar18.jpg",
                    counts: "102",
                    star: "5",
                    place: "大洋洲",
                    trip_intro: "來探索澳洲黃金海岸，吹吹海風踏踏浪",
                    startprice: "399",
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
                    cover_img: "./images/travel_list/250/africa_elephant.jpg",
                    avatar: "./images/avatar/avatar18.jpg",
                    counts: "102",
                    star: "5",
                    place: "非洲",
                    trip_intro: "遊走非洲野生動物園，見證動物大遷徙實現對冒險的渴望",
                    startprice: "399",
                },
                {
                    id: 7, link: "./travel_info.html",
                    cover_img: "./images/travel_list/250/maltive.jpg",
                    avatar: "./images/avatar/avatar.jpg",
                    counts: "102",
                    star: "5",
                    place: "歐洲",
                    trip_intro: "穿梭於千年的神話國度，走過了金邊和暹羅，一起看餘韻藏著悠久歷史的文明古國吳哥窟全景。",
                    startprice: "399",
                },
            ]
        };
    },
    template: `
    <div class="the_cat_trip">
        <h3>{{category}}: {{theInput}}</h3>
        <p class="slider_count">根據你的篩選條件搜尋到 {{filterList.length}} 筆結果</p>
        <ul class="item_list">
            <li v-for="item in filterList" :id="item.id" class="item">
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
    computed: {
        filterList() { //搜尋功能
            return this.items.filter((item) => { //把data送下來使用filter功能
                return item.trip_intro.includes(this.theInput);
            })
        },
    },
});
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



// 分享臉書
window.fbAsyncInit = function () {
    FB.init({
        appId: '385510642997838',
        xfbml: true,
        version: 'v2.4'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// 開啟 Modal 彈跳視窗
$(function () {

    // 開啟 Modal 彈跳視窗
    $("button.btn_modal").on("click", function () {
        $("div.overlay").fadeIn();
    });

    // 關閉 Modal
    $("button.btn_modal_close").on("click", function () {
        $("div.overlay").fadeOut();
    });

    // 商品數量
    
    var product_price = document.getElementsByClassName("product_price")[0];
    var num = document.getElementsByClassName("num")[0];
    product_price.addEventListener("mousemove", function () {
        console.log(this.value);
        num.innerHTML = this.value;
    });
});
