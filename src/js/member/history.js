const Historys = {
    template: `
<div id="right">
    <div id="memberLove">
        <h2>旅遊紀錄</h2>
    </div>
    <div id="loveContent">
        <div class="loveContentBorder" v-for="(value,index) in datas" v-if="index < show"
            :class=" { 'next_off' :  mobile!= true && index < close}">
            <div class="cardBorder">
                <div class="loveImg">
                    <img :src="value.intro_pics">
                </div>
                <div class="historyContents">
                    <div class="loveContentsTop">
                        <div class="headImg">
                            <img :src="value.avatar">
                        </div>
                        <div class="StarAndFrom">
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
                    <div class="historyP">
                        <p>
                            {{value.title}}
                        </p>
                    </div>
                    <div class="timeAndcomment">
                        <div class="time">
                            {{value.time}}
                        </div>
                        <div class="comment commented" v-if="commit(index)">
                            {{commitTesxt(index)}}
                        </div>
                        <div class="comment" v-else @click="addComment(index)">
                            {{commitTesxt(index)}}
                        </div>
                        <div id="addDiv" v-show="addcomment">
                            <div id="addDivOutterBord">
                                <div id="addDivInnerBord">
                                    <div class="addDivTop">
                                        <div class="addDivTopImg">
                                            <div class="Img">
                                                <img :src="value.intro_pics">
                                            </div>
                                            <p style = "margin:10px 0;">{{productName}}</p>
                                        </div>
                                        <div class="addDivTopText">
                                            <p>旅遊日期：{{changeTime(productDate)}}</p>
                                            <p>{{productContent}}</p>
                                        </div>
                                    </div>
                                    <div class="Star">
                                        <span @click="clickstar(1)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13.814" height="13.222"
                                                viewBox="0 0 13.814 13.222" v-if="stars>=1">
                                                <path id="Icon_awesome-star" data-name="Icon awesome-star"
                                                    d="M7.607.459,5.921,3.878l-3.772.55a.827.827,0,0,0-.457,1.41L4.421,8.5l-.646,3.757a.826.826,0,0,0,1.2.87L8.348,11.35l3.375,1.774a.826.826,0,0,0,1.2-.87L12.276,8.5,15,5.837a.827.827,0,0,0-.457-1.41l-3.772-.55L9.089.459a.827.827,0,0,0-1.482,0Z"
                                                    transform="translate(-1.441 0.001)" fill="#996a4d" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13.814" height="13.222"
                                                viewBox="0 0 13.814 13.222" v-else>
                                                <path id="Icon_awesome-star" data-name="Icon awesome-star"
                                                    d="M7.607.459,5.921,3.878l-3.772.55a.827.827,0,0,0-.457,1.41L4.421,8.5l-.646,3.757a.826.826,0,0,0,1.2.87L8.348,11.35l3.375,1.774a.826.826,0,0,0,1.2-.87L12.276,8.5,15,5.837a.827.827,0,0,0-.457-1.41l-3.772-.55L9.089.459a.827.827,0,0,0-1.482,0Z"
                                                    transform="translate(-1.441 0.001)" fill="#d0cccc" />
                                            </svg>
                                        </span>

                                        <span @click="clickstar(2)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13.814" height="13.222"
                                                viewBox="0 0 13.814 13.222" v-if="stars>=2">
                                                <path id="Icon_awesome-star" data-name="Icon awesome-star"
                                                    d="M7.607.459,5.921,3.878l-3.772.55a.827.827,0,0,0-.457,1.41L4.421,8.5l-.646,3.757a.826.826,0,0,0,1.2.87L8.348,11.35l3.375,1.774a.826.826,0,0,0,1.2-.87L12.276,8.5,15,5.837a.827.827,0,0,0-.457-1.41l-3.772-.55L9.089.459a.827.827,0,0,0-1.482,0Z"
                                                    transform="translate(-1.441 0.001)" fill="#996a4d" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13.814" height="13.222"
                                                viewBox="0 0 13.814 13.222" v-else>
                                                <path id="Icon_awesome-star" data-name="Icon awesome-star"
                                                    d="M7.607.459,5.921,3.878l-3.772.55a.827.827,0,0,0-.457,1.41L4.421,8.5l-.646,3.757a.826.826,0,0,0,1.2.87L8.348,11.35l3.375,1.774a.826.826,0,0,0,1.2-.87L12.276,8.5,15,5.837a.827.827,0,0,0-.457-1.41l-3.772-.55L9.089.459a.827.827,0,0,0-1.482,0Z"
                                                    transform="translate(-1.441 0.001)" fill="#d0cccc" />
                                            </svg>
                                        </span>

                                        <span @click="clickstar(3)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13.814" height="13.222"
                                                viewBox="0 0 13.814 13.222" v-if="stars>=3">
                                                <path id="Icon_awesome-star" data-name="Icon awesome-star"
                                                    d="M7.607.459,5.921,3.878l-3.772.55a.827.827,0,0,0-.457,1.41L4.421,8.5l-.646,3.757a.826.826,0,0,0,1.2.87L8.348,11.35l3.375,1.774a.826.826,0,0,0,1.2-.87L12.276,8.5,15,5.837a.827.827,0,0,0-.457-1.41l-3.772-.55L9.089.459a.827.827,0,0,0-1.482,0Z"
                                                    transform="translate(-1.441 0.001)" fill="#996a4d" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13.814" height="13.222"
                                                viewBox="0 0 13.814 13.222" v-else>
                                                <path id="Icon_awesome-star" data-name="Icon awesome-star"
                                                    d="M7.607.459,5.921,3.878l-3.772.55a.827.827,0,0,0-.457,1.41L4.421,8.5l-.646,3.757a.826.826,0,0,0,1.2.87L8.348,11.35l3.375,1.774a.826.826,0,0,0,1.2-.87L12.276,8.5,15,5.837a.827.827,0,0,0-.457-1.41l-3.772-.55L9.089.459a.827.827,0,0,0-1.482,0Z"
                                                    transform="translate(-1.441 0.001)" fill="#d0cccc" />
                                            </svg>
                                        </span>

                                        <span @click="clickstar(4)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13.814" height="13.222"
                                                viewBox="0 0 13.814 13.222" v-if="stars>=4">
                                                <path id="Icon_awesome-star" data-name="Icon awesome-star"
                                                    d="M7.607.459,5.921,3.878l-3.772.55a.827.827,0,0,0-.457,1.41L4.421,8.5l-.646,3.757a.826.826,0,0,0,1.2.87L8.348,11.35l3.375,1.774a.826.826,0,0,0,1.2-.87L12.276,8.5,15,5.837a.827.827,0,0,0-.457-1.41l-3.772-.55L9.089.459a.827.827,0,0,0-1.482,0Z"
                                                    transform="translate(-1.441 0.001)" fill="#996a4d" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13.814" height="13.222"
                                                viewBox="0 0 13.814 13.222" v-else>
                                                <path id="Icon_awesome-star" data-name="Icon awesome-star"
                                                    d="M7.607.459,5.921,3.878l-3.772.55a.827.827,0,0,0-.457,1.41L4.421,8.5l-.646,3.757a.826.826,0,0,0,1.2.87L8.348,11.35l3.375,1.774a.826.826,0,0,0,1.2-.87L12.276,8.5,15,5.837a.827.827,0,0,0-.457-1.41l-3.772-.55L9.089.459a.827.827,0,0,0-1.482,0Z"
                                                    transform="translate(-1.441 0.001)" fill="#d0cccc" />
                                            </svg>
                                        </span>
                                        <span @click="clickstar(5)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13.814" height="13.222"
                                                viewBox="0 0 13.814 13.222" v-if="stars>=5">
                                                <path id="Icon_awesome-star" data-name="Icon awesome-star"
                                                    d="M7.607.459,5.921,3.878l-3.772.55a.827.827,0,0,0-.457,1.41L4.421,8.5l-.646,3.757a.826.826,0,0,0,1.2.87L8.348,11.35l3.375,1.774a.826.826,0,0,0,1.2-.87L12.276,8.5,15,5.837a.827.827,0,0,0-.457-1.41l-3.772-.55L9.089.459a.827.827,0,0,0-1.482,0Z"
                                                    transform="translate(-1.441 0.001)" fill="#996a4d" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13.814" height="13.222"
                                                viewBox="0 0 13.814 13.222" v-else>
                                                <path id="Icon_awesome-star" data-name="Icon awesome-star"
                                                    d="M7.607.459,5.921,3.878l-3.772.55a.827.827,0,0,0-.457,1.41L4.421,8.5l-.646,3.757a.826.826,0,0,0,1.2.87L8.348,11.35l3.375,1.774a.826.826,0,0,0,1.2-.87L12.276,8.5,15,5.837a.827.827,0,0,0-.457-1.41l-3.772-.55L9.089.459a.827.827,0,0,0-1.482,0Z"
                                                    transform="translate(-1.441 0.001)" fill="#d0cccc" />
                                            </svg>
                                        </span>
                                        <p v-if="stars ==5">非常滿意</p>
                                        <p v-if="stars ==4">滿意</p>
                                        <p v-if="stars ==3">普通</p>
                                        <p v-if="stars ==2">不滿意</p>
                                        <p v-if="stars ==1">非常不滿意</p>

                                    </div>
                                    <div class="addDivDown">
                                        <textarea placeholder="想說的話:" @keyup="entertext" :value="text">

                                                                </textarea>
                                    </div>
                                    <div class="memberEditCancel historyPopBtn">
                                        <button class="btnL_light" @click="cancel">取消</button>
                                        <button class="btnL" @click="confirms">確認</button>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23.994"
                                        viewBox="0 0 24 23.994" @click="cancel" class="closed">
                                        <path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close"
                                            d="M26.129,23.286,34.7,14.714a2.009,2.009,0,1,0-2.841-2.841l-8.572,8.572-8.572-8.572a2.009,2.009,0,1,0-2.841,2.841l8.572,8.572-8.572,8.572A2.009,2.009,0,0,0,14.716,34.7l8.572-8.572L31.86,34.7A2.009,2.009,0,0,0,34.7,31.857Z"
                                            transform="translate(-11.285 -11.289)" fill="#996a4d" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>
    <div class="loveNumberNav">
        <div class="loveNavs">
            <div class="loveLeft" @click="back">
                &lt;
            </div>
            <div class="mid">
                {{now}}/{{total}}
            </div>

            <div class="loveRight" @click="next(0)">
                &gt;
            </div>
        </div>
    </div>
    <div class="mobileLoveBtn ">
        <button class="btnL_light" @click ="next(1)" :class=" { 'next_off' : this.show >= this.datas.length}">顯示更多</button>
    </div>
</div>
            `,
    data() {
        return {  //組件的變數寫在這裡！
            values: [
                { star: "5", content: "Big Ben 大笨鐘倫敦，最具指標性的景觀。", from: "英國", time: "2021.06.22", comment: "已評論" },
                { star: "4.8", content: "馬辰水上市場藝術節，體驗水上文化之旅。", from: "印尼", time: "2021.06.24", comment: "已評論" },
                { star: "3", content: "漫步古羅馬遺址，燦爛一個時代的歷史文化古城。", from: "非洲", time: "2021.06.27", comment: "未評論" },
                { star: "4.2", content: "泰國黃金海岸，欣賞Pattaya的海岸風光。", from: "泰國", time: "2021.07.10", comment: "未評論" },
            ],
            datas: [],
            addcomment: false,
            commentIndex: '',
            stars: 5,
            text: '',
            show: 4,
            now: 0,
            total: 0,
            close: 0,
            productName: '',
            productDate: '',
            productContent: '',
            mobile: false,
        };
    },
    methods: {
        changeTime(Time) {
            let startTime = new Date(Number(Time));
            let text = '';
            text += startTime.getFullYear() + '-';
            text += (startTime.getMonth() + 1 < 10 ? '0' + (startTime.getMonth() + 1) : startTime.getMonth() + 1) + '-';
            text += (startTime.getDate() < 10 ? '0' : '') + startTime.getDate() + ' ';
            return text;
        },
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
        commitTesxt(index) {
            if (this.datas[index].is_commented != 0) {
                return '已評論';
            } else {
                return '未評論';
            }
        },
        commit(index) {
            if (this.datas[index].is_commented != 0) {
                return true;
            } else {
                return false;
            }
        },
        clickstar(index) {
            this.stars = index;
        },
        addComment(index) {
            this.productName = this.datas[index].name;
            this.productDate = this.datas[index].started_at;
            this.productContent = this.datas[index].title;
            this.commentIndex = index;
            this.addcomment = true;

        },
        cancel() {
            this.commentIndex = '';
            this.addcomment = false;
            this.stars = 5;
            this.text = '';
        },
        confirms() {
            let index = this.commentIndex;
            axios.post('../../php/addcomment.php', {
                star: this.stars,
                text: this.text,
                ID: this.datas[index].ID,
                now: new Date().getTime(),
                order_ID: this.datas[index].order_ID
            }).then(res => {
                let data = res.data;
                this.datas = data;
                this.commentIndex = '';
                this.addcomment = false;
                this.stars = 5;
                this.text = '';

            });
        },
        entertext(event) {
            this.text = '';
            this.text = event.target.value;
        }
    },
    mounted() {
        axios.post('../../php/member_history.php', {
            now: new Date().getTime(),
        }).then(res => {
            let data = res.data;
            this.datas = data;
        }).then(res => {
            for (let i = 0; i < this.datas.length; i++) {
                this.datas[i].avatar = '../.' + this.datas[i].avatar;
                this.datas[i].intro_pics = '../.' + this.datas[i].intro_pics;

            }
            this.total = Math.ceil(this.datas.length / 4);
            if (this.datas.length > 0) {
                this.now = 1;
            }
        })
    },
};