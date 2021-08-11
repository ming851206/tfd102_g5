   // ========== 旅程列表(綺) ========== 
   const TripList = {
    template: `
        <div class="temp2">
            <h3>旅程列表</h3>
            <label>
                <input type="text" name="adm_query" placeholder="輸入旅程名稱" v-model="search">
                <img src="../images/icon/search.svg" alt="">
            </label>
            <table>
                <tr>
                    <th>編號</th>
                    <th>舉辦人</th>
                    <th>旅遊名稱</th>
                    <th>旅遊內容</th>
                    <th>開始時間</th>
                    <th class="numLimit">人數限制</th>
                    <th>是否額滿</th>
                    <th>價格</th>
                    <th>功能</th>
                </tr>
                    <tr v-for="(trip, index) in filterList" class="trans">
                    <td v-text="trip.ID"></td>
                    <td v-text="trip.name">Carlos</td>
                    <td v-text="trip.title" class="textContent2"></td>
                    <td v-text="trip.content" class="textContent3"></td>
                    <td>{{timestampToTime(trip.started_at)}}</td>
                    <td v-text="trip.total_people"></td>
                    <td v-text="attendence == 1 ? '是':'否'"></td>
                    <td v-text="'$'+trip.event_price"></td>
                    <td><button class="revoke" @click="revoke(index)">下架</button></td>
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
` ,
    data() {
        return {
            now:0,
            timestamp: '',
            search: '',
            delTxt:'',
            data: [
                // {
                //     num: 1,
                //     t_owner: '錢夫人',
                //     t_title: '自由女神朝聖之旅',
                //     t_content: '紐約最美麗的地標，一起來一睹她美麗的風采紐約最美麗的地標',
                //     t_startedat: '2023/12/31',
                //     t_numlimit: '20',
                //     t_isgroup: false,
                //     t_price: '599',
                //     t_ischeck: false,
                // },  
            ],
        }
    },
    computed: {
        filterList() { //搜尋功能
            return this.data.filter((trip) => { //把data送下來使用filter功能
                return trip.title.includes(this.search);
            })
        },
        attendence(){ //如果參加人數>=人數限制就顯示額滿
            let trip = this.data;
            for(let i=0; i<trip.length; i++){
                // console.log(trip[i].attendence);
                // console.log(trip[i].total_people);
                if( trip[i].attendence >= trip[i].total_people ){
                    return 1;
                }else{
                    return 0;
                }
            }
        }
    },
    methods: {
        
        revoke(index) {
            var date = new Date();
            this.now = date.getTime();
            
            if (confirm('是否下架旅遊?')) {
                
                axios.get('http://localhost/php/adm_deleteTrip.php', {
                    params: { 
                        theID: this.data[index].ID,
                        delTime: this.now
                    }
                 }).then(res =>{
                    this.delTxt = res.data;
                    alert(`${this.delTxt}`);
                });

                this.data.splice(index, 1);
                // let theTr = e.target.closest('tr');
                // theTr.classList.add('fadeOut'); //加轉場效果

                // setTimeout(function () { //移除該項目
                //     theTr.remove();
                // }, 1000);

            }
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

        },
      
    },
    mounted() {
        axios.get('http://localhost/php/adm_triplist.php').then(res => this.data = res.data);
    },
}