// ===== 全部旅遊 =====
Vue.component('all', {
    data() {
        return {  //組件的變數寫在這裡！
            items_counts: {
                besttrip: "",
                maintrip: "5",
                viewedtrip: "",
            },
            besttrip_items: [
                {
                    ID: 2,
                    link: "./travel_item.html?ID=2",
                    intro_pics: "./images/travel_list/1/2/0.jpg",
                    avatar: "./images/avatar/avatar6.jpg",
                    comment_count: "102",
                    star_num: "5",
                    place: "美國",
                    title: " 飛越世界奇景 尼加拉大瀑布",
                    event_price: "499",
                },
                {
                    ID: 38,
                    link: "./travel_item.html?ID=38",
                    intro_pics: "./images/travel_list/5/38/0.jpg",
                    avatar: "./images/avatar/avatar12.jpg",
                    comment_count: "30",
                    star_num: "4.8",
                    place: "澳大利亞",
                    title: "澳洲必遊行程  雪梨歌劇院",
                    event_price: "899",
                },
                {
                    ID: 22,
                    link: "./travel_item.html?ID=22",
                    intro_pics: "./images/travel_list/3/22/0.jpeg",
                    avatar: "./images/avatar/avatar3.jpg",
                    comment_count: "24",
                    star_num: "4.5",
                    place: "印度",
                    title: "印度最美的淚珠 泰姬瑪哈陵",
                    event_price: "599",
                },
                {
                    ID: 23,
                    link: "./travel_item.html?ID=23",
                    intro_pics: "./images/travel_list/3/23/0.jpg",
                    avatar: "./images/avatar/avatar16.jpg",
                    comment_count: "30",
                    star_num: "5.0",
                    place: "韓國",
                    title: "向世人展示朝鮮歷史的風采  景福宮",
                    event_price: "999",
                },
                {
                    ID: 15,
                    link: "./travel_item.html?ID=15",
                    intro_pics: "./images/travel_list/2/15/0.jpg",
                    avatar: "./images/avatar/avatar5.jpg",
                    comment_count: "30",
                    star_num: "4.6",
                    place: "德國",
                    title: "童話世界的城堡  探索新天鵝堡",
                    event_price: "999",
                },
                {
                    ID: 14,
                    link: "./travel_item.html?ID=14",
                    intro_pics: "./images/travel_list/2/14/0.jpg",
                    avatar: "./images/avatar/avatar14.jpg",
                    comment_count: "24",
                    star_num: "4.3",
                    place: "西班牙",
                    title: "深度品味伊比利魅力  愛上西班牙的美",
                    event_price: "499",
                },
                {
                    ID: 13,
                    link: "./travel_item.html?ID=13",
                    intro_pics: "./images/travel_list/2/13/0.jpg",
                    avatar: "./images/avatar/avatar4.jpg",
                    comment_count: "30",
                    star_num: "5",
                    place: "希臘",
                    title: "來趟浪漫的地中海之旅  欣賞如童話般美景",
                    event_price: "899",
                },
                {
                    ID: 18,
                    link: "./travel_item.html?ID=18",
                    intro_pics: "./images/travel_list/3/18/0.jpg",
                    avatar: "./images/avatar/avatar18.jpg",
                    comment_count: "24",
                    star_num: "5",
                    place: "泰國",
                    title: "泰國黃金海岸  欣賞Pattaya的海岸風光",
                    event_price: "499",
                },
                {
                    ID: 27,
                    link: "./travel_item.html?ID=27",
                    intro_pics: "./images/travel_list/4/27/0.jpg",
                    avatar: "./images/avatar/avatar9.jpg",
                    comment_count: "30",
                    star_num: "4.6",
                    place: "埃及",
                    title: "走訪世界最大沙漠  撒哈拉沙漠",
                    event_price: "599",
                },
                {
                    ID: 40,
                    link: "./travel_item.html?ID=40",
                    intro_pics: "./images/travel_list/5/40/0.jpg",
                    avatar: "./images/avatar/avatar6.jpg",
                    comment_count: "36",
                    star_num: "4.7",
                    place: "紐西蘭",
                    title: "來去紐西蘭農場體驗",
                    event_price: "999",
                }
            ],
            maintrip_items: [
                {
                    ID: 1,
                    cat: 'us',
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/1/2/0.jpg",
                    subject: "美洲",
                    title: "飛越世界奇景 體驗美洲讓人歎為觀止的尼加拉大瀑布",
                },
                {
                    ID: 2,
                    cat: 'eu',
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/250/louvre.jpg",
                    subject: "歐洲",
                    title: " 羅浮宮象徵藝術，撼動人心之情久久保留",
                },
                {
                    ID: 3,
                    cat: 'as',
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/250/kyoto.jpg",
                    subject: "亞洲",
                    title: "日本的千年古都，歷史的記憶，一同深度挖掘京都魅力",
                },
                {
                    ID: 4,
                    cat: 'af',
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/250/africa_elephant.jpg",
                    subject: "非洲",
                    title: "探索非洲，感受非洲大草原的野性美！",
                },

                {
                    ID: 5,
                    cat: 'oc',
                    link: "./travel_item.html",
                    intro_pics: "./images/travel_list/250/goldenbay.jpg",
                    subject: "大洋洲",
                    title: "玩膩了亞洲，把觸角伸到南半球！體驗壯麗美感！",
                },
            ],
            viewedtrip_items: [
                {
                    ID: 5,
                    link: "./travel_item.html?ID=5",
                    intro_pics: "./images/travel_list/1/5/0.jpg",
                    avatar: "./images/avatar/avatar12.jpg",
                    comment_count: "28",
                    star_num: "5.0",
                    place: "墨西哥",
                    title: "墨西哥亡靈節  溫柔看待死亡、優雅慶祝生命",
                    event_price: "499",
                },
                {
                    ID: 7,
                    link: "./travel_item.html?ID=7",
                    intro_pics: "./images/travel_list/1/7/0.jpg",
                    avatar: "./images/avatar/avatar19.jpg",
                    comment_count: "30",
                    star_num: "4.6",
                    place: "加拿大",
                    title: "心醉加拿大東岸  楓葉大道璀璨黃金行",
                    event_price: "599",
                },
                {
                    ID: 11,
                    link: "./travel_item.html?ID=11",
                    intro_pics: "./images/travel_list/2/11/0.jpg",
                    avatar: "./images/avatar/avatar6.jpg",
                    comment_count: "18",
                    star_num: "4.7",
                    place: "芬蘭",
                    title: "來去芬蘭追極光",
                    event_price: "999",
                },
                {
                    ID: 26,
                    link: "./travel_item.html?ID=26",
                    intro_pics: "./images/travel_list/4/26/0.jpg",
                    avatar: "./images/avatar/avatar17.jpg",
                    comment_count: "18",
                    star_num: "5",
                    place: "馬達加斯加",
                    title: "來一場馬達加斯加奇妙的生態之旅",
                    event_price: "699",
                },
                {
                    ID: 9,
                    link: "./travel_item.html?ID=9",
                    intro_pics: "./images/travel_list/2/9/0.jpg",
                    avatar: "./images/avatar/avatar17.jpg",
                    comment_count: "36",
                    star_num: "4.7",
                    place: "英國",
                    title: "造訪Big Ben 大笨鐘  倫敦最具指標性的景觀",
                    event_price: "799",
                },
                {
                    ID: 6,
                    link: "./travel_item.html?ID=6",
                    intro_pics: "./images/travel_list/1/6/0.jpg",
                    avatar: "./images/avatar/avatar15.jpg",
                    comment_count: "24",
                    star_num: "4.3",
                    place: "阿根廷",
                    title: "南美巴黎  走訪布宜諾斯艾利斯",
                    event_price: "599",
                },
                {
                    ID: 10,
                    link: "./travel_item.html?ID=10",
                    intro_pics: "./images/travel_list/2/10/0.jpg",
                    avatar: "./images/avatar/avatar2.jpg",
                    comment_count: "36",
                    star_num: "4.7",
                    place: "法國",
                    title: "走訪巴黎  充滿浪漫文化的迷人城市",
                    event_price: "699",
                },
                {
                    ID: 17,
                    link: "./travel_item.html?ID=17",
                    intro_pics: "./images/travel_list/3/17/0.jpg",
                    avatar: "./images/avatar/avatar3.jpg",
                    comment_count: "30",
                    star_num: "4.8",
                    place: "日本",
                    title: "京都森林浴  一訪伏見稻荷神社",
                    event_price: "888",
                },
                {
                    ID: 24,
                    link: "./travel_item.html?ID=24",
                    intro_pics: "./images/travel_list/2/24/0.jpg",
                    avatar: "./images/avatar/avatar15.jpg",
                    comment_count: "36",
                    star_num: "4.8",
                    place: "俄羅斯",
                    title: "世界第八奇景  俄羅斯克里姆林宮",
                    event_price: "599",
                },
                {
                    ID: 28,
                    link: "./travel_item.html?ID=28",
                    intro_pics: "./images/travel_list/4/28/0.jpg",
                    avatar: "./images/avatar/avatar10.jpg",
                    comment_count: "24",
                    star_num: "4.8",
                    place: "摩洛哥",
                    title: "摩洛哥卡薩布蘭卡 北非的迷情風光和文化遺產",
                    event_price: "888",
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
                        <a href="./travel_item.html?ID=2">
                            <div class="trip_item">
                                <div class="pic">
                                    <img src="./images/travel_list/1/2/0.jpg">
                                </div>
                                <div class="content">
                                    <div class="avatar">
                                        <img src="./images/avatar/avatar7.jpg">
                                    </div>
                                    <div class="the_icon">
                                        <div class="share" @click="share"></div>
                                        <div class="fav" @click="changeiColor"></div>
                                    </div>
                                    <div class="the_star_num">
                                        <div>
                                            <img src="./images/index/content/star.svg">
                                        </div>
                                        <p class="star_get">4.6(40) · </p>
                                        <p class="area">美國</p>
                                    </div>
                                    <h4 class="trip_intro">
                                        飛越世界奇景 尼加拉大瀑布，此生必須一睹大自然最美產物之一：尼加拉大瀑布。尼加拉大瀑布以每秒150,000加侖的流水量傾瀉而下，氣勢...
                                    </h4>
                                    <p>每人 $599</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="right_block">
                        <a href="./travel_item.html?ID=3">
                            <div class="upper_area">
                                <div class="trip_item">
                                    <div class="pic upper">
                                        <img src="./images/travel_list/1/3/0.jpg">
                                    </div>
                                    <div class="content">
                                        <div class="avatar">
                                            <img src="./images/avatar/avatar9.jpg">
                                        </div>
                                        <div class="the_icon">
                                        <div class="share" @click="share"></div>
                                        <div class="fav" @click="changeiColor"></div>
                                        </div>
                                        <div class="the_star_num">
                                            <img src="./images/index/content/star.svg">
                                            <p class="star_get">4.6(35) · </p>
                                            <p class="area">祕魯</p>
                                        </div>
                                        <h4 class="trip_intro">
                                            登上「馬丘比丘」  一探印加帝國的奇幻美景
                                        </h4>
                                        <p class="startprice">每人 $499</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="./travel_item.html?ID=37">
                            <div class="down_area">
                                <div class="trip_item">
                                    <div class="pic down">
                                        <img src="./images/travel_list/5/37/0.jpg">
                                    </div>
                                    <div class="content">

                                        <div class="avatar">
                                            <img src="./images/avatar/avatar6.jpg">
                                        </div>
                                        <div class="the_icon">
                                            <div class="share" @click="share"></div>
                                            <div class="fav" @click="changeiColor"></div>
                                        </div>
                                        <div class="the_star_num">
                                            <img src="./images/index/content/star.svg">
                                            <p class="star_get">4.8(24) · </p>
                                            <p class="area">紐西蘭</p>
                                        </div>
                                        <h4 class="trip_intro">
                                            大自然的冰與火之歌  紐西蘭南島風光
                                        </h4>
                                        <p class="startprice">每人 $699</p>
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
                    <li v-for="item in besttrip_items" :id="item.ID" class="item">
                        <a :href="item.link">
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
            <div class="the_main_trip">
                <h3>本月主打的旅遊</h3>
                <div class="slider_arrow">
                    <p class="slider_count">顯示 {{items_counts.maintrip}} 個</p>
                </div>
                <ul class="owl-carousel owl-theme" id="bigcard">
                    <li v-for="item in maintrip_items" :id="item.ID" class="item">
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
                        <li v-for="item in viewedtrip_items" :id="item.ID" class="item">
                        <a :href="item.link">
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
    </div>
    `,
    methods: {
        changeiColor(e) {
            e.preventDefault();
            // console.log(e.target);
            e.target.classList.toggle('clicked');
        },

        loginCheck(itemid){ 
            // console.log(this);   
            let that = this;
            $.ajax({            
                method: "POST",
                url: "php/LoginCheck.php",
                data:{},            
                dataType: "text",
                success: function (response) {
                    // console.log('這是登入成功回傳的 memberID：' + response);
                    let memberID = response;
                    
                    if(response == ""){
                        //尚未登入->前往Login.php
                        alert('請先登入，將前往登入頁'); 
                        location.href = 'login.html';
                    }else{
                        console.log('登入成功');
                        // console.log('會員ID:' . memberID);
                        // getData();
                        // console.log(that);
                        that.is_fav(itemid) ? that.deleteFav(itemid, memberID) : that.addFav(itemid, memberID);
                    }              
                },
                error: function(exception) {
                    alert("數據載入失敗: " + exception.status);
                }
            });
        },

        // 取得所有最愛旅遊
        getAllFavs(){
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


        // 自訂事件：點擊顯示所有旅遊按鈕後，可以切換到指定的旅遊分類
        showMainTrip(cat) { // 使用自訂事件: 為了傳遞, 這裡的 showMainTrip  函式由 new Vue 處理
            console.log(cat);
            this.$emit('show-maintrips', cat);
        },
    },
    mounted() {
        //==================== 抓出最獲好評旅遊 =======================
        // axios.get('../../php/showTrip.php', {
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