  // ========== 會員管理(綺) ========== 
  const Member = {
    template: `
    <div class="temp">
         <h3>會員管理</h3>
            <label>
                <input type="text" name="adm_query" placeholder="輸入會員帳號" v-model="search">
                <img src="../images/icon/search.svg" alt="">
            </label>
            <table border="1">
                <tr>
                    <th>編號</th>
                    <th>名稱</th>
                    <th>帳號</th>
                    <th>會員等級</th>
                    <th>聯絡信箱</th>
                    <th>連絡電話</th>
                    <th>生日</th>
                    <th>建立時間</th>
                    <th>帳號狀態</th>
                </tr>
                <tr v-for="(person, index) in filterList">
                    <td v-text="person.ID"></td>
                    <td v-text="person.name"></td>
                    <td v-text="person.username"></td>
                    <td v-text="person.level" class="level"></td>
                    <td v-text="person.email"></td>
                    <td v-text="person.phone"></td>
                    <td v-text="person.birthday"></td>
                    <td>{{timestampToTime(person.created_at)}}</td>
                    <td class="toggle" id="status" :class="{switchIo:person.account_status == 0}" @click="switchStatus(index)"></td>
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
            theStatus:'',
            data: [
                // {
                //     no: 1,
                //     username: '芝加哥哥',
                //     id: 'chicagogo',
                //     level: '1',
                //     email: 'jumpjump@gmail.com',
                //     phone: '0987654321',
                //     birthday: '2021/01/01',
                //     create: '1588694400',
                //     isActive: false
                // },
            ],
        };
    },
    methods:{
        switchStatus(index){
            this.theStatus = this.data[index].account_status;
            if( this.theStatus == 1 ){
                axios.get('../../php/adm_status0.php', {
                    params: { 
                        theID: this.data[index].ID,
                    }
                 }).then(res => {
                     this.theStatus = res.data;
                     document.getElementById('status').classList.add('switchIo');//這行沒用
                 }).catch( (error) => alert('數據加載失敗'+ error));
                 
            }else{
                axios.get('../../php/adm_status1.php', {
                    params: { 
                        theID: this.data[index].ID,
                    }
                 }).then(res => {
                    this.theStatus = res.data;
                    document.getElementById('status').classList.remove('switchIo');//這行沒用
                 }).catch( (error) => alert('數據加載失敗'+ error));
            }
        },
        timestampToTime(timestamp) {

            var date = new Date(timestamp * 1);//時間戳為10位需*1000，時間戳為13位的話不需乘1000
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
            return this.data.filter((person) => { //把data送下來使用filter功能
                return person.ID.toLowerCase().includes(this.search.toLowerCase());
            })
        },
    },
    mounted() {
        axios.get('../../php/adm_memberList.php')
        .then(res => this.data = res.data)
        .catch( (error) => alert('數據加載失敗'+ error));
    },
};
