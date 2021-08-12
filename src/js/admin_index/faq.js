  // ========== 問題意見管理(綺) ========== 
const Faq = {
    template: `
            <div class="temp">
                    <h3>問題意見管理</h3>
                    <table>
                        <tr>
                            <th>編號</th>
                            <th>發問人</th>
                            <th>信箱</th>
                            <th>問題內容</th>
                            <th>發問時間</th>
                            <th>狀態</th>
                            <th>功能</th>
                        </tr>
                        <tr v-for="faq in data">
                            <td v-text="faq.num"></td>
                            <td v-text="faq.f_username"></td>
                            <td v-text="faq.f_email"></td>
                            <td v-text="faq.f_question" class="textContent"></td>
                            <td>{{timestampToTime(faq.f_createdat)}}</td>
                            <td v-text="faq.is_replied == null ? '未回覆':'已回覆'">/td>
                            <td><button @click="openMail">回覆</button></td>   
                        </tr>
                    </table>
                    <form id="mailform" v-if="this.showBox == true">
                        <img src="../images/icon/close.svg" alt="" @click="closeBox"> 
                            <div class="field">
                                <label for="to_name">收件者</label>
                                <input type="text" name="to_name" id="to_name">
                            </div>
                            <div class="field">
                                <label for="from_name">from_name</label>
                                <input type="text" name="from_name" id="from_name">
                            </div>
                            <div class="field">
                                <label for="message">回覆內容</label>
                                <textarea type="text" name="message" id="message"></textarea>
                            </div>
                            <div class="field">
                                <label for="to_email">收件信箱</label>
                                <input type="text" name="to_email" id="to_email">
                            </div>
                            <div class="field">
                                <label for="reply_to">reply_to</label>
                                <input type="text" name="reply_to" id="reply_to">
                            </div>

                            <input type="submit" id="mailbutton" value="回覆郵件" class="btnM" @click="replyMail">
                    </form>
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
            showBox: false,
            data: [
                {
                    num: 1,
                    f_username: '嗚咪',
                    f_email: 'wumi@jumper.com',
                    f_question: '嗚咪的老虎會出現在非洲嗎',
                    f_createdat: '1628611200000',
                    f_isreply: '未回覆',
                    f_function: '<button>編輯</button><button>刪除</button>'
                },
            ],
        }
    },
    methods: {
        openMail(){
            this.showBox = true;
        },
        closeBox(){
            this.showBox = false;
        },
        replyMail() {
            const btn = document.getElementById('mailbutton');

            document.getElementById('form')
                .addEventListener('submit', function (event) {
                    event.preventDefault();

                    btn.value = 'Sending...';

                    const serviceID = 'default_service';
                    const templateID = 'template_j1pz4di';

                    emailjs.sendForm(serviceID, templateID, this)
                        .then(() => {
                            btn.value = 'Send Email';
                            alert('Sent!');
                        }, (err) => {
                            btn.value = 'Send Email';
                            alert(JSON.stringify(err));
                        });
                });
        },
        timestampToTime(timestamp) {

            var date = new Date(timestamp * 1);//時間戳為10位需*1000，時間戳為13位的話需乘1
            Y = date.getFullYear() + '/';
            M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
            D = date.getDate() + ' ';
            h = date.getHours() + ':';
            m = date.getMinutes()
            return this.timestamp = Y + M + D + h + m;

        }
    },
    mounted() {
        // axios.get('http://localhost/php/adm_faqlist.php').then(res => this.data = res.data);
    },
};