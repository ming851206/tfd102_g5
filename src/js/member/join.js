const Join = {
    template: `
                    <div id="right">
                        <div id="memberLove">
                            <h2>即將參與旅遊</h2>
                        </div>
                        <div id="loveContent">
                            <div class="loveContentBorder" v-for="(value,index) in datas" v-if="index < show" :class=" { 'next_off' : mobile!= true && index < close}">
                                <div class="cardBorder">
                                    <div class="loveImg">
                                        <img :src="value.intro_pics">
                                    </div>
                                    <div class="joinContents">
                                        <div class="loveContentsTop">
                                            <div class="headImg">
                                                <img :src="value.avatar">
                                            </div>
                                            <div class="StarAndFrom gotravel">
                                                <div class = "joinComment" v-if="times(index)" @click="gototravel(index)" style="margin-left:15px;">
                                                    前往旅遊
                                                </div>
                                                <div class = "joinComment" v-else @click="cancel(index)" style="margin-left:15px;" >
                                                    取消
                                                </div>
                                                <div id="joinStarAndFrom">
                                                    <div class="star">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="13.814" height="13.222"
                                                            viewBox="0 0 13.814 13.222">
                                                            <path id="Icon_awesome-star" data-name="Icon awesome-star"
                                                                d="M7.607.459,5.921,3.878l-3.772.55a.827.827,0,0,0-.457,1.41L4.421,8.5l-.646,3.757a.826.826,0,0,0,1.2.87L8.348,11.35l3.375,1.774a.826.826,0,0,0,1.2-.87L12.276,8.5,15,5.837a.827.827,0,0,0-.457-1.41l-3.772-.55L9.089.459a.827.827,0,0,0-1.482,0Z"
                                                                transform="translate(-1.441 0.001)" fill="#996a4d" />
                                                        </svg>

                                                        {{value.staravg}}
                                                    </div>
                                                    <div class="from">
                                                        {{value.place}}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeAndcomment">
                                            <div class = "joinTime">
                                                {{starttime(index)}}
                                            </div>
                                        </div>
                                        <p class="joinP">
                                            {{value.title}}
                                        </p>

                                    </div>
                                </div>


                            </div>

                        </div>
                        <div class="loveNumberNav">
                            <div class="loveNavs">
                                <div class="loveLeft" @click = "back">
                                    &lt; </div>
                                        <div class="mid">
                                            {{now}}/{{total}}
                                        </div>

                                        <div class="loveRight" @click ="next(0)">
                                            &gt;
                                        </div>
                                </div>
                            </div>
                            <div class="mobileLoveBtn">
                                    <button class="btnL_light" @click ="next(1)" :class=" { 'next_off' : this.show >= this.datas.length}">顯示更多</button>
                            </div>
                        </div>
            `,
    data() {
        return {  //組件的變數寫在這裡！
            values: [
                { star: "5", content: "Big Ben 大笨鐘倫敦，最具指標性的景觀。", from: "英國", time: "2021.07.13 1400~1500", comment: "前往旅遊" },
                { star: "4.8", content: "馬辰水上市場藝術節，體驗水上文化之旅。", from: "印尼", time: "2021.07.20 1400~1500", comment: "取消" },
                { star: "3", content: "漫步古羅馬遺址，燦爛一個時代的歷史文化古城。", from: "非洲", time: "2021.07.22 1400~1500", comment: "取消" },
                { star: "4.2", content: "泰國黃金海岸，欣賞Pattaya的海岸風光。", from: "泰國", time: "2021.07.23 1400~1500", comment: "取消" },
            ],
            datas: [],
            show: 4,
            now: 0,
            total: 0,
            close: 0,
            mobile: false,
        };
    }, methods: {
        next(mobile) {
            if (mobile == 0) {
                if (this.now != this.total) {
                    this.show += 4;
                    this.close += 4;
                    this.now++;
                }
            } else {
                if (this.now != this.total) {
                    this.show += 4;
                    this.close += 4;
                    this.now++;
                }
                this.mobile = true;
            }
        },
        back() {
            if (this.now > 1) {
                this.show -= 4;
                this.close -= 4;
                this.now--;

            }
        },
        times(index) {
            let now = new Date().getTime();
            let startTime = Number(this.datas[index].started_at);
            let oneDay = 24 * 60 * 60 * 1000;
            return ((startTime - oneDay) < now);
        },
        starttime(index) {
            let startTime = new Date(Number(this.datas[index].started_at));
            let endTime = new Date(Number(this.datas[index].ended_at));
            let text = '';
            text += startTime.getFullYear() + '-';
            text += (startTime.getMonth() + 1 < 10 ? '0' + (startTime.getMonth() + 1) : startTime.getMonth() + 1) + '-';
            text += (startTime.getDate() < 10 ? '0' : '') + startTime.getDate() + ' ';
            text += (startTime.getHours() < 10 ? '0' : '') + startTime.getHours() + ':';
            text += (startTime.getMinutes() < 10 ? '0' : '') + startTime.getMinutes();
            text += "~";
            text += (endTime.getHours() < 10 ? '0' : '') + endTime.getHours() + ':';
            text += (endTime.getMinutes() < 10 ? '0' : '') + endTime.getMinutes();
            return text;
        },
        gototravel(index) {
            window.open(this.datas[index].vedio_link);
        },
        cancel(index) {
            if (this.datas[index].status == 1) {
                let yes = confirm('確定要取消此項目?');
                if (yes) {
                    axios.post('./php/member_join_cancel.php', {
                        now: new Date().getTime(),
                        ID: this.datas[index].order_ID
                    }).then(res => {
                        let data = res.data;

                        this.datas = [];
                        this.datas = data;
                    }).then(res => {
                        this.total = Math.ceil(this.datas.length / 4);
                        if (this.datas.length > 0) {
                            this.now = 1;
                        }
                    })
                    alert('該項目已取消');
                }
            }
        }
    },
    mounted() {
        axios.post('./php/member_join.php', {
            now: new Date().getTime(),
        }).then(res => {
            let data = res.data;
            this.datas = data;
        }).then(res => {
            for (let i = 0; i < this.datas.length; i++) {

                this.datas[i].avatar = this.datas[i].avatar;
                this.datas[i].intro_pics = this.datas[i].intro_pics;

            }
            this.total = Math.ceil(this.datas.length / 4);
            if (this.datas.length > 0) {
                this.now = 1;
            }
        })
    },
};