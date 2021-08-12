const TravelEdit = {
    template: `
<div id="right" v-if="add ==true">
    <div id="memberLove">
        <h2>管理旅遊</h2>
    </div>
    <div id="travelAdd">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" @click="AddTravel">
            <g id="Group_291" data-name="Group 291" transform="translate(-13431 -1300)">
                <g id="Group_290" data-name="Group 290">
                    <g id="Ellipse_81" data-name="Ellipse 81" transform="translate(13431 1300)" fill="#fff"
                        stroke="#707070" stroke-width="1">
                        <circle cx="12.5" cy="12.5" r="12.5" stroke="none" />
                        <circle cx="12.5" cy="12.5" r="12" fill="#996A4D" />
                    </g>
                </g>
                <path id="Icon_awesome-plus" data-name="Icon awesome-plus"
                    d="M14.434,8.357h-5v-5a1.11,1.11,0,0,0-1.11-1.11H7.217a1.11,1.11,0,0,0-1.11,1.11v5h-5A1.11,1.11,0,0,0,0,9.467v1.11a1.11,1.11,0,0,0,1.11,1.11h5v5a1.11,1.11,0,0,0,1.11,1.11h1.11a1.11,1.11,0,0,0,1.11-1.11v-5h5a1.11,1.11,0,0,0,1.11-1.11V9.467A1.11,1.11,0,0,0,14.434,8.357Z"
                    transform="translate(13435.721 1302.485)" />
            </g>
        </svg>
        <div id="clickAdd">
        </div>
    </div>
    <div id="addFrom">
        <div class="travelInputBorder">
            <div class="travelInputEditTitle"><span>主題名稱：</span></div>
            <input @keyup="userText(0,$event)">
        </div>
        <div class="travelInputBorder">
            <div class="travelInputEditTitle"><span>類別：</span></div>
            <select v-model="userAdd[1]">
                <option value="1" selected>美洲</option>
                <option value="2">亞洲</option>
                <option value="3">非洲</option>
                <option value="4">歐洲</option>
                <option value="5">大洋洲</option>
            </select>
        </div>
        <div class="travelInputBorder">
            <div class="travelInputEditTitle"><span>地點：</span></div>
            <input @keyup="userText(2,$event)">
        </div>
        <div class="travelInputBorder">
            <div class="travelInputEditTitle"><span>價格：</span></div>
            <input @keyup="userText(3,$event)">
        </div>
        <!-- <div class="travelInputBorder">
                                    <div class="travelInputEditTitle"><span>影片連結：</span></div>
                                    <input >
                            </div> -->
        <div class="travelInputBorder Imginput">
            <div class="travelInputEditTitle"><span>圖片上傳：</span></div>
            <div>
                <div class="showImg" v-if="files==0">

                </div>
                <div class="showImg" v-else>
                    <div class="addimgborders" v-for="(file,index) in files">
                        <img :src="file">
                        <div class="addimgdelete" @click="checkDeleteAddImg(index)">
                        </div>
                    </div>
                </div>
                <input type="file" multiple @change="fileChange" id="ImginputFiles" ref="update">
                <div class="clickInput" @click="InputImg">
                    上傳照片
                </div>
            </div>
        </div>
        <div class="travelInputBorder Content">
            <div class="travelInputEditTitle"><span>活動內容：</span></div>
            <textarea placeholder="活動內容" @keyup="userText(4,$event)"> </textarea>
        </div>
        <!--
                            <div class="travelInputBorder">
                                    <div class="travelInputEditTitle"><span>自備物品：</span></div>
                                    <input >
                            </div>
                            -->
    </div>
    <div class="memberEditCancel">
        <button class="btnL_light" @click="cancel">取消</button>
        <button class="btnL" @click="confirms">確認</button>
    </div>

</div>

<div id="right" v-else>
    <div id="memberLove">
        <h2>管理旅遊</h2>
    </div>
    <div id="travelAdd">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" @click="AddTravel">
            <g id="Group_291" data-name="Group 291" transform="translate(-13431 -1300)">
                <g id="Group_290" data-name="Group 290">
                    <g id="Ellipse_81" data-name="Ellipse 81" transform="translate(13431 1300)" fill="#fff"
                        stroke="#707070" stroke-width="1">
                        <circle cx="12.5" cy="12.5" r="12.5" stroke="none" />
                        <circle cx="12.5" cy="12.5" r="12" fill="#996A4D" />
                    </g>
                </g>
                <path id="Icon_awesome-plus" data-name="Icon awesome-plus"
                    d="M14.434,8.357h-5v-5a1.11,1.11,0,0,0-1.11-1.11H7.217a1.11,1.11,0,0,0-1.11,1.11v5h-5A1.11,1.11,0,0,0,0,9.467v1.11a1.11,1.11,0,0,0,1.11,1.11h5v5a1.11,1.11,0,0,0,1.11,1.11h1.11a1.11,1.11,0,0,0,1.11-1.11v-5h5a1.11,1.11,0,0,0,1.11-1.11V9.467A1.11,1.11,0,0,0,14.434,8.357Z"
                    transform="translate(13435.721 1302.485)" />
            </g>
        </svg>
    </div>

    <div v-if="mobile == false">
        <div id="travelNavBar">
            <div class="travelNavBarP" v-for="title in titles">
                <p>{{title}}</p>
            </div>
        </div>

        <div class="travelValue" v-for="(value,index) in datas">
            <div class="travelP">
                <p>{{value.title}}</p>
            </div>
            <div class="travelP">
                <p>{{value.place}}</p>
            </div>
            <div class="travelP">
                <p>{{value.event_price}}元</p>
            </div>
            <div class="travelP">
                <p>{{checkeds(index)}}</p>
            </div>
            <div class="travelP">
                <p v-if="checkstatus(index)" @click="addDate(index)">新增日期</p>
            </div>
            <div class="travelP">
                <p v-if="checkstatus(index)" @click="EditWorks(index)">編輯活動</p>
            </div>
            <div class="travelP">
                <p v-if="checkstatus(index)">下架</p>
            </div>
            <div class="travelP" @click="changeWorks(index)"">
                    <p v-if=" checkstatus(index)">查看活動</p>
            </div>
        </div>
    </div>

    <div v-else>
        <div class="travelValue" v-for="(value,index) in values">
            <div class="travelP" @click="mobileShowInfo(index)">
                <p>活動名稱：{{value.title}}</p>
            </div>
            <div class="travelP">
                <p>地點：{{value.category}}</p>
            </div>
            <div class="travelP">
                <p>日期：{{value.date}}</p>
            </div>
            <div class="travelP">
                <p>時間：{{value.time}}</p>
            </div>
            <div class="travelP">
                <p>人數：{{value.people}}</p>
            </div>
            <div class="travelP">
                <p>審核狀態：{{value.status}}</p>
            </div>
            <div class="travelP">
                <p>{{value.edit}}</p>
            </div>
            <div class="travelP">
                <p>{{value.cancel}}</p>
            </div>
        </div>
    </div>
    <div id="memberAddDate" v-if="addD">
        <div class="body">
            <h2>{{WorksTitle}}</h2>
            <input type="datetime-local" ref="addInput">
            <div class="memberEditCancel">
                <button class="btnL_light" @click="workcancel">取消</button>
                <button class="btnL" @click="addConfirms">確認</button>
            </div>
            <svg xmlns=" http://www.w3.org/2000/svg" width="24" height="23.994" viewBox="0 0 24 23.994"
                @click="workcancel" class="closed">
                <path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close"
                    d="M26.129,23.286,34.7,14.714a2.009,2.009,0,1,0-2.841-2.841l-8.572,8.572-8.572-8.572a2.009,2.009,0,1,0-2.841,2.841l8.572,8.572-8.572,8.572A2.009,2.009,0,0,0,14.716,34.7l8.572-8.572L31.86,34.7A2.009,2.009,0,0,0,34.7,31.857Z"
                    transform="translate(-11.285 -11.289)" fill="#996A4D" />
            </svg>
        </div>
    </div>
    <div id="editWorksOnMember" v-else-if="editWork">
        <div class="body">
            <div class="travelInputBorder">
                <div class="travelInputEditTitle" ><span>主題名稱：</span></div>
                <input :value="userAdd[0]" disabled>
            </div>
            <div class="travelInputBorder">
                <div class="travelInputEditTitle" ><span>類別：</span></div>
                <select v-model="userAdd[1]"  disabled>
                    <option value="1" selected>美洲</option>
                    <option value="2">亞洲</option>
                    <option value="3">非洲</option>
                    <option value="4">歐洲</option>
                    <option value="5">大洋洲</option>
                </select>
            </div>
            <div class="travelInputBorder">
                <div class="travelInputEditTitle"><span>地點：</span></div>
                <input :value="userAdd[2]" disabled>
            </div>
            <div class="travelInputBorder">
                <div class="travelInputEditTitle"><span>價格：</span></div>
                <input :value="userAdd[3]" @keyup="editText(3,$event)">
            </div>
                    <!--
                    <div class="travelInputBorder Imginput">
                        <div class="travelInputEditTitle"><span>圖片上傳：</span></div>
                        <div>
                            <div class="showImg" v-if="files==0">

                            </div>
                            <div class="showImg" v-else>
                                <div class="addimgborders" v-for="(file,index) in files">
                                    <img :src="file">
                                    <div class="addimgdelete" @click="checkDeleteAddImg(index)">
                                    </div>
                                </div>
                            </div>
                            <input type="file" multiple @change="fileChange" id="ImginputFiles" ref="update">
                            <div class="clickInput" @click="InputImg">
                                上傳照片
                            </div>
                        </div>
                    </div>
                    -->
            <div class="travelInputBorder Content">
                <div class="travelInputEditTitle"><span>活動內容：</span></div>
                <textarea placeholder="活動內容" :value="userAdd[4]" @keyup="editText(4,$event)"> </textarea>
            </div>

            <div class="memberEditCancel">
                <button class="btnL_light" @click="workcancel">取消</button>
                <button class="btnL" @click="EditConfirms">確認</button>
            </div>
            <svg xmlns=" http://www.w3.org/2000/svg" width="24" height="23.994" viewBox="0 0 24 23.994"
                @click="workcancel" class="closed">
                <path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close"
                    d="M26.129,23.286,34.7,14.714a2.009,2.009,0,1,0-2.841-2.841l-8.572,8.572-8.572-8.572a2.009,2.009,0,1,0-2.841,2.841l8.572,8.572-8.572,8.572A2.009,2.009,0,0,0,14.716,34.7l8.572-8.572L31.86,34.7A2.009,2.009,0,0,0,34.7,31.857Z"
                    transform="translate(-11.285 -11.289)" fill="#996A4D" />
            </svg>
        </div>
    </div>
    <div id="checkWork" v-else-if="showWork">
        <div class="body">
            <h2>{{WorksTitle}}</h2>
            <div class="workborder">
                <div class="titlesborders">
                    日期
                </div>
                <div class="titlesborders">
                    時間
                </div>
                <div class="titlesborders">
                    已參加人數
                </div>
                <div class="titlesborders">
                </div>
                <div class="titlesborders">

                </div>
            </div>
            <div class="workborder" v-for="(work , index) in checkWorks">
                <div class="titlesborders">
                    {{dateMath(index)}}
                </div>
                <div class="titlesborders">
                    {{timeMath(index)}}
                </div>
                <div class="titlesborders">
                    {{work.attendence}}
                </div>
                <div class="titlesborders" @click="gototravel(index)">
                    前往旅遊
                </div>
                <div class="titlesborders">
                    取消
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23.994" viewBox="0 0 24 23.994"
                @click="workcancel" class="closed">
                <path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close"
                    d="M26.129,23.286,34.7,14.714a2.009,2.009,0,1,0-2.841-2.841l-8.572,8.572-8.572-8.572a2.009,2.009,0,1,0-2.841,2.841l8.572,8.572-8.572,8.572A2.009,2.009,0,0,0,14.716,34.7l8.572-8.572L31.86,34.7A2.009,2.009,0,0,0,34.7,31.857Z"
                    transform="translate(-11.285 -11.289)" fill="#996A4D" />
            </svg>
            <div class="loveNumberNav">
            <div class="loveNavs">
                <div class="loveLeft">
                    &lt; </div>
                <div class="mid">
                    1/2
                </div>

                <div class="loveRight">
                    &gt;
                </div>
            </div>
        </div>
        </div>
        <div class="loveNumberNav">
                <div class="loveNavs">
                    <div class="loveLeft" @click="back">
                        < </div>
                            <div class="mid">
                                {{now}}/{{total}}
                            </div>

                            <div class="loveRight" @click="next">
                                &gt;
                            </div>
                    </div>
                </div>
            </div>

        <div class="mobileLoveBtn">
            <button class="btnL_light">顯示更多</button>
        </div>
        <div id="travelEditPop" v-show="pops">
            <div>
                <p>已傳送至管理員後台，請等待審核。</p>
                <button class="btnL" @click="popconfirms">確認</button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23.994" viewBox="0 0 24 23.994"
                    @click="popconfirms">
                    <path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close"
                        d="M26.129,23.286,34.7,14.714a2.009,2.009,0,1,0-2.841-2.841l-8.572,8.572-8.572-8.572a2.009,2.009,0,1,0-2.841,2.841l8.572,8.572-8.572,8.572A2.009,2.009,0,0,0,14.716,34.7l8.572-8.572L31.86,34.7A2.009,2.009,0,0,0,34.7,31.857Z"
                        transform="translate(-11.285 -11.289)" fill="#996a4d" />
                </svg>

            </div>
        </div>
    </div>
            `,
    data() {
        return {  //組件的變數寫在這裡！
            values: [
                { title: "尼加瓜拉大瀑布一起感受世界三大跨國瀑布。", category: "美國", people: "13人", status: "審核通過", edit: "新增日期", cancel: "取消", abc: "查看活動", def: "編輯內容" },
                { title: "尼加瓜拉大瀑布一起感受世界三大跨國瀑布。", category: "美國", people: "0 人", status: "審核通過", edit: "新增日期", cancel: "取消", abc: "查看活動", def: "編輯內容" },
                { title: "尼加瓜拉大瀑布一起感受世界三大跨國瀑布。", category: "美國", people: "", status: "審核中", edit: "新增日期", cancel: "取消", abc: "查看活動", def: "編輯內容" },
                { title: "尼加瓜拉大瀑布一起感受世界三大跨國瀑布。", category: "美國", people: "", status: "審核失敗", edit: "新增日期", cancel: "取消", abc: "查看活動", def: "編輯內容" },

            ],
            datas: [],
            editDatas: [],
            checkWorks: [],
            WorksTitle: '',
            indexs: '',
            addD: false,
            editWork: false,
            titles: [
                "活動名稱",
                "地點",
                "價格",
                "審核狀態",
                "　　",
                "　　",
                "　　"
            ],
            add: false,
            pops: false,
            files: [],
            mobile: false,
            screenwidth: window.innerWidth,
            mobileshowinfo: [],
            showWork: false,
            show: 4,
            now: 0,
            total: 0,
            close: 0,
            userAdd: ['', '1', '', '', ''],

        };
    },
    methods: {
        editText(index, event) {
            this.userAdd[index] = '';
            this.userAdd[index] = event.target.value;
        },
        EditConfirms() {
            axios.post('../../php/member_edit_editWork.php', {
                index: this.datas[this.indexs].ID,
                money: this.userAdd[3],
                text: this.userAdd[4],
                now: new Date().getTime(),
            }).then(res => {
                let data = res.data;
                console.log(data);
                if (data == 0) {
                    alert('請等待活動結束後再進行編輯');
                } else {
                    alert('修改完成');
                }
                this.userAdd = ['', '1', '', '', ''];
                this.index = '';
                this.WorksTitle = '';
                this.editWork = false;
            })
        },
        EditWorks(index) {
            this.userAdd = [];
            this.userAdd.push(this.datas[index].title);
            this.userAdd.push(this.datas[index].category);
            this.userAdd.push(this.datas[index].place);
            this.userAdd.push(this.datas[index].event_price);
            this.userAdd.push(this.datas[index].content);
            this.WorksTitle = this.datas[index].title;
            this.indexs = index;
            this.editWork = !this.editWork;
        },
        addConfirms() {
            let now = new Date().getTime() + (24 * 60 * 60 * 1000);
            let set = new Date(this.$refs.addInput.value).getTime();
            if (this.$refs.addInput.value != '' && set > now) {
                axios.post('../../php/member_edit_addWork.php', {
                    index: this.datas[this.indexs].ID,
                    start: set,
                    end: set + (60 * 60 * 1000),
                }).then(res => {
                    if (res.data == 1) {
                        alert('新增成功');
                        this.index = '';
                        this.WorksTitle = '';
                        this.addD = false;
                    } else {
                        alert('新增失敗');
                    }
                })
            } else {
                alert('選擇時間不能為空或者時間要一天後')
            }
        },
        addDate(index) {
            this.WorksTitle = this.datas[index].title;
            this.indexs = index;
            this.addD = !this.addD;

        },
        userText(index, event) {
            this.userAdd[index] = event.target.value;
        },
        checkstatus(index) {
            if (this.datas[index].is_checked == '1') {
                return true;
            } else {
                return false;
            }
        },
        timeMath(index) {
            let startTime = new Date(Number(this.checkWorks[index].started_at));
            let endTime = new Date(Number(this.checkWorks[index].ended_at));
            let text = '';
            text += (startTime.getHours() + 1 < 10 ? '0' : '') + startTime.getHours() + ':';
            text += (startTime.getMinutes() + 1 < 10 ? '0' : '') + startTime.getMinutes();
            text += "~";
            text += (endTime.getHours() + 1 < 10 ? '0' : '') + endTime.getHours() + ':';
            text += (endTime.getMinutes() + 1 < 10 ? '0' : '') + endTime.getMinutes();
            return text;
        },
        dateMath(index) {
            let startTime = new Date(Number(this.checkWorks[index].started_at));
            let text = '';
            text += startTime.getFullYear() + '-';
            text += (startTime.getMonth() + 1 < 10 ? '0' + (startTime.getMonth() + 1) : startTime.getMonth() + 1) + '-';
            text += (startTime.getDate() + 1 < 10 ? '0' : '') + startTime.getDate() + ' ';
            return text;
        },
        gototravel(index) {
            window.open(this.checkWorks[index].vedio_link);
        },
        checkeds(index) {
            if (this.datas[index].is_checked == '1') {
                return '審核通過';
            } else if (this.datas[index].is_checked == '0') {
                return '審核中';
            } else if (this.datas[index].is_checked == '2') {
                return '審核失敗';
            }
        },
        next() {
            if (this.now != this.total) {
                this.show += 4;
                this.close += 4;
                this.now++;
            }
        },
        back() {
            if (this.now > 1) {
                this.show -= 4;
                this.close -= 4;
                this.now--;

            }
        },
        workcancel() {
            this.checkWorks = [];
            this.WorksTitle = '';
            this.showWork = false;
            this.addD = false;
            this.editWork = false;
            this.indexs = '';
        },
        changeWorks(index) {
            axios.post('../../php/member_traveledit_checkwork.php', {
                ID: 1,
                product: this.datas[index].ID,
                now: new Date().getTime()
            }).then(res => {
                let data = res.data;
                this.checkWorks = data;
            }).then(res => {
                this.WorksTitle = this.datas[index].title;
                this.showWork = !this.showWork;
            })
        },
        mobileShowInfo(index) {
            let show = document.getElementsByClassName("travelValue")[index];
            if (!show.classList.contains("mobileshowinfo")) {
                show.classList.add("mobileshowinfo");
            } else {
                show.classList.remove("mobileshowinfo");

            }

        },
        checkDeleteAddImg: function name(index) {
            let yes = confirm("確定要移除這張此照片嗎?");
            if (yes) {
                this.files.splice(index, 1);
            }
        },
        AddTravel() {
            this.userAdd = ['', '1', '', '', ''];
            this.files = [];
            this.add = !this.add;
        },
        cancel() {
            this.userAdd = ['', '1', '', '', ''];
            this.files = [];
            this.add = false;

        },
        confirms() {
            if (this.userAdd[0] != '' && this.userAdd[1] != '' && this.userAdd[2] != '' && this.userAdd[3] != '' && this.userAdd[4] != '') {
                axios.post('../../php/member_edit_addproduct.php', {
                    ID: 1,
                    productTitle: this.userAdd[0],
                    category: this.userAdd[1],
                    place: this.userAdd[2],
                    event_price: this.userAdd[3],
                    content: this.userAdd[4],
                    pic: this.files
                }).then(res => {
                    let data = res.data;
                    this.datas = data;
                    this.userAdd = ['', '1', '', '', ''];
                    this.files = [];
                    this.add = false;
                    this.pops = true;
                })
            } else {
                alert('欄位不能為空');
            }

        },
        popconfirms() {
            this.pops = false;
        },
        InputImg: function (event) {
            let inputBtn = event.target.parentNode.children[1];
            inputBtn.click();
        },
        fileChange: function (e) {
            let files = this.$refs.update.files;

            if (files.length <= 6 && this.files.length <= 6 && (this.files.length + files.length) <= 6) {
                for (let i = 0; i < files.length; i++) {
                    let readFile = new FileReader();
                    readFile.readAsDataURL(files[i]);
                    readFile.addEventListener('load', (event) => {
                        this.files.unshift(readFile.result);
                    })
                }
            } else {
                alert('照片只能放入六張');
            }
        }
    }, mounted() {
        var _this = this
        window.onresize = function () { // 定義視窗大小變更通知事件
            _this.screenwidth = window.innerWidth // 視窗高度
        }
        if (window.innerWidth < 996) {
            this.mobile = true;
        }
        for (let i = 0; i < this.values.length; i++) {
            this.mobileshowinfo.push(false);
        }
        axios.post('../../php/member_traveledit.php', {
        }).then(res => {
            let data = res.data;
            this.datas = data;
        }).then(function () {
            this.total = Math.ceil(this.datas.length / 4);
            if (this.datas.length > 0) {
                this.now = 1;
            }
        })
    }, watch: {
        'screenwidth': function (val) {
            if (window.innerWidth < 996) {
                this.mobile = true;
            } else {
                this.mobile = false;
            }
        }
    }
};