 // ========== 旅程評論審查(竹) ========== 
 const CommentCheck = {
    template: `
    <div class="temp2">
        <h3>旅程評論審查</h3>
            <table>
                <tr>
                    <th>編號</th>
                    <th>旅程名稱</th>
                    <th>會員</th>
                    <th>星數</th>
                    <th>評論內容</th>
                    <th>評論時間</th>
                    <th>勾選</th>
                </tr>
                <tr v-for="comment in data">
                    <td v-text="comment.id"></td>
                    <td v-text="comment.title" class="cmt_title"></td>
                    <td v-text="comment.name"></td>
                    <td v-text="comment.star"></td>
                    <td v-text="comment.content" class="cmt_content"></td>
                    <td>{{timestampToTime(comment.create_at)}}</td>
                    <td><input type="checkbox" name="" class="chkbox" @click="checkNum"></td>
                </tr>
            </table>
            <label for="" class="allChk">
                全選<input type="checkbox" id="allChk" @click="allchk" :checked="ischk == 1">
            </label>
            <button id="delete">刪除</button>
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
            timestamp: '',
            ischk: 0,
            data: [],
        }
    },
    //mixins:[timestampMixin],
    methods: {
        allchk(e) {
            let items = document.querySelectorAll('input.chkbox'); //全選勾選大家跟著勾
            items.forEach(function (item, i) {
                item.checked = e.target.checked;
            });
        },
        checkNum() {
            let itemsChk = document.querySelectorAll('input.chkbox:checked').length;
            let allItems = document.querySelectorAll('input.chkbox').length;
            if (itemsChk == allItems) {
                console.log('object'); //這行有用
                this.ischk == 1; 
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

        }
    },
    mounted() {
        axios.get('../../php/adm_commentchk.php').then(res => this.data = res.data);
    },

}