// =====  大洋洲旅遊 =====
Vue.component('oc', {
    data() {
        return {  //組件的變數寫在這裡！
            nowCat: 4,
            category_list: [
                { cat: '美洲', },
                { cat: '歐洲', },
                { cat: '亞洲', },
                { cat: '非洲', },
                { cat: '大洋洲', },
            ],
            item_counts: "",
            items: [ // 所有旅遊
                // {
                //     id: 3,
                //     link: "./travel_item.html",
                //     cover_img: "./images/travel_list/250/niagarafalls.jpg",
                //     avatar: "./images/avatar/avatar2.jpg",
                //     counts: "102",
                //     star: "5",
                //     place: "美洲",
                //     trip_intro: "怔怔地望著尼基拉瓜大瀑布那滂薄的氣勢。",
                //     startprice: "399",
                // },
            ],
            favs: [  // 最愛旅遊

            ],
        };
    },
    template: `
    <div class="the_cat_trip">
        <h3>{{category_list[nowCat].cat}}旅遊</h3>
        <p class="slider_count">根據你的篩選條件搜尋到 {{item_counts}} 筆結果</p>
        <ul class="item_list">
            <li v-for="item in items" :id="item.ID" class="item">
                <a :href="changeLink(item.ID)">
                    <div class="trip_item">
                        <img :src="item.intro_pics">
                        <div class="content">
                            <div class="avatar">
                                <img :src="item.avatar">
                            </div>
                            <div class="the_icon">
                                <div class="share" @click="share"></div>
                                <div class="fav" :class="{'clicked':is_fav(item.ID)}" @click.prevent="loginCheck(item.ID)"></div>

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


    `,
    methods: {
        changeLink(id) {
            // console.log('測試變換連結' + id);
            return './travel_item.html?ID=' + id;
        },
        changeiColor(e) {
            e.preventDefault();
            // console.log(e.target);
            e.target.classList.toggle('clicked');
        },

        loginCheck(itemid) {
            // console.log(this);
            let that = this;
            $.ajax({
                method: "POST",
                url: "php/LoginCheck.php",
                data: {},
                dataType: "text",
                success: function (response) {
                    // console.log('這是登入成功回傳的 memberID：' + response);
                    let memberID = response;

                    if (response == "") {
                        //尚未登入->前往Login.php
                        alert('請先登入，將前往登入頁');
                        location.href = 'login.html';
                    } else {
                        console.log('登入成功');
                        // console.log('會員ID:' . memberID);
                        // getData();
                        // console.log(that);
                        that.is_fav(itemid) ? that.deleteFav(itemid, memberID) : that.addFav(itemid, memberID);
                    }
                },
                error: function (exception) {
                    alert("數據載入失敗: " + exception.status);
                }
            });
        },

        // 取得所有最愛旅遊
        getAllFavs() {
            axios.get('./php/showFav.php').then(res => {
                this.favs = res.data; // 旅遊內容
            });
        },

        // 判斷該旅遊是否為最愛
        is_fav(item_id) {
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
        addFav(itemID, memberID) {
            axios.post('./php/addFav.php', JSON.stringify({
                memberID: memberID,
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
        deleteFav(itemID, memberID) {
            axios.post('./php/deleteFav.php', JSON.stringify({
                memberID: memberID,
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
    // watch:{
    //     favs(){   // 偵聽 favs 的變動，有變動時就重新抓取最愛旅遊
    //         this.getAllFavs();
    //     }
    // },
    mounted() {
        //==================== 篩選旅遊 =======================
        axios.get('./php/showTrip.php', {
            params: {  // 帶參數
                cat: 5 // 5 代表大洋洲
            }
        }).then(res => {
            // console.log('as');
            this.items = res.data; // 旅遊內容
            this.item_counts = res.data.length; // 旅遊筆數
        });
        //==================== 取得所有最愛旅遊 =======================
        this.getAllFavs();
    },
});