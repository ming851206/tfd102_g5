
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
