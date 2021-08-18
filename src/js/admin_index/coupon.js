// ========== 優惠券管理(竹) ========== 
const Coupon = {
    template: `
        <div class="temp">
            <h3>優惠券管理</h3>
                <router-link to="/coupon/newCoupon">
                    <button class="add">新增優惠券</button>
                </router-link>
                <label>
                    <input type="text" name="adm_query" placeholder="輸入優惠碼" v-model="search">
                    <img src="../images/icon/search.svg" alt="">
                </label>
                <router-view></router-view>
                    <table>
                        <tr>
                            <th>編號</th>
                            <th>優惠券名稱</th>
                            <th>優惠碼</th>
                            <th>比例</th>
                            <th>使用期限</th>
                            <th>來源</th>
                            <th>功能</th>
                        </tr>
                        
                        <tr v-for="(coupon,index) in filterList">
                            <td v-text="coupon.ID" ></td>
                            <td class="cName">
                                <div v-if="coupon.is_edit == false" v-text="coupon.content"></div>
                                <input v-else v-model="coupon.content">   
                            </td>
                            <td class="cContent">
                                <div v-if="coupon.is_edit == false" v-text="coupon.code"></div>
                                <input v-else v-model="coupon.code">   
                            </td>
                            <td class="cDiscount">
                                <div v-if="coupon.is_edit == false" v-text="coupon.off_percent"></div>
                                <input v-else v-model="coupon.off_percent">   
                            </td>
                            <td class="cExpire">
                                <div v-if="coupon.is_edit == false" v-text="timestampToTime(coupon.expired_at)"></div>
                                <input v-else v-model="coupon.expired_at">   
                            </td>
                            <td class="cCome">
                                <div v-if="coupon.is_edit == false" v-text="coupon.source"></div>
                                <input v-else v-model="coupon.source">   
                            </td>
                            <td v-if="coupon.is_edit == false">
                                <button @click="edit(index)">編輯</button>
                                <button @click="delete_coupon(index)">刪除</button>
                            </td>
                            <td v-else>
                                <button class="cancel" @click="cancel(index)">取消</button>
                                <button class="confirm" @click="confirm(index)">確認</button>
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
            editNum: null,
            coupons: [
                // {
                //     num: 1,
                //     c_name: '這夏有福了',
                //     c_content: '優惠券內容',
                //     c_code: '優惠碼',
                //     c_discount: '9',
                //     c_expire: '2023/12/31',
                //     c_come: '1',
                //     is_edit:false
                // },
            ],
        }
    },
    methods: {
        edit(index) {
            // console.log(index);
            this.coupons[index].is_edit = true;
        },
        delete_coupon(index) {
            console.log('刪除測試');
            the_delete_coupon = this.coupons[index];
            // console.log(the_delete_coupon);
            axios.get('../../php/adm_coupon_delete.php', {
                params: {  // 帶參數
                    theID:  the_delete_coupon.ID //
                }
            }).then(res =>{
                this.coupons.splice(index, 1);
            }).catch( (error) => alert('數據加載失敗'+ error)); 
        },
        cancel(index) {
            // console.log(index);
            this.coupons[index].is_edit = false;
        },
        confirm(index) {
            the_edit_coupon = this.coupons[index];
            
            //把值傳給後端API
            axios.post('../../php/adm_coupon_edit.php', JSON.stringify({
                theID: the_edit_coupon.ID, // 編號
                content: the_edit_coupon.content, // 優惠券名稱
                code: the_edit_coupon.code, // 優惠碼
                off_percent: the_edit_coupon.off_percent, // 折扣比例
                expired_at: the_edit_coupon.expired_at, // 使用期限 (須將時間格式轉換成 timestamp?)
                source: the_edit_coupon.source, // 來源
            }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                the_edit_coupon.is_edit = false;
                alert('編輯成功！');
            }).catch((error) => alert('數據加載失敗' + error));
            // this.coupons.splice(index, 1);
            // console.log(coupon);
            // this.coupons[index].is_edit = false;

        },
        timestampToTime(timestamp) {
            var date = new Date(timestamp * 1000);//時間戳為10位需*1000，時間戳為13位的話需乘1
            Y = date.getFullYear() + '/';
            M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
            D = date.getDate() + ' ';
            h = date.getHours() + ':';
            m = date.getMinutes()
            return this.timestamp = Y + M + D + h + m;
        },
    },
    computed: {
        filterList() { //搜尋功能
            // console.log('有進來搜尋功能');
            return this.coupons.filter((coupon) => { //把 coupons 送下來使用filter功能
                // console.log(this.search);
                // console.log(coupon.code.toLowerCase().includes(this.search.toLowerCase()));  // 條件符合的會是會傳 true, 不符合的回傳 false
                return coupon.code.toLowerCase().includes(this.search.toLowerCase());

            })
        },
    },
    mounted() {
        console.log('mounted');
        //==================== 取得優惠券資料 =======================        
        axios.get('../../php/adm_couponlist.php')
            .then(res => this.coupons = res.data)
            .catch((error) => alert('數據加載失敗' + error));
    },

};