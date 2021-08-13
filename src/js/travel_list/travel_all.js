// ===== 全部旅遊 =====
Vue.component('all', {
    data() {
        return {  //組件的變數寫在這裡！
            items_counts: {
                besttrip: "5",
                maintrip: "5",
                viewedtrip: "7",
            },
            besttrip_items: [
                {
                    id: 1,
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/250/louvre.jpg",
                    avatar: "./images/avatar/avatar12.jpg",
                    comment_count: "102",
                    star_num: "5",
                    place: "歐洲",
                    title: " 羅浮宮象徵藝術，撼動人心之情久久保留",
                    event_price: "499",
                },
                {
                    id: 2,
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/250/glasshouse.jpg",
                    avatar: "./images/avatar/avatar13.jpg",
                    comment_count: "102",
                    star_num: "5",
                    place: "歐洲",
                    title: "在芬蘭玻璃屋邂逅屬於北極圈的夢幻自然",
                    event_price: "599",
                },
                {
                    id: 3,
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/1/2/0.jpg",
                    avatar: "./images/avatar/avatar14.jpg",
                    comment_count: "102",
                    star_num: "5",
                    place: "美洲",
                    title: "飛越世界奇景，尼加拉大瀑布",
                    event_price: "399",
                },
                {
                    id: 4,
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/250/goldenbay.jpg",
                    avatar: "./images/avatar/avatar15.jpg",
                    comment_count: "102",
                    star_num: "5",
                    place: "大洋洲",
                    title: "來探索大洋洲的美麗海岸，感受壯麗美感",
                    event_price: "399",
                },
                {
                    id: 5,
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/250/africa_elephant.jpg",
                    avatar: "./images/avatar/avatar18.jpg",
                    comment_count: "102",
                    star_num: "5",
                    place: "非洲",
                    title: "非洲神奇夢幻的野性美",
                    event_price: "399",
                },
            ],
            maintrip_items: [
                {
                    id: 1,
                    cat: 'us',
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/1/2/0.jpg",
                    subject: "美洲",
                    title: "飛越世界奇景 體驗美洲讓人歎為觀止的尼加拉大瀑布",
                },
                {
                    id: 2,
                    cat: 'eu',
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/250/louvre.jpg",
                    subject: "歐洲",
                    title: " 羅浮宮象徵藝術，撼動人心之情久久保留",
                },
                {
                    id: 3,
                    cat: 'as',
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/250/kyoto.jpg",
                    subject: "亞洲",
                    title: "日本的千年古都，歷史的記憶，一同深度挖掘京都魅力",
                },
                {
                    id: 4,
                    cat: 'af',
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/250/africa_elephant.jpg",
                    subject: "非洲",
                    title: "探索非洲，感受非洲大草原的野性美！",
                },

                {
                    id: 5,
                    cat: 'oc',
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/250/goldenbay.jpg",
                    subject: "大洋洲",
                    title: "玩膩了亞洲，把觸角伸到南半球！體驗壯麗美感！",
                },
            ],
            viewedtrip_items: [
                {
                    id: 1,
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/250/libertystatue.jpg",
                    avatar: "./images/avatar/avatar2.jpg",
                    comment_count: "15",
                    star_num: "4.6",
                    place: "美洲",
                    title: "自由女神朝聖之旅",
                    event_price: "399",
                },
                {
                    id: 6,
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/250/watermarket.jpg",
                    avatar: "./images/avatar/avatar3.jpg",
                    comment_count: "30",
                    star_num: "5",
                    place: "亞洲",
                    title: "馬辰水上市場藝術節，體驗當地水上文化之旅",
                    event_price: "399",
                },
                {
                    id: 4,
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/250/glasshouse.jpg",
                    avatar: "./images/avatar/avatar5.jpg",
                    comment_count: "102",
                    star_num: "5",
                    place: "歐洲",
                    title: "於芬蘭玻璃屋邂逅屬於北極圈的夢幻自然",
                    event_price: "999",
                },
                {
                    id: 5,
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/400/sydney.jpg",
                    avatar: "./images/avatar/avatar6.jpg",
                    comment_count: "102",
                    star_num: "5",
                    place: "大洋洲",
                    title: "雪梨絕不可錯過的地標等級景點",
                    event_price: "399",
                },
                {
                    id: 6,
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/250/maltive.jpg",
                    avatar: "./images/avatar/avatar11.jpg",
                    comment_count: "102",
                    star_num: "5",
                    place: "大洋洲",
                    title: "來探索澳洲黃金海岸，吹吹海風踏踏浪",
                    event_price: "399",
                },
                {
                    id: 7, link: "./travel_item.html",
                    intro_pics: "./images/travel_list/250/africa_elephant.jpg",
                    avatar: "./images/avatar/avatar8.jpg",
                    comment_count: "102",
                    star_num: "5",
                    place: "非洲",
                    title: "遊走非洲野生動物園，見證動物大遷徙實現對冒險的渴望",
                    event_price: "399",
                },
                {
                    id: 8, link: "./travel_item.html",
                    intro_pics: "./images/travel_list/250/wugerku.jpg",
                    avatar: "./images/avatar/avatar.jpg",
                    comment_count: "102",
                    star_num: "5",
                    place: "亞洲",
                    title: "穿梭於千年的神話國度，走過了金邊和暹羅，一起看餘韻藏著悠久歷史的文明古國吳哥窟全景。",
                    event_price: "399",
                },
            ],
            favs: [
            ],
        };
    },
    template: `
    <div>
    <div class="the_new_trip">
                <h3>最新旅遊</h3>
                <div class="container">
                    <div class="left_block">
                        <a href="./travel_item.html">
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
                                    <p>每人 $399</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="right_block">
                        <a href="./travel_item.html">
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
                                        <p class="startprice">每人 $399</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="./travel_item.html">
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
                                        <p class="startprice">每人 $499</p>
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
                    <p class="slider_count">顯示 {{besttrip_items.length}} 個</p>
                </div>
                <ul class="owl-carousel owl-theme">
                    <li v-for="item in besttrip_items" :id="item.id" class="item">
                        <a :href="item.link">
                            <div class="trip_item">
                            <img :src="item.intro_pics">
                            <div class="content">
                                    <div class="avatar">
                                        <img :src="item.avatar">
                                    </div>
                                    <div class="the_icon">
                                        <div class="share" @click="share"></div>
                                        <div class="fav" :class="{'clicked':is_fav(item.id)}" @click.prevent="is_fav(item.id) ? deleteFav(item.id) : addFav(item.id)"></div>
                                    </div>
                                    <div class="the_star_num">
                                        <img src="./images/index/content/star.svg">
                                        <p class="star_get">{{item.star_num}}({{item.comment_count}}) · </p>
                                        <p class="area">{{item.place}}</p>
                                    </div>
                                    <h4 class="trip_intro">
                                        {{item.title}}
                                    </h4>
                                    <p class="startprice">每人 $ {{item.event_price}} </p>
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
                            <a href="javascript:void(0)">
                                <div class="trip_item">
                                    <img :src="item.intro_pics">
                                    <div class="content">
                                        <p class="subject">主題系列 · {{item.subject}}</p>
                                        <p class="txt">{{item.title}}</p>
                                        <button @click="showMainTrip(item.cat)">顯示所有{{item.subject}}旅遊</button>
                                    </div>
                                </div>
                            </a>
                    </li>
                </ul>
            </div>
            <div class="the_viewed_trip">
                    <h3>最具特色的旅遊</h3>
                    <div class="slider_arrow">
                        <p class="slider_count">顯示 {{viewedtrip_items.length}} 個</p>
                    </div>
                    <ul class="owl-carousel owl-theme">
                        <li v-for="item in viewedtrip_items" :id="item.id" class="item">
                        <a :href="item.link">
                            <div class="trip_item">
                            <img :src="item.intro_pics">
                            <div class="content">
                                    <div class="avatar">
                                        <img :src="item.avatar">
                                    </div>
                                    <div class="the_icon">
                                        <div class="share" @click="share"></div>
                                        <div class="fav" :class="{'clicked':is_fav(item.id)}" @click.prevent="is_fav(item.id) ? deleteFav(item.id) : addFav(item.id)"></div>
                                    </div>
                                    <div class="the_star_num">
                                        <img src="./images/index/content/star.svg">
                                        <p class="star_get">{{item.star_num}}({{item.comment_count}}) · </p>
                                        <p class="area">{{item.place}}</p>
                                    </div>
                                    <h4 class="trip_intro">
                                        {{item.title}}
                                    </h4>
                                    <p class="startprice">每人 $ {{item.event_price}} </p>
                                </div>
                            </div>
                        </a>
                        </li>
                    </ul>
        </div>
    </div>
    `,
    methods: {
        // changeiColor(e) {
        //     e.preventDefault();
        //     // console.log(e.target);
        //     e.target.classList.toggle('clicked');

        // },
        // 取得所有最愛旅遊
        getAllFavs() {
            axios.get('http://localhost/php/showFav.php').then(res => {
                this.favs = res.data; // 旅遊內容
            });
        },

        // 判斷該旅遊是否為最愛
        is_fav(item_id) {
            // console.log(this.favs);
            let favs = this.favs; // 所有最愛的旅遊
            let click_status = false; // 預設點擊狀態是 ''
            favs.forEach(function (fav) { // 比對最愛旅遊的 id 是否等於 旅遊商品 id，如果是，click_status = true
                let fav_id = fav.product_info_ID;
                if (fav_id == item_id) {
                    // console.log('有一樣');
                    // console.log('這是 item_id' + item_id);
                    // console.log('這是 fav_id' + fav_id);
                    click_status = true;
                }
            });
            return click_status;
        },

        // addFav 新增最愛旅遊
        // 參數：itemID, memberID
        // method: post
        addFav(itemID) {
            // console.log(itemID);
            axios.post('http://localhost/php/addFav.php', JSON.stringify({
                memberID: 2,
                itemID: itemID,
            }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res =>
                // console.log(res.data)
                this.getAllFavs() // 重新取得一次新增後的最愛旅遊
            );
        },

        // removeFav 刪除最愛旅遊
        // 參數：itemID, memberID
        // method: post
        deleteFav(itemID) {
            axios.post('http://localhost/php/deleteFav.php', JSON.stringify({
                itemID: itemID,
            }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res =>
                // console.log(res.data)
                this.getAllFavs() // 重新取得一次刪除後的最愛旅遊
            );
        },

        // fb 分享
        share(e) {
            e.preventDefault();
            FB.ui(
                {
                    method: 'share',
                    href: 'https://tibamef2e.com/tfd102/project/g5/travel_list.html',
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


        // 自訂事件：點擊顯示所有旅遊按鈕後，可以切換到指定的旅遊分類
        showMainTrip(cat) { // 使用自訂事件: 為了傳遞, 這裡的 showMainTrip  函式由 new Vue 處理
            console.log(cat);
            this.$emit('show-maintrips', cat);
        },
    },
    mounted() {
        //==================== 抓出最獲好評旅遊 =======================
        // axios.get('http://localhost/php/showTrip.php', {
        //     params: {  // 帶參數
        //         cat: 'besttrip', //  代表最獲好評旅遊
        //     }
        // }).then(res => {
        //     // console.log(res.data);
        //     this.besttrip_items = res.data; // 旅遊內容
        //     //this.items_counts.besttrip = res.data.length; // 旅遊筆數
        // });
        //==================== 取得所有最愛旅遊 =======================        
        this.getAllFavs();
    },
});