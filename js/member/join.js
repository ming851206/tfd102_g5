const Join = {
    template: `
                    <div id="right">
                        <div id="memberLove">
                            <h2>即將參與旅遊</h2>
                        </div>
                        <div id="loveContent">
                            <div class="loveContentBorder" v-for="value in values">
                                <div class="cardBorder">
                                    <div class="loveImg">
                                        <img src="https://picsum.photos/150/200">
                                    </div>
                                    <div class="joinContents">
                                        <div class="loveContentsTop">
                                            <div class="headImg">
                                                <img src="https://picsum.photos/100/100">
                                            </div>
                                            <div class="StarAndFrom gotravel">
                                                <div class = "joinComment">
                                                    {{value.comment}}
                                                </div>
                                                <div id="joinStarAndFrom">
                                                    <div class="star">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="13.814" height="13.222"
                                                            viewBox="0 0 13.814 13.222">
                                                            <path id="Icon_awesome-star" data-name="Icon awesome-star"
                                                                d="M7.607.459,5.921,3.878l-3.772.55a.827.827,0,0,0-.457,1.41L4.421,8.5l-.646,3.757a.826.826,0,0,0,1.2.87L8.348,11.35l3.375,1.774a.826.826,0,0,0,1.2-.87L12.276,8.5,15,5.837a.827.827,0,0,0-.457-1.41l-3.772-.55L9.089.459a.827.827,0,0,0-1.482,0Z"
                                                                transform="translate(-1.441 0.001)" fill="#996a4d" />
                                                        </svg>

                                                        {{value.star}}
                                                    </div>
                                                    <div class="from">
                                                        {{value.from}}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="timeAndcomment">
                                            <div class = "joinTime">
                                                {{value.time}}
                                            </div>
                                        </div>
                                        <p class="joinP">
                                            {{value.content}}
                                        </p>

                                    </div>
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
        };
    },
};