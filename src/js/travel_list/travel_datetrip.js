// ===== 搜尋旅遊 =====
Vue.component('filterDateTrip', {
    props: ['the-date'],
    data() {
        return {  //組件的變數寫在這裡！
            category: "符合該條件的旅遊",
            item_counts: "",
            items: [
                //     {
                //         id: 1,
                //         link: "./travel_item.html",
                //         cover_img: "./images/travel_list/250/louvre.jpg",
                //         avatar: "./images/avatar/avatar1.jpg",
                //         counts: "102",
                //         star: "5",
                //         place: "歐洲",
                //         trip_intro: " 羅浮宮象徵藝術，撼動人心之情久久保留",
                //         startprice: "800",
                //     },
            ],
            tempArray:[],
            favs: [  // 最愛旅遊

            ],
        };
    },
    template: `
    <div class="the_cat_trip">
    <h3>{{category}}: {{theDate}}</h3>
    <p class="slider_count">根據你所選擇的日期搜尋到 {{filterList.length}} 筆結果</p>
        <ul class="item_list">
            <li v-for="(item, index) in filterList" :id="item.ID" class="item">
                <a :href="item.link" @click="changeLink(index ,$event)">
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
        changeLink(index, event) {
            event.preventDefault();
            console.log(index);
            console.log(this.item);
            location = 'travel_item.html?ID=' + this.items[index].ID;
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
            axios.get('../../php/showFav.php').then(res => {
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
            axios.post('../../php/addFav.php', JSON.stringify({
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
            axios.post('../../php/deleteFav.php', JSON.stringify({
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
    computed: {
        filterList() { //搜尋功能
            
            SearchMonth = new Date(this.theDate).getMonth() + 1; // 取得搜尋月份
            SearchDate = new Date(this.theDate).getDate(); // 取得搜尋日

            this.tempArray =  this.items.filter((item) => { //把data送下來使用filter功能
                EventMonth = new Date(parseInt(item.started_at)).getMonth() + 1; // 取得旅程月份
                EventDate = new Date(parseInt(item.started_at)).getDate(); // 取得旅程日

                if (SearchMonth == EventMonth && SearchDate == EventDate){
                    console.log('yes');
                    return item;
                } else {
                    console.log('no');
                }

            })
            return this.tempArray;
        },
    },
    // watch:{
    //     favs(){   // 偵聽 favs 的變動，有變動時就重新抓取最愛旅遊
    //         this.getAllFavs();
    //     }
    // },
    mounted() {
        //==================== 搜尋旅遊 =======================
        axios.get('../../php/searchDateTrip.php', {
        }).then(res => {
            console.log('123');
            console.log(res.data);
            this.items = res.data; // 旅遊內容
        });

        //==================== 取得所有最愛旅遊 =======================        
        this.getAllFavs();
    },
});
