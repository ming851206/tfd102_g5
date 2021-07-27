const MemberInfo = {
    template: `
                <div id="right">
                         <div id="memberInfoTitle">
                            <h2>會員資料</h2>
                            <button class="btnL_light" @click="edit" v-if="editType==false">編輯</button>

                        </div>
                        <div id="memberInfoMain">
                                <div class="mobileMemberEditBtn">
                                    <button class="btnL_light" @click="edit" v-if="editType==false">編輯</button>
                                </div>

                            <div id="memberInfoImg"  v-if="editType==false">
                                <img src="https://picsum.photos/200/200" alt="">
                            </div>


                            <div id="memberInfoImg"  v-else @click="changeImg" class="editImgCursor">
                                <img src="https://picsum.photos/200/200" alt="">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22.037" height="19.282" viewBox="0 0 22.037 19.282">
                                        <path id="Icon_awesome-camera" data-name="Icon awesome-camera" d="M22.037,7.071v12.4a2.067,2.067,0,0,1-2.066,2.066H2.066A2.067,2.067,0,0,1,0,19.466V7.071A2.067,2.067,0,0,1,2.066,5H5.854l.529-1.416A2.063,2.063,0,0,1,8.316,2.25h5.4A2.063,2.063,0,0,1,15.65,3.589L16.184,5h3.788A2.067,2.067,0,0,1,22.037,7.071Zm-5.854,6.2a5.165,5.165,0,1,0-5.165,5.165A5.169,5.169,0,0,0,16.184,13.269Zm-1.377,0a3.788,3.788,0,1,1-3.788-3.788A3.793,3.793,0,0,1,14.806,13.269Z" transform="translate(0 -2.25)" fill="#fff"/>
                                    </svg>
                                </div>
                                <input type="file" @change="fileChange" id="editImgInput">
                            </div>


                            <div class = "memberInput" v-if="editType==false">
                                <div class="nameBorder" v-for = "(value,index) in values " v-if="index != 6 ">
                                        <div class="memberInfoName">{{value.name}}</div>
                                        <div class="memberInfoVal" v-if="index == 5" >{{passwdwd}}</div>
                                        <div class="memberInfoVal" v-else >{{value.val}}</div>
                                </div>
                            </div>

                            <div class = "memberInput" v-else>

                                    <div class="nameBorder">
                                            <div class="memberInfoName">姓名</div>
                                            <input :value="values[0].val" @focus="inputFocus(0,$event)" @blur="inputBlur(0,$event)">
                                    </div>
                                    <div class="nameBorder gender">
                                            <div class="memberInfoName">性別</div>

                                                <input type="radio"" value="男" v-model="gender"  id="memberman">
                                                <label for="memberman" id="membermanlabel">男</label>
                                                <input type="radio"  value="女" v-model="gender" id="membergirl">
                                                <label for="membergirl" id="membergirllabel">女</label>

                                    </div>

                                    <div class="nameBorder">
                                            <div class="memberInfoName">出生日期</div>
                                            <input :value="values[2].val" @focus="inputFocus(2,$event)" @blur="inputBlur(2,$event)" disabled style="background-color: rgba(255, 255, 255, 0) ; color:gray;">
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
                                            <input :value="CachePasswd" type="password" @focus="inputFocus(5,$event)" @blur="inputBlur(5,$event)" v-if="firstshowspasswd==false" @keyup="cachepasswd">
                                            <input :value="CachePasswd" type="text" @focus="inputFocus(5,$event)" @blur="inputBlur(5,$event)" v-else @keyup="cachepasswd">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20.455" viewBox="0 0 27 20.455" @click="changefirstshowspasswd">
                                                <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(1.5 1.5)">
                                                    <path id="Path_157" data-name="Path 157" d="M1.5,14.727S5.864,6,13.5,6s12,8.727,12,8.727-4.364,8.727-12,8.727S1.5,14.727,1.5,14.727Z" transform="translate(-1.5 -6)" fill="none" stroke="#996a4d" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                                    <path id="Path_158" data-name="Path 158" d="M20.136,16.818A3.318,3.318,0,1,1,16.818,13.5,3.318,3.318,0,0,1,20.136,16.818Z" transform="translate(-4.818 -8.091)" fill="none" stroke="#996a4d" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                                </g>
                                            </svg>

                                    </div>
                                    <div class="nameBorder" >
                                            <div class="memberInfoName" >確認密碼</div>
                                            <input type="password" :value="CacheCheckPasswd" @focus="inputFocus(5,$event)" @blur="inputBlur(5,$event)" v-show="!secshowspasswd" @keyup="cachecheckpasswd" >
                                            <input type="text" :value="CacheCheckPasswd" @focus="inputFocus(5,$event)" @blur="inputBlur(5,$event)" v-show="secshowspasswd" @keyup="cachecheckpasswd">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20.455" viewBox="0 0 27 20.455" @click="changesecshowspasswd">
                                                <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(1.5 1.5)">
                                                    <path id="Path_157" data-name="Path 157" d="M1.5,14.727S5.864,6,13.5,6s12,8.727,12,8.727-4.364,8.727-12,8.727S1.5,14.727,1.5,14.727Z" transform="translate(-1.5 -6)" fill="none" stroke="#996a4d" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                                    <path id="Path_158" data-name="Path 158" d="M20.136,16.818A3.318,3.318,0,1,1,16.818,13.5,3.318,3.318,0,0,1,20.136,16.818Z" transform="translate(-4.818 -8.091)" fill="none" stroke="#996a4d" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                                </g>
                                            </svg>

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
            gender: '',
            firstshowspasswd: false,
            secshowspasswd: false,
            CachePasswd: '',
            CacheCheckPasswd: '',

        };

    },
    methods: {
        fileChange: function (e) {
            let files = document.getElementById('editImgInput').files[0];
            console.log(files);
            let readFile = new FileReader();
            readFile.readAsDataURL(files);

            readFile.addEventListener('load', function () {
                let image = document.getElementsByClassName("editImgCursor")[0].querySelector("img");
                image.src = readFile.result;
            });
        },
        changeImg: function (event) {
            let input = document.getElementById("memberInfoImg").querySelector("input");
            input.click();
        },
        changefirstshowspasswd() {
            if (!this.firstshowspasswd) {
                this.firstshowspasswd = true;
            } else {
                this.firstshowspasswd = false;
            }
        },
        changesecshowspasswd() {
            if (!this.secshowspasswd) {
                this.secshowspasswd = true;
            } else {
                this.secshowspasswd = false;
            }
        },
        cachepasswd(event) {
            if (event.target.value == this.values[5].val) {
                this.CachePasswd = '';
            }
            this.CachePasswd += event.target.value;
        },
        cachecheckpasswd(event) {
            if (event.target.value == this.values[5].val) {
                this.CacheCheckPasswd = '';
            }
            this.CacheCheckPasswd += event.target.value;
        },
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

        },
        inputBlur(index, event) {
            if (event.target.value == '') {
                event.target.value = this.values[index].val;

            }
        }
    },
    mounted() {
        let passwdlength = this.values[5].val.length;
        for (let i = 0; i < passwdlength; i++) {
            this.passwdwd += '*';
        }
        this.gender = this.values[1].val;
        this.CachePasswd = this.values[5].val;
        this.CacheCheckPasswd = this.values[5].val;
    },
    updated() {
        let height = $(window).innerHeight() - parseInt($("#the_header").css('height')) - parseInt($("#member").css('height')) - parseInt($("#the_footer").css('height')) - 200;  //200 margin-top & bottom
        $("#memberSpace").css("height", height);
    }

};