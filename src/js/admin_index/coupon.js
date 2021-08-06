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
                            <th>功能</th>
                        </tr>
                        <tr v-for="(coupon,index) in filterList">
                            <td v-text="coupon.num"></td>
                            <td class="cName">
                                <div v-if="coupon.is_edit === false" v-text="coupon.c_name"></div>
                                <input v-else :value="coupon.c_name">   
                            </td>
                            <td class="cContent">
                                <div v-if="coupon.is_edit === false" v-text="coupon.c_content"></div>
                                <input v-else :value="coupon.c_content">   
                            </td>
                            <td class="cCode">
                                <div v-if="coupon.is_edit === false" v-text="coupon.c_code"></div>
                                <input v-else :value="coupon.c_code"">   
                            </td>
                            <td class="cDiscount">
                                <div v-if="coupon.is_edit === false" v-text="coupon.c_discount"></div>
                                <input v-else :value="coupon.c_discount"">   
                            </td>
                            <td class="cExpire">
                                <div v-if="coupon.is_edit === false" v-text="coupon.c_expire"></div>
                                <input v-else :value="coupon.c_expire"">   
                            </td>
                            <td class="cCome">
                                <div v-if="coupon.is_edit === false" v-text="coupon.c_come"></div>
                                <input v-else :value="coupon.c_come"">   
                            </td>
                            <td v-if="coupon.is_edit === false">
                                <button @click="edit(index)">編輯</button>
                                <button>刪除</button></td>
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
            data: [
                {
                    num: 1,
                    c_name: '這夏有福了',
                    c_content: '優惠券內容',
                    c_code: '優惠碼',
                    c_discount: '9',
                    c_expire: '2023/12/31',
                    c_come: '1',
                    is_edit:false
                },
                {
                    num: 2,
                    c_name: '這夏有打折了',
                    c_content: '優惠券內容',
                    c_code: '優惠碼',
                    c_discount: '75',
                    c_expire: '2023/12/31',
                    c_come: '2',
                    is_edit:false
                },
                {
                    num: 3,
                    c_name: '超級夏殺價',
                    c_content: '優惠券內容優惠券內容',
                    c_code: '優惠碼',
                    c_discount: '75',
                    c_expire: '2023/12/31',
                    c_come: '1',
                    is_edit:false
                },
            ],
        }
    },
    methods: {
        edit(index) {
            // console.log(index);
            this.data[index].is_edit = true;
  
        },
        cancel(index) {
            console.log(index);
  
            this.data[index].is_edit = false;
        },
        confirm(index) {
            // console.log(coupon);
            this.data[index].is_edit = false;
            // this.data[index].c_name = this.coupon.c_name;
  
        },
    },
    computed: {
        filterList() { //搜尋功能
            return this.data.filter((coupon) => { //把data送下來使用filter功能
                return coupon.c_name.toLowerCase().includes(this.search.toLowerCase());
            })
        },
    },
  };    