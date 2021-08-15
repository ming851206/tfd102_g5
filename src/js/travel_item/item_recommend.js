const recommend = Vue.component("recommend-items", {
    template:`
        <div>
            <h2>相信你喜歡</h2>
            <ul class="recommend_container">
                <li v-for="item in recommend_items" :id="item.id" class="item">
                    <a :href="item.link">
                        <div class="trip_item">
                            <img :src="item.cover_img">
                            <div class="content">
                                <div class="avatar">
                                    <img :src="item.avatar">
                                </div>
                                <div class="the_icon">
                                    <div class="share" @click="share"></div>
                                    <div class="fav" :class="{'clicked':is_fav(item.id)}" @click.prevent="is_fav(item.id) ? deleteFav(item.id) : addFav(item.id)"></div>
                                </div>
                                <div class="the_star_num">
                                    <img src="./images/index/content/star.svg">&nbsp;{{item.star}}
                                    <p class="star_get">({{item.counts}})</p>&emsp;
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

    data() {
        return {
            recommend_items: [
                {
                    id: 2,
                    link: "./travel_item.html",
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
                    link: "./travel_item.html",
                    cover_img: "./images/travel_list/250/glasshouse.jpg",
                    avatar: "./images/avatar/avatar6.jpg",
                    counts: "102",
                    star: "5",
                    place: "歐洲",
                    trip_intro: "於芬蘭玻璃屋邂逅屬於北極圈的夢幻自然",
                    startprice: "999",
                },
                {
                    id: 3,
                    link: "./travel_item.html",
                    cover_img: "./images/travel_list/400/bigben.jpg",
                    avatar: "./images/avatar/avatar.jpg",
                    counts: "102",
                    star: "5",
                    place: "歐洲",
                    trip_intro: "Bib Ben 大笨鐘倫敦，最具指標性的景觀。",
                    startprice: "399",
                },
                {
                    id: 6,
                    link: "./travel_item.html",
                    cover_img: "./images/travel_list/250/goldenbay.jpg",
                    avatar: "./images/avatar/avatar18.jpg",
                    counts: "102",
                    star: "5",
                    place: "大洋洲",
                    trip_intro: "來探索澳洲黃金海岸，吹吹海風踏踏浪",
                    startprice: "399",
                },
            ],
            favs: [],
        }
    },
    methods:{
        share(e) {
            e.preventDefault();
            FB.ui(
                {
                    method: 'share',
                    href: 'https://tibamef2e.com/tfd102/project/g5/travel_item.html',
                },
                function (response) {
                    if (response && !response.error_message) {
                        alert('分享至臉書，邀請朋友一起成為jumper!');
                    } else {
                        // alert('Error while posting.');
                    }
                }
            )
        },
        // 取得所有最愛旅遊
        getAllFavs() {
            axios.get('./php/showFav.php').then(res => {
                this.favs = res.data; // 旅遊內容
            });
        },

        // 判斷該旅遊是否為最愛
        is_fav(item_id) {
            // $(function (item_id){
            //     item_id.preventDefault();
            //     item_id.target.classList.toggle('clicked');
            // })

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
        addFav(itemID) {
            // console.log(itemID);
            axios.post('./php/addFav.php', JSON.stringify({
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

        // removeFav
        // 參數：itemID, memberID
        deleteFav(itemID) {
            axios.post('./php/deleteFav.php', JSON.stringify({
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
        mounted() {
            axios.post('./php/item_recommend_trip.php').then(res => {
                this.data = res.data;
                console.log(this.data);
            });
            //==================== 取得所有最愛旅遊 =======================        
            this.getAllFavs();
        },
    },
})
const vue_recommnetItem = new Vue({
    el: "#recommend_item",
})
