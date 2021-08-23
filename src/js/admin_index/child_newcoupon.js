// ========== 新增優惠券(竹) ==========
const NewCoupon = {
    data() {
        return {
            form: {
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
            <router-link to="/tfd102/project/g5/admin/coupon" class="back">返回優惠券列表</router-link><h4 class="title">新增優惠券</h4>
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
            // console.log(this.form.expired_at);
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
        // Datetime -> 時間戳記
        DatetimeToTimestamp() {
            var oTimer = document.getElementById('timer');
            var newtimestamp = Math.floor(new Date(oTimer.value).getTime()); // 1625155140000
            return this.form.expired_at = newtimestamp;
        },

        // 時間戳記 -> Datetime
        timestampToDatetime(timestamp, dateformtype) { // dateformtype = fasle 表示一般的時間格式，true 的話表時為 datetime-local 格式，"yyyy-MM-ddThh:mm:ss"，ex: 2021-07-31T23:44:00"
            var theTimestamp = toString(timestamp).length = 13 ? timestamp * 1 : timestamp * 1000; //時間戳為 10 位需 * 1000，時間戳為13位的話需 * 1
            // console.log(theTimestamp);
            var date = new Date(theTimestamp);

            // console.log(date);

            // console.log(date);
            Y = date.getFullYear() + '-';
            M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
            h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
            m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
            s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
            // s = 59;

            if (dateformtype) {
                return this.datetime_local = Y + M + D + 'T' + h + m + s // 2021-07-31T23:44,
            }
            return this.datetime = Y + M + D + ' ' + h + m + s
        },
    },
}
