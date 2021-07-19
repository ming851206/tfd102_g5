const TravelEdit = {
    template: `
                    <div id="right">
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
                        <div>
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
        };
    },
};