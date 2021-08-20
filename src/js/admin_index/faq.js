// ========== 問題意見管理(綺) ========== 
const Faq = {
    mixins:[timestampMixin],
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
                        <tr v-for="(faq, index) in data">
                            <td v-text="faq.ID"></td>
                            <td v-text="faq.name"></td>
                            <td v-text="faq.email"></td>
                            <td v-text="faq.content" class="textContent"></td>
                            <td>{{timestampToTime(faq.faq_at)}}</td>
                            <td v-text="faq.is_replied == null ? '未回覆':'已回覆'">/td>
                            <td><button @click="openMail(index)" :disabled="faq.is_replied != null">回覆</button></td>   
                        </tr>
                    </table>
                    <form id="mailform" v-if="this.showBox == true">
                        <img src="../images/icon/close.svg" alt="" @click="closeBox"> 
                            <div class="field">
                                <label for="to_name">收件者</label>
                                <input type="text" name="to_name" id="to_name" v-model="toName">
                            </div>
                            <div class="field">
                                <label for="from_name">寄件者</label>
                                <input type="text" name="from_name" id="from_name" value="jumper2021.tw@gmail.com">
                            </div>
                            <div class="field">
                                <label for="message">回覆內容</label>
                                <textarea name="message" id="message"></textarea>
                            </div>
                            <div class="field">
                                <label for="to_email">收件信箱</label>
                                <input type="text" name="to_email" id="to_email" v-model="toEmail">
                            </div>
                            <input type="submit" id="mailbutton" value="Send Email" class="btnM" @click="replyMail">
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
            toName: '',
            toEmail: '',
            theIndex: 0,
            showBox: false,
            data: [
                // {
                //     num: 1,
                //     f_username: '嗚咪',
                //     f_email: 'wumi@jumper.com',
                //     f_question: '嗚咪的老虎會出現在非洲嗎',
                //     f_createdat: '1628611200000',
                //     f_isreply: '未回覆',
                //     f_function: '<button>編輯</button><button>刪除</button>'
                // },
            ],
        }
    },
    methods: {
        openMail(index) {
            this.showBox = true;
            this.theIndex = index;
            this.toName = this.data[index].name;
            this.toEmail = this.data[index].email;
        },
        closeBox() {
            this.showBox = false;
        },
        replyMail() {
           
            const btn = document.getElementById('mailbutton');

            document.getElementById('mailform')
                .addEventListener('submit', function (event) {
                    event.preventDefault();

                    btn.value = '傳送中...';

                    const serviceID = 'default_service';
                    const templateID = 'template_j1pz4di';

                    emailjs.sendForm(serviceID, templateID, this)
                        .then(() => {
                            btn.value = '發送郵件';
                            alert('已傳送!');
                        }, (err) => {
                            btn.value = '發送郵件';
                            alert(JSON.stringify(err));
                        });
                });
                
            //並呼叫axios寫入faq_at的時間
            axios.get('../php/adm_faqupdate.php', {
                params: {
                    theID: this.data[this.theIndex].ID,
                }
            }).then(res => {
                if(res.data == '更新狀態成功!'){
                    
                    setTimeout(() => {
                        //要自動關閉視窗並清空內容
                        this.data[this.theIndex].is_replied = 1;
                        this.toName = "";
                        this.toEmail = "";
                        this.showBox = false;
                        //畫面reload或是寫在watch?
                    }, 1000)
                }
            }).catch( (error) => alert('數據加載失敗'+ error));
        },
    },
    computed:{},
    mounted() {
        axios.get('../php/adm_faqlist.php')
        .then(res => this.data = res.data)
        .catch( (error) => alert('數據加載失敗'+ error));
    },
};