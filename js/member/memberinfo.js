const MemberInfo = {
    template: `
                <div id="right">
                    <div id="memberInfoTitle">
                            <h2>會員資料</h2>
                            <button class="btnL_light" @click="edit" v-if="editType==false">編輯</button>

                        </div>
                        <div id="memberInfoMain">
                            <div id="memberInfoImg">
                                <img src="https://picsum.photos/200/200" alt="">
                            </div>
                            <div class = "memberInput" v-if="editType==false">
                                <div class="nameBorder" v-for = "(value,index) in values " v-if="index != 6 ">
                                        <div class="memberInfoName">{{value.name}}</div>
                                        <div class="memberInfoVal" v-if="index == 5" >{{passwdwd}}</div>
                                        <div class="memberInfoVal" v-else >{{value.val}}</div>
                                </div>
                            </div>

                            <div class = "memberInput" v-else>
                                <!--
                                <div class="nameBorder" v-for = "(value,index) in valuesEdit">
                                     <div class="memberInfoName">{{value.name}}</div>
                                     <input :type="value.type" :value="value.val" @focus="inputFocus" @blur="inputBlur(index,$event)">

                                </div>
                                -->

                                <div class="nameBorder">
                                        <div class="memberInfoName">姓名</div>
                                        <input :value="values[0].val" @focus="inputFocus(0,$event)" @blur="inputBlur(0,$event)">
                                </div>
                                <div class="nameBorder gender">
                                        <div class="memberInfoName">性別</div>

                                            <input type="radio"" value="男" v-model="gender"  id="memberman">
                                            <label for="memberman">男</label>
                                            <input type="radio"  value="女" v-model="gender" id="membergirl">
                                            <label for="membergirl">女</label>

                                </div>
                                <div class="nameBorder">
                                        <div class="memberInfoName">出生日期</div>
                                        <input :value="values[2].val" @focus="inputFocus(2,$event)" @blur="inputBlur(2,$event)">
                                </div>
                                <div class="nameBorder">
                                        <div class="memberInfoName">手機號碼</div>
                                        <input :value="values[3].val" @focus="inputFocus(3,$event)" @blur="inputBlur(3,$event)">
                                </div>
                                <div class="nameBorder">
                                        <div class="memberInfoName">E-mail</div>
                                        <input :value="values[4].val" @focus="inputFocus(4,$event)" @blur="inputBlur(4,$event)">
                                </div>
                                <div class="nameBorder">
                                        <div class="memberInfoName">會員密碼</div>
                                        <input :value="values[5].val" type="password" @focus="inputFocus(5,$event)" @blur="inputBlur(5,$event)">
                                </div>
                                <div class="nameBorder" v-show="clickpasswd">
                                        <div class="memberInfoName" >確認密碼</div>
                                        <input type="password">
                                </div>
                                <div class="memberEditCancel">
                                    <button class="btnL_light" @click="cancel">取消</button>
                                    <button class="btnL" @click="confirms">確認</button>
                                </div>
                            </div>
                        </div>
                </div>
            `,
    data() {
        return {  //組件的變數寫在這裡！
            values: [
                { name: "姓名", val: "王某某" },
                { name: "性別", val: "女" },
                { name: "出生日期", val: "2020/01/01" },
                { name: "手機號碼", val: "0988888888" },
                { name: "E-mail", val: "jumper@gmail.com" },
                { name: "會員密碼", val: "0123456789" },
                { name: "確認密碼", val: "" },

            ],
            passwdwd: '',
            editType: false,
            editValue: [],
            clickpasswd: false,
            gender: '',
        };

    },
    methods: {
        edit() {
            this.editType = true;
        },
        cancel() {
            this.editType = false;
        },
        confirms() {

            this.editType = false;
        },
        inputFocus(index, event) {
            if (event.target.value == this.values[index].val) {
                event.target.value = '';
            }
            if (index == 5) {
                this.clickpasswd = true;
            } else if (event.target.parentNode.parentNode.children[5].children[1].value == this.values[5].val) {
                this.clickpasswd = false;
                event.target.parentNode.parentNode.children[6].children[1].value = '';
            }
        },
        inputBlur(index, event) {
            if (event.target.value == '') {
                event.target.value = this.values[index].val;
                if (index == 5) {
                    this.clickpasswd = false;
                    event.target.parentNode.parentNode.children[6].children[1].value = '';
                }
            }
        }
    },
    mounted() {
        let passwdlength = this.values[5].val.length;
        for (let i = 0; i < passwdlength; i++) {
            this.passwdwd += '*';
        }
        this.gender = this.values[1].val;
    },
    updated() {
        let height = $(window).innerHeight() - parseInt($("#the_header").css('height')) - parseInt($("#member").css('height')) - parseInt($("#the_footer").css('height')) - 200;  //200 margin-top & bottom
        $("#memberSpace").css("height", height);
    }

};