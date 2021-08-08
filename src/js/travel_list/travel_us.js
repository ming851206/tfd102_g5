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
                                <div class="fav" @click="changeiColor"></div>
                            </div>
                            <div class="the_star_num">
                                <img src="./images/index/content/star.svg">
                                <p class="star_get">{{item.star_num}}({{item.comment_count}}) · </p>
                                <p class="area">{{item.place}}</p>
                            </div>
                            <h4 class="trip_intro">
                                {{item.content}}
                            </h4>
                            <p class="startprice">每人 $499 起</p>
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
        //==========前->後axios傳值的寫法=============

        //    axios.post('http://localhost/g5/php/adm_orderList.php', JSON.stringify({
        //         name: this.data[0].o_username, 
        //         price: this.data[0].o_price,

        //     }), {
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        // 以上，前端丟json到後端


        //     }).then(res => console.log(res.data)); //非測試時請把clg改掉 (後端丟回json，前端需再處理)
        // }).then(res => this.data = res.data)


        //===========================================
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
     // axios.get('http://localhost/tfd102_g5/src/admin/php/orderList.php')
        // .then(res => this.data = res.data);
        //fetch('http://localhost/tfd102_g5/src/admin/php/orderList.php').then(res => console.log(res)); 
    },
});
