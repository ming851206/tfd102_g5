// ===== 篩選價格旅遊 =====
Vue.component('priceTrip', {
    props: ['the-price'],
    data() {
        return {  //組件的變數寫在這裡！
            category: "價格",
            item_counts: "",
            items: [
                //     {
                //         id: 1,
                //         link: "./travel_info.html",
                //         cover_img: "./images/travel_list/250/louvre.jpg",
                //         avatar: "./images/avatar/avatar1.jpg",
                //         counts: "102",
                //         star: "5",
                //         place: "歐洲",
                //         trip_intro: " 羅浮宮象徵藝術，撼動人心之情久久保留",
                //         startprice: "800",
                //     },
                //     {
                //         id: 2,
                //         link: "./travel_info.html",
                //         cover_img: "./images/travel_list/250/glasshouse.jpg",
                //         avatar: "./images/avatar/avatar19.jpg",
                //         counts: "102",
                //         star: "5",
                //         place: "歐洲",
                //         trip_intro: "於芬蘭玻璃屋邂逅屬於北極圈的夢幻自然",
                //         startprice: "999",
                //     },
                //     {
                //         id: 3,
                //         link: "./travel_info.html",
                //         cover_img: "./images/travel_list/250/niagarafalls.jpg",
                //         avatar: "./images/avatar/avatar2.jpg",
                //         counts: "102",
                //         star: "5",
                //         place: "美洲",
                //         trip_intro: "怔怔地望著尼基拉瓜大瀑布那滂薄的氣勢。",
                //         startprice: "399",
                //     },
                //     {
                //         id: 4,
                //         link: "./travel_info.html",
                //         cover_img: "./images/travel_list/250/goldenbay.jpg",
                //         avatar: "./images/avatar/avatar18.jpg",
                //         counts: "102",
                //         star: "5",
                //         place: "大洋洲",
                //         trip_intro: "來探索澳洲黃金海岸，吹吹海風踏踏浪",
                //         startprice: "399",
                //     },
                //     {
                //         id: 5,
                //         link: "./travel_info.html",
                //         cover_img: "./images/travel_list/400/sydney.jpg",
                //         avatar: "./images/avatar/avatar18.jpg",
                //         counts: "102",
                //         star: "5",
                //         place: "大洋洲",
                //         trip_intro: "雪梨絕不可錯過的地標等級景點",
                //         startprice: "399",
                //     },
                //     {
                //         id: 6,
                //         link: "./travel_info.html",
                //         cover_img: "./images/travel_list/250/africa_elephant.jpg",
                //         avatar: "./images/avatar/avatar18.jpg",
                //         counts: "102",
                //         star: "5",
                //         place: "非洲",
                //         trip_intro: "遊走非洲野生動物園，見證動物大遷徙實現對冒險的渴望",
                //         startprice: "399",
                //     },
                //     {
                //         id: 7, link: "./travel_info.html",
                //         cover_img: "./images/travel_list/250/maltive.jpg",
                //         avatar: "./images/avatar/avatar.jpg",
                //         counts: "102",   
                //         star: "5",
                //         place: "歐洲",
                //         trip_intro: "穿梭於千年的神話國度，走過了金邊和暹羅，一起看餘韻藏著悠久歷史的文明古國吳哥窟全景。",
                //         startprice: "399",
                //     },
            ]
        };
    },
    template: `
    <div class="the_cat_trip">
    <h3>{{category}}低於 $ {{thePrice}} 的旅遊</h3>
    <p class="slider_count">根據你的篩選條件搜尋到 {{filterList.length}} 筆結果</p>
        <ul class="item_list">
            <li v-for="item in filterList" :id="item.ID" class="item">
                <a :href="item.link">
                    <div class="trip_item">
                        <img :src="item.intro_pics">
                        <div class="content">
                            <div class="avatar">
                                <img :src="item.intro_pics">
                            </div>
                            <div class="the_icon">
                                <div class="share" @click="share"></div>
                                <div class="fav" @click="changeiColor"></div>
                            </div>
                            <div class="the_star_num">
                                <img src="./images/index/content/star.svg">
                                <p class="star_get">{{item.star_num}}({{item.comment_count}}) · </p>
                                <p class="area">{{item.place}}</p>
                            </div>
                            <h4 class="trip_intro">
                                {{item.title}}
                            </h4>
                            <p class="startprice">每人 $ {{item.event_price}} 起</p>
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
        share(e) {
            e.preventDefault();
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
            // console.log('測試有進來篩選');
            return this.items.filter((item) => { //把data送下來使用filter功能
                return item.event_price < parseInt(this.thePrice); // 低於搜尋價格的旅遊
            })
        },
    },
    mounted() {
        axios.get('http://localhost/php/searchTrip.php')
        .then(res => {
            // console.log('filter');
            // console.log(res.data);
            this.items = res.data; // 旅遊內容
        });
    },
});
