  // ========== 優惠券管理(竹) ========== 
  const Coupon = {
    template: `
        <div class="temp">
            <h3>優惠券管理</h3>
                <router-link to="/coupon/newCoupon">
                    <button class="add">新增優惠券</button>
                </router-link>
              
                <label>
                    <input type="text" name="adm_query" placeholder="輸入優惠券名稱" v-model="search">
                    <img src="../images/icon/search.svg" alt="">
                </label>
                <router-view></router-view>
                    <table>
                        <tr>
                            <th>編號</th>
                            <th>優惠券名稱</th>
                            <th>優惠券內容</th>
                            <th>優惠碼</th>
                            <th>比例</th>
                            <th>使用期限</th>
                            <th>來源</th>
                            <th>建立時間</th>
                            <th>功能</th>
                        </tr>
                        <tr v-for="coupon in filterList" v-if="editType==false">
                            <td v-text="coupon.num" ></td>
                            <td v-text="coupon.c_name"></td>
                            <td v-text="coupon.c_content" class="cContent"></td>
                            <td v-text="coupon.c_code"></td>
                            <td v-text="coupon.c_discount"></td>
                            <td v-text="coupon.c_expire"></td>
                            <td v-text="coupon.c_come"></td>
                            <td v-text="coupon.c_create"></td>
                            <td v-if="editType==false"><button @click="edit">編輯</button><button>刪除</button></td>
                            </td>
                        </tr>
                        <tr v-for="coupon in filterList" v-else>
                            <td v-text="coupon.num"></td>
                            <td><input :value="coupon.c_name"></td>
                            <td class="cContent"><input :value="coupon.c_content"></td>
                            <td class="cCode"><input :value="coupon.c_code"></td>
                            <td class="cDiscount"><input :value="coupon.c_discount"></td>
                            <td class="cExpire"><input :value="coupon.c_expire"></td>
                            <td class="cCome"><input :value="coupon.c_come"></td>
                            <td class="cCreate"v-text="coupon.c_create"></td>
                            <td><button class="cancel" @click="cancel">取消</button><button class="confirm" @click="confirm">確認</button></td>
                            </td>
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
            editType: false,
            editNum: null,
            data: [

                {
                    num: 1,
                    c_name: '這夏有福了',
                    c_content: '優惠券內容',
                    c_code: '優惠碼',
                    c_discount: '9',
                    c_expire: '2023/12/31',
                    c_come: '1',
                    c_create: '2022/12/31',
                    is_active: false,
                },
                {
                    num: 2,
                    c_name: '這夏有打折了',
                    c_content: '優惠券內容',
                    c_code: '優惠碼',
                    c_discount: '75',
                    c_expire: '2023/12/31',
                    c_come: '2',
                    c_create: '2022/12/31',
                    is_active: false,
                },
                {
                    num: 3,
                    c_name: '超級夏殺價',
                    c_content: '優惠券內容優惠券內容',
                    c_code: '優惠碼',
                    c_discount: '75',
                    c_expire: '2023/12/31',
                    c_come: '1',
                    c_create: '2022/12/31',
                    is_active: false,
                },
            ],
        }
    },
    methods: {
        edit() {
            console.log(11111);
            this.editType = true;

            // this.editNum == coupon.num;
        },
        cancel() {
            this.editType = false;

            // this.editNum == null;
        },
        confirm() {
            this.editType = false;

            // this.editNum == null;
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
            return this.data.filter((coupon) => { //把data送下來使用filter功能
                return coupon.c_name.toLowerCase().includes(this.search.toLowerCase());
            })
        },
    },
};     