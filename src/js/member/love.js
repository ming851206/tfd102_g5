const Love = {
    template: `
                    <div id="right">
                        <div id="memberLove">
                            <h2>我的最愛</h2>
                        </div>
                        <div id="loveContent">
                            <div class="loveContentBorder" v-for="(returndata,index) in returndatas"  v-if="index < show" :class=" { 'next_off' :  mobile!= true && index < close}">
                                <div class="cardBorder">
                                    <div class="loveImg">
                                        <img :src="returndata.intro_pics">
                                    </div>
                                    <div class="loveContents">
                                        <div class="loveContentsTop">
                                            <div class="headImg">
                                                <img :src="returndata.avatar">
                                            </div>
                                            <div class="StarAndFrom">
                                                <div class="star">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="13.814" height="13.222"
                                                        viewBox="0 0 13.814 13.222">
                                                        <path id="Icon_awesome-star" data-name="Icon awesome-star"
                                                            d="M7.607.459,5.921,3.878l-3.772.55a.827.827,0,0,0-.457,1.41L4.421,8.5l-.646,3.757a.826.826,0,0,0,1.2.87L8.348,11.35l3.375,1.774a.826.826,0,0,0,1.2-.87L12.276,8.5,15,5.837a.827.827,0,0,0-.457-1.41l-3.772-.55L9.089.459a.827.827,0,0,0-1.482,0Z"
                                                            transform="translate(-1.441 0.001)" fill="#996a4d" />
                                                    </svg>

                                                    {{returndata.staravg}}
                                                </div>
                                                <div class="from">
                                                    {{returndata.place}}
                                                </div>
                                            </div>
                                        </div>
                                        <p class="memberLoveConcent">
                                            {{returndata.title}}
                                        </p>
                                    </div>
                                </div>
                                <div class="TopRithtLove" @click="removeItem(index)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13.044" height="12.542"
                                        viewBox="0 0 13.044 12.542">
                                        <path id="Icon_ionic-ios-heart" data-name="Icon ionic-ios-heart"
                                            d="M12.907,3.937h-.031A3.568,3.568,0,0,0,9.9,5.568,3.568,3.568,0,0,0,6.918,3.937H6.887A3.545,3.545,0,0,0,3.375,7.481a7.633,7.633,0,0,0,1.5,4.161A26.266,26.266,0,0,0,9.9,16.48a26.266,26.266,0,0,0,5.023-4.838,7.633,7.633,0,0,0,1.5-4.161A3.545,3.545,0,0,0,12.907,3.937Z"
                                            transform="translate(-3.375 -3.938)" fill="#996a4d" />
                                    </svg>

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
                                    <button class="btnL_light" @click ="next(1)" :class=" { 'next_off' : this.show >= this.returndatas.length}">顯示更多</button>
                            </div>
                        </div>
            `,
    data() {
        return {  //組件的變數寫在這裡！
            values: [
                { star: "5", content: "Big Ben 大笨鐘倫敦，最具指標性的景觀。", from: "英國" },
                { star: "4.8", content: "馬辰水上市場藝術節，體驗水上文化之旅。", from: "印尼" },
                { star: "3", content: "漫步古羅馬遺址，燦爛一個時代的歷史文化古城。", from: "非洲" },
                { star: "4.2", content: "泰國黃金海岸，欣賞Pattaya的海岸風光。", from: "泰國" },
            ],
            returndatas: [],
            show: 4,
            now: 0,
            total: 0,
            close: 0,
            mobile: false,
        };
    },
    methods: {
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
        removeItem(index) {
            let yes = confirm("確定要移除此項目嗎?");
            if (yes) {
                if (this.returndatas.length % 4 == 1) {
                    this.show -= 4;
                    this.close -= 4;
                    this.now--;
                }
                let sql_id = this.returndatas[index].ID;
                axios.post('../../php/removelove.php', {
                    ID: sql_id
                }).then(res => {
                    let data = res.data;
                    this.returndatas = data;
                }).then(res => this.total = Math.ceil(this.returndatas.length / 4));
            }
        }
    },
    mounted() {
        axios.get('../../php/love.php').then(res => {
            let data = res.data;
            this.returndatas = data;


        }).then(res => {
            for (let i = 0; i < this.returndatas.length; i++) {

                this.returndatas[i].avatar = '../.' + this.returndatas[i].avatar;
                this.returndatas[i].intro_pics = '../.' + this.returndatas[i].intro_pics;

            }
            this.total = Math.ceil(this.returndatas.length / 4);
            if (this.returndatas.length > 0) {
                this.now = 1;
            }
        }
        );

    },
};