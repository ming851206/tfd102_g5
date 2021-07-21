// 旅遊項目
const travel = Vue.component("travel_item", {
    template: `
        <ul id="travel_container">
            <li id="travel_li" v-for="trip in trips">
                <img class="place" src="./images/index/content/travel_1.jpg" alt="看吳哥窟全景">
                <div class="main_content">
                    <div class="first">
                        <div class="star_num">
                            <img src="./images/index/content//star.svg">
                            <p>{{trip.star}}</p>
                        </div> 
                        <p class="middle">({{trip.num}}).</p>
                        <p>{{trip.place}}</p>    
                    </div>
                    <h3>{{trip.title}}</h3>
                    <p class="third">每人 $ {{trip.price}} TWD 起</p>
                </div>
            </li>    
        </ul>
    `,
    data(){
        return {
            trips: [
                {photo: "travel_1", star: '5', num: "1503", place: "柬埔寨", title: "探索吳哥窟全景", price: "490"},
                {photo: "travel_2", star: '5', num: "583", place: "埃及", title: "揭開古埃及神秘面紗", price: "560"},
                {photo: "travel_3", star: '4.9', num: "888", place: "南非", title: "暢遊非洲野生動物園", price: "830"},
                {photo: "travel_4", star: '4.9', num: "55", place: "義大利", title: "漫步古羅馬遺址", price: "530"},
            ]
        }
    }
})
const vue_travel = new Vue({
    el: "#the-travel",
})


// 更多評價
const opinion = Vue.component("the-opinion",{
    template: `
        <ul id="all_opinion">
            <li class="person" v-for="person in people">
                <div class="top">
                    <!--<img src="./images/index/content/{{person.avatar}}.jpg">-->
                    <!--<img :src= {{person.avatar}}>-->
                    <img src="./images/index/content/people_1.png">
                    <div class="right">
                        <div class="star_num">
                            <img src="./images/index/content//star.svg">
                            <p>{{person.star}}</p>
                        </div>
                        <p>{{person.name}}</p>
                    </div>    
                </div>
                <p class="content">{{person.content}}</p>
            </li>
        </ul>
    `,
    data(){
        return{
            people: [
                {avatar: "people_1", star: "5",  name: 'Andy', content: "這趟動物之旅對我與我的朋友來說，是一次非常棒的體驗！Diana是一位了不起的導遊，對所有動物都非常了解。很高興看到美麗的非洲大草原和所有可愛的野生動物。強烈推薦給所有人！"},
                {avatar: "people_2", star: "5",  name: '王家豪', content: "這是一場非常令人享受的旅程！我非常喜歡Federica導遊，帶我們從一個艾菲場鐵塔走到凱旋門，她透過專業的直播裝備向我們展示景點細節。我們這團大約有 15 人一起參加這場活動。這是一趟生動引人入勝的巴黎之旅。Federica 是一位完美的導遊——幽默風趣、健談且知識淵博。她設法在三個多個小時內帶我們走訪了大量景點，還有講述有趣的歷史故事，我們每個人都很喜歡她，強烈推薦給所有人！"},
                {avatar: "people_3", star: "5",  name: 'Bruce Lee', content: "我與家人們一起參與了一場美好的旅程。因為山本導遊是一位非常會講故事的人，他的溫暖親切透過螢幕散發出來。山本總是熱情地回答我們的問題，他帶我們認識了很多關於伏見稻荷神社和神道儀式的知識等等。歡迎任何對日本神社文化有興趣的人，來參與山本所舉行的旅遊活動！"},
                {avatar: "people_4", star: "5",  name: 'William Chen', content: "雨果真是太厲害了！我們團隊之所以報名參加這樣的旅程，是為了可以更加凝聚團隊的向心力。我們多數人都在不同的時區，使得雨果在當地時間兩點時，依舊非常有活力地帶我們體驗曼哈頓夜生活！在雨果的帶領下我們所有人都大開眼界，迫不及待地想有一天飛去紐約！推薦這種線上旅遊的方式給所有人:)"},
                {avatar: "people_5", star: "5",  name: '陳曉婷', content: "這是我第一次參加線上旅遊。真的很推薦Lisa導遊了。她所帶領的森林之旅非常放鬆療癒。她不僅告訴了我很多阿里山的故事，旅程沿途也教我認識了非常多植物。能跟著她的腳步線上走訪阿里山，是件非常開心的事情。"},
                {avatar: "people_6", star: "5",  name: 'Silvia Lee', content: "這是我第三次參加本田導遊所舉辦的線上旅遊了。真的很喜歡本田所帶領的旅遊！這次參加他的京都旅程，彷彿我們真的從那裡穿過托里門，沿著森林的礫石步道走著。透過他的鏡頭，可以感受到溫暖的陽光穿過高大的樹木，還有潺潺的溪水聲。雖然現在因為疫情無法實際走訪京都，但參加本田的行程也是非常非常過癮啊！"},
            ]
        }
    }
})

const vue_opinion = new Vue({
    el: "#opinion",
    data: {
        
    }
})


$("#go_top").click(function(){
    $("html, body").animate({
        scrollTop: 0
    }, 1000)
})
