// ========== 旅程申請審核(綺) ==========
const TripCheck = {
    template: `
    <div class="temp2">
        <h3>旅程申請審核</h3>
        <label>
            <input type="text" name="adm_query" placeholder="輸入旅程名稱" v-model="search">
            <img src="../images/icon/search.svg" alt="">
        </label>

        <table>
            <tr>
                <th>編號</th>
                <th>舉辦人</th>
                <th>旅程名稱</th>
                <th>旅程內容</th>
                <th class="numLimit">人數限制</th>
                <th>價格</th>
                <th>功能</th>
            </tr>
            <tr v-for="(trip, index) in filterList">
                <td v-text="trip.ID"></td>
                <td v-text="trip.name"></td>
                <td v-text="trip.title" class="textContent2"></td>
                <td v-text="trip.content" class="textContent3"></td>
                <td v-text="trip.total_people"></td>
                <td v-text="trip.event_price"></td>
                <td><button type="button" class="submitBtn" @click="tripChecked(index)">通過</button><button type="button" class="rejectBtn" @click="reject(index)">退件</button></td>
            </tr>
        </table>
        <div class="rejectBox" v-if="this.showBox == true">
            編號{{this.boxID}}，旅程退件原因：
            <img src="../images/icon/close.svg" alt="" @click="closeBox">
            <div class="rejChkbox">
                    <label for="item1">
                        <input type="radio" id="item1" value="1" v-model="rejReason" @change="txtOff">內文或格式不合規定
                    </label>
                    <label for="item2">
                        <input type="radio" id="item2" value="2" v-model="rejReason" @change="txtOff">日期時間錯誤
                    </label>
                    <label for="item3">
                        <input type="radio" id="item3" value="3" v-model="rejReason" @change="txtOff">定價不符
                    </label>
                    <label for="item4">
                        <input type="radio" id="item4" value="4" v-model="rejReason" @change="txtOff">行程內容尚有爭議
                    </label>
                    <label for="item5">
                        <input type="radio" id="item5" value="5" v-model="rejReason" @change="txtOff">線上導遊終止合作
                    </label>
                    <label for="item6">
                        <input type="radio" id="item6" value="6" v-model="rejReason" @change="txtOff">外部原因問題
                    </label>
                    <label for="item7" id="item7">
                        <input type="radio" id="item7" @change="textOn" v-model="rejReason">其他，請填寫
                        <textarea name="" id="rejectText" :disabled="isDisabled == true" @keyup="setMessage"></textarea>
                     </label>
            </div>
            <button class="btnS" type="button" @click="doReject">送出</button>
        </div>
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
            boxID: '',
            resTxt: '',
            rejTxt: '',
            rejReason: '',
            isDisabled: true,
            theIndex: '',
            data: [
                // {
                //     num: 1,
                //     t_owner: '錢夫人',
                //     t_title: '自由女神朝聖之旅',
                //     t_content: '紐約最美麗的地標，一起來一睹她美麗的風采',
                //     t_startedat: '2023/12/31',
                //     t_numlimit: '20',
                //     t_isgroup: false,
                //     t_price: '599',
                //     t_ischeck: false,
                // },
            ],
        }
    },
    methods: {
        tripChecked(index) {
            if (confirm('是否上架此旅遊?')) {
                //把值傳給後端API
                axios.post('../../php/adm_updateTrip_checked.php', JSON.stringify({
                    theID: this.data[index].ID
                }), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    this.resTxt = res.data;
                    //console.log(this.resTxt);
                    alert(`${this.resTxt}`);
                }).catch((error) => alert('數據加載失敗' + error));;

                this.data.splice(index, 1);
            }
        },
        textOn() {
            this.isDisabled = false;
        },
        txtOff() {
            this.isDisabled = true;
        },
        setMessage(e) { //物件本身就是e.target
            this.rejReason = e.target.value;
        },
        reject(index) {  //該筆index對應的退件box出現
            this.showBox = true;
            this.boxID = this.data[index].ID;
            this.theIndex = index;
        },
        doReject() {
            if (this.rejReason == '') {
                alert('請填寫退件原因!');
            } else {
                axios.post('../../php/adm_rejectBox.php', JSON.stringify({
                    theID: this.boxID,
                    theValue: this.rejReason
                }), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    this.rejTxt = res.data;
                    //console.log(this.rejTxt);
                    //在這裡this.data[this.theIndex]會抓不到，會變undefined(why?)
                    alert(`${this.rejTxt}`);

                }).catch((error) => alert('數據加載失敗' + error));
            }
            this.data.splice(this.theIndex, 1);
            this.theIndex = '',
                this.rejReason = '',
                this.showBox = false;
        },
        closeBox() {
            this.showBox = false;
        },

    },
    computed: {
        filterList() { //搜尋功能
            return this.data.filter((trip) => { //把data送下來使用filter功能
                return trip.title.includes(this.search);
            })
        },
    },
    mounted() {
        axios.get('../../php/adm_tripcheck.php')
            .then(res => this.data = res.data)
            .catch((error) => alert('數據加載失敗' + error));
    },
}