// ========== 旅程申請審核(綺) ========== 
const TripCheck = {
    template: `
    <div class="temp2">
        <h3>旅程申請審核</h3>
        <label>
            <input type="text" name="adm_query" placeholder="輸入旅程名稱" v-model="search">
            <img src="../images/icon/search.svg" alt="">
        </label>
        
            <div class="rejectBox" v-if="this.showBox == true">
                旅程退件原因:
                <img src="../images/icon/close.svg" alt="" @click="closeBox">
                <textarea name="" id="rejectText"></textarea>
                <button class="btnS" type="button">送出</button>
            </div>

        <table>
            <tr>
                <th>編號</th>
                <th>舉辦人</th>
                <th>旅程名稱</th>
                <th>旅程內容</th>
                <th>舉辦時間</th>
                <th class="numLimit">人數限制</th>
                <th>是否包場</th>
                <th>價格</th>
                <th>功能</th>
            </tr>
            <tr v-for="trip in filterList">
                <td v-text="trip.num"></td>
                <td v-text="trip.t_owner">Carlos</td>
                <td v-text="trip.t_title" class="textContent2"></td>
                <td v-text="trip.t_content" class="textContent3"></td>
                <td v-text="trip.t_startedat"></td>
                <td v-text="trip.t_numlimit"></td>
                <td v-text="trip.t_isgroup"></td>
                <td v-text="trip.t_price"></td>
                <td><button type="button" class="submitBtn">通過</button><button type="button" class="rejectBtn" @click="reject">退件</button></td>
            </tr>
        </table>
        
        <div class="pager2">
                <ul>
                    <li><a href="">&lt;</a></li>
                    <li><a href="" class="-on">1</a></li>
                    <li><a href="">2</a></li>
                    <li><a href="">3</a></li>
                    <li><a href="">4</a></li>
                    <li><a href="">5</a></li>
                    <li><a href="">&gt;</a></li>
                </ul>
        </div>
    </div>
    `,
    data() {
        return {
            search: '',
            timestamp: '',
            showBox: false,
            data: [
                {
                    num: 1,
                    t_owner: '錢夫人',
                    t_title: '自由女神朝聖之旅',
                    t_content: '紐約最美麗的地標，一起來一睹她美麗的風采',
                    t_startedat: '2023/12/31',
                    t_numlimit: '20',
                    t_isgroup: false,
                    t_price: '599',
                    t_ischeck: false,
                },
                {
                    num: 2,
                    t_owner: '糖糖',
                    t_title: '紐西蘭自然體驗',
                    t_content: '該體驗從農場現場直播，並將首先介紹新西蘭',
                    t_startedat: '2023/12/31',
                    t_numlimit: '20',
                    t_isgroup: false,
                    t_price: '599',
                    t_ischeck: false,
                },
                {
                    num: 3,
                    t_owner: '宮本寶藏',
                    t_title: '京都森林浴',
                    t_content: '大多數遊客為了千鳥居而造訪伏見稻荷神社，但很少深入了解這座神社的歷史和傳統。',
                    t_startedat: '2023/12/31',
                    t_numlimit: '20',
                    t_isgroup: false,
                    t_price: '599',
                    t_ischeck: false,
                },
                {
                    num: 4,
                    t_owner: '金貝貝',
                    t_title: '環遊世界180天遊覽',
                    t_content: '咿咿呀呀咿咿呀呀咿咿呀呀咿咿呀呀咿咿呀呀咿咿呀呀',
                    t_startedat: '2023/12/31',
                    t_numlimit: '20',
                    t_isgroup: false,
                    t_price: '599',
                    t_ischeck: false,
                },
                {
                    num: 1,
                    t_owner: '錢夫人',
                    t_title: '自由女神朝聖之旅',
                    t_content: '紐約最美麗的地標，一起來一睹她美麗的風采',
                    t_startedat: '2023/12/31',
                    t_numlimit: '20',
                    t_isgroup: false,
                    t_price: '599',
                    t_ischeck: false,
                },
                {
                    num: 2,
                    t_owner: '糖糖',
                    t_title: '紐西蘭自然體驗',
                    t_content: '該體驗從農場現場直播，並將首先介紹新西蘭',
                    t_startedat: '2023/12/31',
                    t_numlimit: '20',
                    t_isgroup: false,
                    t_price: '599',
                    t_ischeck: false,
                },
                {
                    num: 3,
                    t_owner: '宮本寶藏',
                    t_title: '京都森林浴',
                    t_content: '大多數遊客為了千鳥居而造訪伏見稻荷神社，但很少深入了解這座神社的歷史和傳統。',
                    t_startedat: '2023/12/31',
                    t_numlimit: '20',
                    t_isgroup: false,
                    t_price: '599',
                    t_ischeck: false,
                },
                {
                    num: 4,
                    t_owner: '金貝貝',
                    t_title: '環遊世界180天遊覽',
                    t_content: '咿咿呀呀咿咿呀呀咿咿呀呀咿咿呀呀咿咿呀呀咿咿呀呀',
                    t_startedat: '2023/12/31',
                    t_numlimit: '20',
                    t_isgroup: false,
                    t_price: '599',
                    t_ischeck: false,
                },
                {
                    num: 1,
                    t_owner: '錢夫人',
                    t_title: '自由女神朝聖之旅',
                    t_content: '紐約最美麗的地標，一起來一睹她美麗的風采',
                    t_startedat: '2023/12/31',
                    t_numlimit: '20',
                    t_isgroup: false,
                    t_price: '599',
                    t_ischeck: false,
                },
                {
                    num: 2,
                    t_owner: '糖糖',
                    t_title: '紐西蘭自然體驗',
                    t_content: '該體驗從農場現場直播，並將首先介紹新西蘭',
                    t_startedat: '2023/12/31',
                    t_numlimit: '20',
                    t_isgroup: false,
                    t_price: '599',
                    t_ischeck: false,
                },
                {
                    num: 3,
                    t_owner: '宮本寶藏',
                    t_title: '京都森林浴',
                    t_content: '大多數遊客為了千鳥居而造訪伏見稻荷神社，但很少深入了解這座神社的歷史和傳統。',
                    t_startedat: '2023/12/31',
                    t_numlimit: '20',
                    t_isgroup: false,
                    t_price: '599',
                    t_ischeck: false,
                },
                {
                    num: 4,
                    t_owner: '金貝貝',
                    t_title: '環遊世界180天遊覽',
                    t_content: '咿咿呀呀咿咿呀呀咿咿呀呀咿咿呀呀咿咿呀呀咿咿呀呀',
                    t_startedat: '2023/12/31',
                    t_numlimit: '20',
                    t_isgroup: false,
                    t_price: '599',
                    t_ischeck: false,
                },
                {
                    num: 1,
                    t_owner: '錢夫人',
                    t_title: '自由女神朝聖之旅',
                    t_content: '紐約最美麗的地標，一起來一睹她美麗的風采',
                    t_startedat: '2023/12/31',
                    t_numlimit: '20',
                    t_isgroup: false,
                    t_price: '599',
                    t_ischeck: false,
                },
                {
                    num: 2,
                    t_owner: '糖糖',
                    t_title: '紐西蘭自然體驗',
                    t_content: '該體驗從農場現場直播，並將首先介紹新西蘭',
                    t_startedat: '2023/12/31',
                    t_numlimit: '20',
                    t_isgroup: false,
                    t_price: '599',
                    t_ischeck: false,
                },
                {
                    num: 3,
                    t_owner: '宮本寶藏',
                    t_title: '京都森林浴',
                    t_content: '大多數遊客為了千鳥居而造訪伏見稻荷神社，但很少深入了解這座神社的歷史和傳統。',
                    t_startedat: '2023/12/31',
                    t_numlimit: '20',
                    t_isgroup: false,
                    t_price: '599',
                    t_ischeck: false,
                },
                {
                    num: 4,
                    t_owner: '金貝貝',
                    t_title: '環遊世界180天遊覽',
                    t_content: '咿咿呀呀咿咿呀呀咿咿呀呀咿咿呀呀咿咿呀呀咿咿呀呀',
                    t_startedat: '2023/12/31',
                    t_numlimit: '20',
                    t_isgroup: false,
                    t_price: '599',
                    t_ischeck: false,
                },
            ],
        }
    },
    methods: {
        reject(){
            this.showBox = true;
        },
        closeBox(){
            this.showBox = false;
        },
        timestampToTime(timestamp) {

            var date = new Date(timestamp * 1000);//時間戳為10位需*1000，時間戳為13位的話不需乘1000
            Y = date.getFullYear() + '/';
            M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
            D = date.getDate() + ' ';
            h = date.getHours() + ':';
            m = date.getMinutes() + ':';
            s = date.getSeconds();
            return this.timestamp = Y + M + D;

        }
    },
    computed: {
        filterList() { //搜尋功能
            return this.data.filter((trip) => { //把data送下來使用filter功能
                return trip.t_title.includes(this.search);
            })
        },
    },
}