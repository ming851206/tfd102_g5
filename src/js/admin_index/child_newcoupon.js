// ========== 新增優惠券(竹) ========== 
const NewCoupon = {
    data(){
        return {
            form:{
                timerId: 'timer',
                content: null,
                code: null,
                off_percent: null,
                datetime_local: null,
                source: null,
                expired_at: null,
            }
        }
    },
    template: `
        <div class="temp">
            <router-link to="/coupon" class="back">返回優惠券列表</router-link><h4 class="title">新增優惠券</h4>
            <div class="addCoupon">
                <label class="coupon">
                    優惠券內容<input type="text" v-model="form.content">
                </label>
                <label class="coupon">
                    優惠碼<input type="text" v-model="form.code">
                </label>
                <label class="coupon">
                    折扣比例<input type="text" v-model="form.off_percent">
                </label>
                <label class="coupon">
                    使用到期日 <input type="datetime-local" v-model="form.datetime_local" :id="form.timerId">
                </label>
                <label class="coupon">
                    優惠券來源<input type="text" v-model="form.source">
                </label>
                <button @click="createCoupon">新增</button>
            </div>
        </div>
        `,
        methods: {
            createCoupon() {
                this.DatetimeToTimestamp();
                //把值傳給後端API
                axios.post('../../php/adm_coupon_create.php', {
                    content: this.form.content, // 優惠券名稱
                    code: this.form.code, // 優惠碼
                    off_percent: this.form.off_percent, // 折扣比例
                    expired_at: this.form.expired_at, // 使用期限 (須將時間格式轉換成 timestamp?)
                    source: this.form.source, // 來源
                }).then(res => {
                    alert(res.data);
                }).catch((error) => alert('數據加載失敗' + error));
            },
            //將 Datetime 轉換為時間戳記
            DatetimeToTimestamp() {
                var oTimer = document.getElementById('timer');
                var timestamp = new Date(oTimer.value).getTime()/1000;
                return this.form.expired_at = timestamp;
            },
    
            timestampToTime(timestamp) {
                var date = new Date(timestamp * 1000);//時間戳為10位需*1000，時間戳為13位的話需乘1
                Y = date.getFullYear() + '/';
                M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
                D = date.getDate() + ' ';
                h = date.getHours() + ':';
                m = date.getMinutes() + ':';
                s = date.getSeconds();
                return this.timestamp = Y + M + D + h + m + s;
            },
            // 將時間戳記轉換為 datetime-local 格式，"yyyy-MM-ddThh:mm:ss"，ex: 2021-07-31T23:44:00"
            timestampToDatetimelocal(timestamp) {
                var date = new Date(timestamp * 1000);//時間戳為10位需*1000，時間戳為13位的話不需乘1000
                Y = date.getFullYear() + '-';
                M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                D = date.getDate() + 'T';
                h = date.getHours() + ':';
                m = date.getMinutes() + ':';
                s = date.getSeconds();
                return this.timestamp = Y + M + D + h + m + s; // 2021-07-31T23:44:00
    
            }
        },
    }
        