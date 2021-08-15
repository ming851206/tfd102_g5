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
                                <div class="nameBorder" v-for = "(value,index) in values " v-if="index < 6 ">
                                        <div class="memberInfoName">{{value.name}}</div>
                                        <div class="memberInfoVal" v-if="index == 5" >{{passwdwd}}</div>
                                        <div class="memberInfoVal" v-else-if="index == 3" >{{value.val | phoneFormater}}</div>

                                        <div class="memberInfoVal" v-else >{{value.val}}</div>
                                </div>
                            </div>

                            <div class = "memberInput" v-else>

                                    <div class="nameBorder">
                                            <div class="memberInfoName">姓名</div>
                                            <input :value="editValue[0]" @focus="inputFocus(0,$event)" @blur="inputBlur(0,$event)" @keyup="inputtype(0,$event)">
                                    </div>
                                    <div class="nameBorder gender">
                                            <div class="memberInfoName">性別</div>

                                                <input type="radio"" value="男" v-model="editValue[1]"  id="memberman">
                                                <label for="memberman" id="membermanlabel" >男</label>
                                                <input type="radio"  value="女" v-model="editValue[1]" id="membergirl">
                                                <label for="membergirl" id="membergirllabel" >女</label>

                                    </div>

                                    <div class="nameBorder">
                                            <div class="memberInfoName">出生日期</div>
                                            <input :value="editValue[2]"  style="background-color: rgba(255, 255, 255, 0) ; color:gray; width:470px;" type="date" @keyup="inputtype(2,$event)" id="memberHBYdate" v-if="editValue[2]==null">

                                            <input :value="editValue[2]"  style="background-color: rgba(255, 255, 255, 0) ; color:gray; width:470px;" type="input" @keyup="inputtype(2,$event)" id="memberHBYdate"  disabled v-else>
                                    </div>
                                    <div class="nameBorder">
                                            <div class="memberInfoName">手機號碼</div>
                                            <input :value="editValue[3]" @focus="inputFocus(3,$event)" @blur="inputBlur(3,$event)" @keyup="inputtype(3,$event)">
                                    </div>
                                    <div class="nameBorder">
                                            <div class="memberInfoName">E-mail</div>
                                            <input :value="editValue[4]" @focus="inputFocus(4,$event)" @blur="inputBlur(4,$event)" @keyup="inputtype(4,$event)">
                                    </div>
                                    <div class="nameBorder">
                                            <div class="memberInfoName">會員密碼</div>
                                            <input :value="editValue[5]" type="password" @focus="inputFocus(5,$event)" @blur="inputBlur(5,$event)" v-if="firstshowspasswd==false" @keyup="inputtype(5,$event)">
                                            <input :value="editValue[5]" type="text" @focus="inputFocus(5,$event)" @blur="inputBlur(5,$event)" v-else @keyup="inputtype(5,$event)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20.455" viewBox="0 0 27 20.455" @click="changefirstshowspasswd">
                                                <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(1.5 1.5)">
                                                    <path id="Path_157" data-name="Path 157" d="M1.5,14.727S5.864,6,13.5,6s12,8.727,12,8.727-4.364,8.727-12,8.727S1.5,14.727,1.5,14.727Z" transform="translate(-1.5 -6)" fill="none" stroke="#996a4d" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                                    <path id="Path_158" data-name="Path 158" d="M20.136,16.818A3.318,3.318,0,1,1,16.818,13.5,3.318,3.318,0,0,1,20.136,16.818Z" transform="translate(-4.818 -8.091)" fill="none" stroke="#996a4d" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                                </g>
                                            </svg>

                                    </div>
                                    <div class="nameBorder" >
                                            <div class="memberInfoName" >確認密碼</div>
                                            <input type="password" :value="editValue[6]" @focus="inputFocus(6,$event)" @blur="inputBlur(6,$event)" v-show="!secshowspasswd" @keyup="inputtype(6,$event)" >
                                            <input type="text" :value="editValue[6]" @focus="inputFocus(6,$event)" @blur="inputBlur(6,$event)" v-show="secshowspasswd" @keyup="inputtype(6,$event)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="20.455" viewBox="0 0 27 20.455" @click="changesecshowspasswd">
                                                <g id="Icon_feather-eye" data-name="Icon feather-eye" transform="translate(1.5 1.5)">
                                                    <path id="Path_157" data-name="Path 157" d="M1.5,14.727S5.864,6,13.5,6s12,8.727,12,8.727-4.364,8.727-12,8.727S1.5,14.727,1.5,14.727Z" transform="translate(-1.5 -6)" fill="none" stroke="#996a4d" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                                    <path id="Path_158" data-name="Path 158" d="M20.136,16.818A3.318,3.318,0,1,1,16.818,13.5,3.318,3.318,0,0,1,20.136,16.818Z" transform="translate(-4.818 -8.091)" fill="none" stroke="#996a4d" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                                </g>
                                            </svg>

                                    </div>
                                <div class="memberEditCancel">
                                    <button class="btnL_light" @click="cancel">取消</button>
                                    <button class="btnL" @click="confirms" >確認</button>
                                </div>
                            </div>
                        </div>
                </div>
            `,
    data() {
        return {  //組件的變數寫在這裡！
            values: [
                { name: "姓名", val: "王某某" },
                { name: "性別", val: "" },
                { name: "出生日期", val: "" },
                { name: "手機號碼", val: "" },
                { name: "E-mail", val: "jumper@gmail.com" },
                { name: "會員密碼", val: "0123456789" },
                { name: "確認密碼", val: "0123456789" },
                { name: "照片", val: "照片" },

            ],
            checkSend: false,
            passwdwd: '',
            editType: false,
            editValue: [],
            gender: '',
            firstshowspasswd: false,
            secshowspasswd: false,
        };

    },
    methods: {
        inputtype(index, event) {
            this.editValue[index] = '';
            this.editValue[index] = event.target.value;
        },
        fileChange: function (e) {
            let files = document.getElementById('editImgInput').files[0];
            // console.log(files);
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

        edit() {
            for (let i = 0; i < this.values.length; i++) {
                this.editValue.push(this.values[i].val);
            }
            this.editType = true;
        },
        cancel() {
            this.editType = false;
        },
        confirms() {
            let phone = /^09\d{8}$/;
            let emails = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/;
            console.log(phone.test(this.editValue[4]));
            for (let i = 0; i < this.editValue.length; i++) {
                if (this.editValue[i] != '') {
                    if (this.editValue[5] == this.editValue[6]) {
                        if (phone.test(this.editValue[3])) {
                            if (emails.test(this.editValue[4])) {
                                if (i == (this.editValue.length - 1)) {
                                    this.checkSend = true;
                                }
                            } else {
                                this.checkSend = false;
                                alert('email格式錯誤');
                                return 0;
                            }
                        } else {
                            this.checkSend = false;
                            alert('電話必須09開頭且要10碼');
                            return 0;
                        }
                    } else {
                        this.checkSend = false;
                        alert('密碼與確認密碼必須相同');
                        return 0;
                    }
                } else {
                    this.checkSend = false;
                    break;
                }
            }
            if (this.checkSend) {
                this.editValue[2] = document.getElementById("memberHBYdate").value;
                if (this.editValue[1] == "女") {
                    this.editValue[1] = 1;
                } else {
                    this.editValue[1] = 0;

                }
                axios.post('../../php/memberedit.php', {
                    name: this.editValue[0],
                    gender: this.editValue[1],
                    birthday: this.editValue[2],
                    phone: this.editValue[3],
                    email: this.editValue[4],
                    passwd: this.editValue[5]

                }).then(res => {
                    let data = res.data[0];
                    this.values[0].val = data.name;
                    if (data.gender == 0) {
                        this.values[1].val = "男";
                    } else if (data.gender == 1) {
                        this.values[1].val = "女";
                    } else {
                        this.values[1].val = "";
                    }
                    this.values[2].val = data.birthday;
                    this.values[3].val = data.phone;
                    this.values[4].val = data.email;
                    this.values[5].val = data.password;
                    this.values[6].val = data.password;
                    this.editValue = [];
                    this.editType = false;
                });
            } else {
                alert('欄位內容不能為空');
            }
        },
        inputFocus(index, event) {
            if (event.target.value == this.values[index].val) {
                event.target.value = '';
            }

        },
        inputBlur(index, event) {
            if (event.target.value == '') {
                event.target.value = this.values[index].val;
                this.editValue[index] = this.values[index].val;
            }
        }
    },
    mounted() {
        axios.get('../../php/memberinfo.php').then(res => {
            if (res.data != 0) {
                let data = res.data[0];
                this.values[0].val = data.name;
                if (data.gender == 0) {
                    this.values[1].val = "男";
                } else if (data.gender == 1) {
                    this.values[1].val = "女";
                } else {
                    this.values[1].val = "";
                }
                this.values[2].val = data.birthday;
                this.values[3].val = data.phone;
                this.values[4].val = data.email;
                this.values[5].val = data.password;
                this.values[6].val = data.password;
            } else {
                alert("請登入後再進行。");
                location.href = "./login.html";

            }
        });
        let passwdlength = this.values[5].val.length;
        for (let i = 0; i < passwdlength; i++) {
            this.passwdwd += '*';
        }

        this.gender = this.values[1].val;


    },
    updated() {
        let height = $(window).innerHeight() - parseInt($("#the_header").css('height')) - parseInt($("#member").css('height')) - parseInt($("#the_footer").css('height')) - 200;  //200 margin-top & bottom
        $("#memberSpace").css("height", height);

    },
    filters: {
        phoneFormater(phone) {
            if (phone != '' && phone != undefined) {
                let num = '';
                num += phone.substr(0, 4);
                num += "-";
                num += phone.substr(4, 3);
                num += "-";
                num += phone.substr(7, 3);
                return num;
            }
        }
    }

};