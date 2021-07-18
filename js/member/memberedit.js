const MemberEdit = {
    template: `
            <!--
            <div id="right">
                    <div id="memberInfoTitle">
                            <h2>會員資料</h2>
                            <button id="memberEditBtn">編輯</button>
                        </div>
                        <div id="memberInfoMain">
                            <div id="memberInfoImg">
                                <img src="https://picsum.photos/200/200" alt="">
                            </div>
                            <div>
                                <div class="nameBorder" v-for = "(value,index) in values">
                                        <div class="memberInfoName">{{value.name}}</div>
                                        <input class="memberInfoVal" >
                                        <br>
                                </div>
                            </div>
                        </div>
                </div>
                -->
                <div>
                    abcd
                </div>
            `,
    // placeholder="{{value.val}}"
    data() {
        return {  //組件的變數寫在這裡！
            values: [
                { name: "姓名", val: "王某某" },
                { name: "性別", val: "男" },
                { name: "出生日期", val: "2020/01/01" },
                { name: "手機號碼", val: "0988888888" },
                { name: "E-mail", val: "jumper@gmail.com" },
                { name: "會員密碼", val: "1234567890" },

            ],
        };
    },
};