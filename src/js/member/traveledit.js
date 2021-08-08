const TravelEdit = {
    template: `
                    <div id="right" v-if="add ==true">
                        <div id="memberLove">
                            <h2>管理旅遊</h2>
                        </div>
                        <div id="travelAdd">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                    <g id="Group_291" data-name="Group 291" transform="translate(-13431 -1300)">
                                        <g id="Group_290" data-name="Group 290">
                                            <g id="Ellipse_81" data-name="Ellipse 81" transform="translate(13431 1300)" fill="#fff" stroke="#707070" stroke-width="1">
                                                <circle cx="12.5" cy="12.5" r="12.5" stroke="none"/>
                                                <circle cx="12.5" cy="12.5" r="12" fill="#996A4D"/>
                                            </g>
                                        </g>
                                        <path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M14.434,8.357h-5v-5a1.11,1.11,0,0,0-1.11-1.11H7.217a1.11,1.11,0,0,0-1.11,1.11v5h-5A1.11,1.11,0,0,0,0,9.467v1.11a1.11,1.11,0,0,0,1.11,1.11h5v5a1.11,1.11,0,0,0,1.11,1.11h1.11a1.11,1.11,0,0,0,1.11-1.11v-5h5a1.11,1.11,0,0,0,1.11-1.11V9.467A1.11,1.11,0,0,0,14.434,8.357Z" transform="translate(13435.721 1302.485)"/>
                                    </g>
                                </svg>
                                <div id="clickAdd">
                                </div>
                        </div>
                        <div id="addFrom">
                            <div class="travelInputBorder">
                                    <div class="travelInputEditTitle"><span>主題名稱：</span></div>
                                    <input>
                            </div>
                            <div class="travelInputBorder">
                                    <div class="travelInputEditTitle"><span>類別：</span></div>
                                    <select>
                                        <option value="1" selected>美洲</option>
                                        <option value="2">亞洲</option>
                                        <option value="3">非洲</option>
                                        <option value="4">歐洲</option>
                                        <option value="5">大洋洲</option>
                                    </select>
                            </div>
                            <div class="travelInputBorder">
                                    <div class="travelInputEditTitle"><span>時間：</span></div>
                                    <input >
                            </div>
                            <div class="travelInputBorder">
                                    <div class="travelInputEditTitle"><span>人數：</span></div>
                                    <input >
                            </div>
                            <div class="travelInputBorder">
                                    <div class="travelInputEditTitle"><span>影片連結：</span></div>
                                    <input >
                            </div>
                            <div class="travelInputBorder Imginput" >
                                    <div class="travelInputEditTitle"><span>圖片上傳：</span></div>
                                    <div>
                                        <div class="showImg" v-if="files==0">

                                        </div>
                                        <div class="showImg" v-else>
                                            <div class="addimgborders" v-for="(file,index) in files" >
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
                                    <textarea placeholder="活動內容" > </textarea>
                            </div>
                            <div class="travelInputBorder">
                                    <div class="travelInputEditTitle"><span>自備物品：</span></div>
                                    <input >
                            </div>
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
                        <div id="travelAdd" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" @click ="AddTravel">
                                    <g id="Group_291" data-name="Group 291" transform="translate(-13431 -1300)">
                                        <g id="Group_290" data-name="Group 290">
                                        <g id="Ellipse_81" data-name="Ellipse 81" transform="translate(13431 1300)" fill="#fff" stroke="#707070" stroke-width="1">
                                            <circle cx="12.5" cy="12.5" r="12.5" stroke="none"/>
                                            <circle cx="12.5" cy="12.5" r="12" fill="#996A4D"/>
                                        </g>
                                        </g>
                                        <path id="Icon_awesome-plus" data-name="Icon awesome-plus" d="M14.434,8.357h-5v-5a1.11,1.11,0,0,0-1.11-1.11H7.217a1.11,1.11,0,0,0-1.11,1.11v5h-5A1.11,1.11,0,0,0,0,9.467v1.11a1.11,1.11,0,0,0,1.11,1.11h5v5a1.11,1.11,0,0,0,1.11,1.11h1.11a1.11,1.11,0,0,0,1.11-1.11v-5h5a1.11,1.11,0,0,0,1.11-1.11V9.467A1.11,1.11,0,0,0,14.434,8.357Z" transform="translate(13435.721 1302.485)"/>
                                    </g>
                                </svg>
                                <div id="clickAdd">
                                </div>
                        </div>
                        <div v-if="mobile == false">
                            <div id="travelNavBar">
                                <div class = "travelNavBarP" v-for="title in titles">
                                    <p >{{title}}</p>
                                </div>
                            </div>
                            <div class="travelValue" v-for="value in values">
                                <div class="travelP">
                                    <p>{{value.title}}</p>
                                </div>
                                <div class="travelP">
                                    <p>{{value.category}}</p>
                                </div>
                                <div class="travelP">
                                    <p>{{value.date}}</p>
                                </div>
                                <div class="travelP">
                                    <p>{{value.time}}</p>
                                </div>
                                <div class="travelP">
                                    <p>{{value.people}}</p>
                                </div>
                                <div class="travelP">
                                    <p>{{value.status}}</p>
                                </div>
                                <div class="travelP">
                                    <p>{{value.edit}}</p>
                                </div>
                                <div class="travelP">
                                    <p>{{value.cancel}}</p>
                                </div>
                            </div>
                        </div>

                        <div v-else>
                            <div class="travelValue" v-for="(value,index) in values"   >
                                <div class="travelP" @click="mobileShowInfo(index)">
                                    <p>主題名稱：{{value.title}}</p>
                                </div>
                                <div class="travelP">
                                    <p>類別：{{value.category}}</p>
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

                        <div class="loveNumberNav">
                            <div class="loveNavs">
                                <div class="loveLeft">
                                    < </div>
                                        <div class="mid">
                                            1/2
                                        </div>

                                        <div class="loveRight">
                                            >
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23.994" viewBox="0 0 24 23.994" @click="popconfirms">
                                    <path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close" d="M26.129,23.286,34.7,14.714a2.009,2.009,0,1,0-2.841-2.841l-8.572,8.572-8.572-8.572a2.009,2.009,0,1,0-2.841,2.841l8.572,8.572-8.572,8.572A2.009,2.009,0,0,0,14.716,34.7l8.572-8.572L31.86,34.7A2.009,2.009,0,0,0,34.7,31.857Z" transform="translate(-11.285 -11.289)" fill="#996a4d"/>
                                </svg>

                            </div>
                        </div>
                     </div>

            `,
    data() {
        return {  //組件的變數寫在這裡！
            values: [
                { title: "尼加瓜拉大瀑布一起感受世界三大跨國瀑布。", category: "美國", date: "06月23日 周三", time: "上午5:00 - 上午 6:00", people: "13人", status: "審核通過", edit: "編輯", cancel: "取消" },
                { title: "尼加瓜拉大瀑布一起感受世界三大跨國瀑布。", category: "美國", date: "06月23日 周三", time: "上午5:00 - 上午 6:00", people: "0 人", status: "審核通過", edit: "編輯", cancel: "取消" },
                { title: "尼加瓜拉大瀑布一起感受世界三大跨國瀑布。", category: "美國", date: "", time: "", people: "", status: "審核中", edit: "編輯", cancel: "取消" },
                { title: "尼加瓜拉大瀑布一起感受世界三大跨國瀑布。", category: "美國", date: "", time: "", people: "", status: "審核失敗", edit: "修改", cancel: "取消" },

            ],
            titles: [
                "主題名稱",
                "類別",
                "日期",
                "時間",
                "人數",
                "審核狀態",
                "　　",
                "　　"
            ],
            add: false,
            pops: false,
            files: [],
            mobile: false,
            screenwidth: window.innerWidth,
            mobileshowinfo: [],

        };
    },
    methods: {
        mobileShowInfo(index) {
            let show = document.getElementsByClassName("travelValue")[index];
            console.log(show.classList);
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
            this.add = true;
        },
        cancel() {
            this.add = false;
        },
        confirms() {
            this.add = false;
            this.pops = true;
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
            for (let i = 0; i < files.length; i++) {
                let readFile = new FileReader();
                readFile.readAsDataURL(files[i]);
                readFile.addEventListener('load', (event) => {
                    this.files.unshift(readFile.result);
                })
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