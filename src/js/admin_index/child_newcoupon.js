// ========== 新增優惠券(竹) ========== 
const NewCoupon = {
    template: `
        <div class="temp">
            <router-link to="/coupon" class="back">返回優惠券列表</router-link><h4 class="title">新增優惠券</h4>
             <div class="addCoupon">
                <label class="coupon">
                    優惠券名稱<input type="text" >
                </label>
                <label class="coupon">
                    優惠券內容<input type="text" >
                </label>
                <label class="coupon">
                    優惠碼<input type="text" >
                </label>
                <label class="coupon">
                    折扣比例<input type="text" >
                </label>
                <label class="coupon">
                    使用到期日 <input type="date" >
                </label>
                <label class="coupon">
                    優惠券來源<input type="text" >
                </label>
                <p class="tag">(註:1為評論，2為任務)</p>
                <button>取消</button>
                <button>新增</button>
            </div>
        </div>
        ` }