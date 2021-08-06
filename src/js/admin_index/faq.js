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
                            <td v-text="faq.f_createdat"></td>
                            <td v-text="faq.f_isreply">/td>
                            <td><button>回覆</button></td>   
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
                timestamp: '',
                data: [
                    {
                        num: 1,
                        f_username: '嗚咪',
                        f_email: 'wumi@jumper.com',
                        f_question: '嗚咪的老虎會出現在非洲嗎',
                        f_createdat: '2023/12/31',
                        f_isreply: '未回覆',
                        f_function: '<button>編輯</button><button>刪除</button>'
                    },

                    {
                        num: 2,
                        f_username: '小丹尼',
                        f_email: 'danny@jumper.com',
                        f_question: '小丹尼希望導遊陪人家玩啦！！！',
                        f_createdat: '2023/12/31',
                        f_isreply: '未回覆',
                        f_function: '<button>編輯</button><button>刪除</button>'
                    },
                    {
                        num: 3,
                        f_username: '莎拉公主',
                        f_email: 'sala@jumper.com',
                        f_question: '旅程可以多一些購物行程嗎？',
                        f_createdat: '2023/12/31',
                        f_isreply: '未回覆',
                        f_function: '<button>編輯</button><button>刪除</button>'
                    },
                    {
                        num: 4,
                        f_username: '金貝貝',
                        f_email: 'kingbaby@jumper.com',
                        f_question: '咿咿呀呀呀咿呀咿呀呀呀呀呀',
                        f_createdat: '2023/12/31',
                        f_isreply: '已回覆',
                        f_function: '<button>編輯</button><button>刪除</button>'
                    },
                ],
            }
        },
        methods:{
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
    };