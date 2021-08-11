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
                <th>開始時間</th>
                <th class="numLimit">人數限制</th>
                <th>是否包場</th>
                <th>價格</th>
                <th>功能</th>
            </tr>
            <tr v-for="(trip, index) in filterList">
                <td v-text="trip.ID"></td>
                <td v-text="trip.name"></td>
                <td v-text="trip.title" class="textContent2"></td>
                <td v-text="trip.content" class="textContent3"></td>
                <td>{{timestampToTime(trip.started_at)}}</td>
                <td v-text="trip.total_people"></td>
                <td v-text="trip.is_group = 1 ? '否':'是' "></td>
                <td v-text="trip.event_price"></td>
                <td><button type="button" class="submitBtn" @click="tripChecked(index)">通過</button><button type="button" class="rejectBtn" @click="reject(index)">退件</button></td>
            </tr>
        </table>
        <div class="rejectBox" v-if="this.showBox == true">
            編號:{{this.boxID}}，旅程退件原因
            <img src="../images/icon/close.svg" alt="" @click="closeBox">
            <textarea name="" id="rejectText"></textarea>
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
            boxID:'',
            resTxt:'',
            rejTxt:'',
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
                axios.post('http://localhost/php/adm_updateTrip_checked.php', JSON.stringify({
                    theID: this.data[index].ID
                }), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res =>{
                    this.resTxt = res.data;
                    //console.log(this.resTxt);
                    alert(`${this.resTxt}`);
                }); 
                
                this.data.splice(index, 1);
            }
        },
      
        reject(index) {  //該筆index對應的退件box出現
            //console.log(index);
            this.showBox = true;
            this.boxID = this.data[index].ID;
        },
        doReject(index){  //真正的退件:在點擊退件表單的送出後
            //console.log(this.boxID);
            let textValue = document.getElementById('rejectText').value;
            if(textValue == ""){
                alert('請填寫退件原因!');
            }else{
                axios.post('http://localhost/php/adm_rejectBox.php', JSON.stringify({
                    theID: this.boxID,
                    theValue : textValue
                }), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res =>{
                    this.rejTxt = res.data;
                    //console.log(this.rejTxt);
                    alert(`${this.rejTxt}`);
                }); 
            }
            this.data.splice(index, 1);
            this.showBox = false;
        },
        closeBox() {
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
                return trip.title.includes(this.search);
            })
        },
    },
    mounted() {
        axios.get('http://localhost/php/adm_tripcheck.php').then(res => this.data = res.data);
    },
}