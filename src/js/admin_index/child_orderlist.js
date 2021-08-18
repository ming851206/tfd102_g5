
// ========== 訂單管理(竹)) ========== 
const OrderList = {
    template: `
    <div class="temp2">
        <h3>訂單管理</h3>
        <label>
            <input type="text" name="adm_query" placeholder="輸入訂單編號" v-model="search">
            <img src="../images/icon/search.svg" alt="">
        </label>
        <table>
            <tr>
                <th>訂單編號</th>
                <th>購買會員</th>
                <th>訂單金額</th>
                <th>連結發送狀態</th>
                <th>訂單時間</th>
                <th>功能</th>
            </tr>
            <tr v-for="order in filterList">
                <td v-text="order.ID"></td>
                <td v-text="order.name"></td>
                <td v-text="'$'+ order.price"></td>
                <td id="sendStatus" v-text="order.is_alerted == 1 ? '已發送':'未發送' "></td>
                <td id="ts">{{timestampToTime(order.created_at)}}</td>
                <td><button id="sendlinkbtn" v-if="order.is_alerted == 0" class="sendLink" @click="updateIsAlert(order.ID)">發送連結</button></td>
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
            data: [
                // {
                //     o_id:'1',
                //     o_username: '第五組',
                //     o_price: '$999',
                //     o_isMailed: '已發送',
                //     o_create: '2022 Jun25 15:00',
                //     o_sentLink: '<button class="sendLink">發送連結</button>',
                // },

            ],
        };
    },
    //mixins:[timestampMixin],
    methods: {
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

        // 發送連結
        updateIsAlert(itemId) {
            // console.log('test');
            axios.post('../../php/update_orderalert.php', JSON.stringify({
                itemId: itemId,
            }))
                .then(res => {
                    console.log(res.data);
                    document.getElementById('sendlinkbtn').remove();    
                    $sendStatus = document.getElementById('sendStatus');
                    console.log($sendStatus);
                    $sendStatus.innerText = "已發送";
                }

                )
                .catch((error) => alert('數據加載失敗' + error));
        }
    },
    computed: {
        filterList() { //實驗中 
            return this.data.filter((order) => { //把data送下來使用filter功能
                return order.ID.includes(this.search);
            })
        },
    },
    mounted() {
        //==========前->後axios傳值的寫法=============

        //    axios.post('../../g5/php/adm_orderList.php', JSON.stringify({
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

        axios.get('../../php/adm_orderList.php')
            .then(res => this.data = res.data)
            .catch((error) => alert('數據加載失敗' + error));
    },
};
