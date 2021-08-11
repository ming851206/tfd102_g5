// ===== 美洲旅遊 =====
Vue.component('us', {
    data() {
        return {  //組件的變數寫在這裡！
            nowCat: 0, // 目前的旅遊分類編號
            category_list: [
                { cat: '美洲', },
                { cat: '歐洲', },
                { cat: '亞洲', },
                { cat: '非洲', },
                { cat: '大洋洲', },
            ],
            item_counts: "",
            items: [    
                // {
                //     id: 3,
                //     link: "./travel_info.html",
                //     cover_img: "./images/travel_list/250/niagarafalls.jpg",
                //     avatar: "./images/avatar/avatar2.jpg",
                //     counts: "102",
                //     star: "5",
                //     place: "美洲",
                //     trip_intro: "怔怔地望著尼基拉瓜大瀑布那滂薄的氣勢。",
                //     startprice: "399",
                // },
            ],
            favs: [
            ],
        };
    },
    template: `
    <div class="the_cat_trip">
        <h3>{{category_list[nowCat].cat}}旅遊</h3>
        <p class="slider_count">根據你的篩選條件搜尋到 {{item_counts}} 筆結果</p>
        <ul class="item_list">
            <li v-for="item in items" :id="item.ID" class="item">
                <a :href="item.link">
                    <div class="trip_item">
                        <img :src="item.intro_pics">
                        <div class="content">
                            <div class="avatar">
                                <img :src="item.intro_pics">
                            </div>
                            <div class="the_icon">
                                <div class="share" @click="share"></div>
                                <div class="fav" :class="{'clicked':is_fav(item.ID)}" @click.prevent="is_fav(item.ID) ? deleteFav(item.ID) : addFav(item.ID)"></div>
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

        // 取得所有最愛旅遊
        getAllFavs(){
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
    },
    mounted() {
        //==================== 篩選旅遊 =======================
        axios.get('http://localhost/php/showTrip.php', {
            params: {  // 帶參數
                cat: 1 // 1 代表美洲
            }
        }).then(res => {
            console.log("us");
            this.items = res.data; // 旅遊內容
            this.item_counts = res.data.length; // 旅遊筆數
            this.nowCat = parseInt(res.data[0].category) - 1; // 此旅遊的分類 ：抓取旅遊內容的 category 當作 key 去 mapping category_list
        });

        //==================== 取得所有最愛旅遊 =======================        
        this.getAllFavs();
    },
});
