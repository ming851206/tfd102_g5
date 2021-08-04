// index postcard
Vue.component('index', {
    template: `
        <div class="postcard_page_change">
            <!-- index postcard -->
            <div class="index_postcard_block">
                <div class="index_postcard_BG">
                    <img src="./images/postcard/postcard.jpg" alt="">
                </div>
                    
                <div class="main_postcard_block">
                    <div class="textblock">
                        <h2>客製化專屬於您的線上明信片</h2>
                    </div>
                    <div class="index_postcard_pointer" @click="changeindex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90">
                            <g id="Group_286" data-name="Group 286" transform="translate(-595 -434)">
                              <circle id="Ellipse_40" data-name="Ellipse 40" cx="45" cy="45" r="45" transform="translate(595 434)" fill="#fff" opacity="0.743"/>
                              <path id="Icon_awesome-hand-pointer" data-name="Icon awesome-hand-pointer" d="M31.5,16.875v6.75a2.811,2.811,0,0,1-.075.644l-2.25,9.563A2.813,2.813,0,0,1,26.438,36H11.813a2.813,2.813,0,0,1-2.275-1.158l-9-12.375a2.812,2.812,0,1,1,4.549-3.308l2.225,3.06V2.813a2.813,2.813,0,0,1,5.625,0V16.875H13.5V14.063a2.813,2.813,0,0,1,5.625,0v2.813h.563V15.188a2.813,2.813,0,0,1,5.625,0v1.688h.563a2.813,2.813,0,0,1,5.625,0ZM13.5,22.5h-.562v6.75H13.5Zm6.188,0h-.562v6.75h.563Zm6.188,0h-.562v6.75h.563Z" transform="translate(624.25 461)" fill="rgba(0,0,0,0.8)"/>
                            </g>
                        </svg>
                    </div>
                        <p class="text_show">每趟旅程都有想要與他分享分享的人，<br>
                            Jumper提供您互動有趣的線上明信片功能，<br>
                            替您的旅程留下獨一
                            無二的回憶！
                        </p>
                </div>
                
            </div>
            <!-- index postcard phone text-->
            <div class="phone_text_block">
                <h3>客製化專屬於您的線上明信片</h3>
                <p>每趟旅程都有想要與他分享分享的人，
                    Jumper提供您互動有趣的線上明信片功能，
                    替您的旅程留下獨一
                    無二的回憶！
                </p>
    
            </div>
        </div>

        <div class="phone_text_block">
            <h3>客製化專屬於您的線上明信片</h3>
            <p>每趟旅程都有想要與他分享分享的人，
                Jumper提供您互動有趣的線上明信片功能，
                替您的旅程留下獨一
                無二的回憶！
            </p>

        </div>
    `,
});

// 選擇照片
Vue.component('lessons', {
    template: `
    <div class="choose_img_block">
    <!-- 圖片卡片區 -->
    <div class="choose_img_title">
        <h3>五洲景點總覽</h3>
    </div>
    <!-- card -->
    <div class="choose_card_block">
        <div class="card_block">
            <img src="./images/postcard/225/arcit01_550-320.jpg" alt="">
            <p>北極-看看北極熊</p>
            <button type="button" class="btnM" id="pickMe">選我</button>
        </div>
        <div class="card_block">
            <img src="./images/postcard/225/australia01_550-320.jpg" alt="">
            <p>澳洲－雪梨歌劇院</p>
            <button type="button" class="btnM" id="pickMe">選我</button>
        </div>
        <div class="card_block">
            <img src="./images/postcard/225/finland01_550-320.jpg" alt="">
            <p>芬蘭－極光冰雪世界</p>
            <button type="button" class="btnM" id="pickMe">選我</button>
        </div>
        <div class="card_block">
            <img src="./images/postcard/225/japan02_550-320.jpg" alt="">
            <p>日本－櫻花花語</p>
            <button type="button" class="btnM" id="pickMe">選我</button>
        </div>
    </div>
    <div class="choose_card_block">
        <div class="card_block">
            <img src="./images/postcard/225/maldives02_550-320.jpg" alt="">
            <p>北極-看看北極熊</p>
            <button type="button" class="btnM" id="pickMe">選我</button>
        </div>
        <div class="card_block">
            <img src="./images/postcard/225/uk01_550-320.jpg" alt="">
            <p>北極－冰雪世界</p>
            <button type="button" class="btnM" id="pickMe">選我</button>
        </div>
        <div class="card_block">
            <img src="./images/postcard/225/china01_550-320.jpg" alt="">
            <p>北極－冰雪世界</p>
            <button type="button" class="btnM" id="pickMe">選我</button>
        </div>
        <div class="card_block">
            <img src="./images/postcard/225/france01_550-320.jpg" alt="">
            <p>法國－亞歷山大三世橋</p>
            <button type="button" class="btnM" id="pickMe">選我</button>
        </div>
    </div>

    <!-- next -->
    <div class="next_btn" @click="changeindex">
        <button type="button"  class="btnM" id="next">下一步</button>
    </div>

    `,
});