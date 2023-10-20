<script setup>
import status from "~/lib/status"

</script>

<template>
    <div class="container">
        <div class="title_container">
            <div class="title">プロフィール</div>
        </div>
        <div class="test_container">
            <div class="name">{{ status.name }}</div>
            <div class="name_underline"></div>
        </div>
        <div class="container_main">
            <div class="container_start">
                <div class="attributePoints_container">
                    <div class="attributePoints_left_line_container">
                        <div class="birth_left_line"></div>
                    </div>
                    <div class="attributePoints_inline_container">
                        <div class="field_title_container">
                            <div>生まれ</div>
                        </div>
                        <div class="field_container">
                            <div>性別</div>
                            <div>男</div>
                        </div>
                        <div class="field_container">
                            <div>年頃</div>
                            <div>中年</div>
                        </div>
                        <div class="field_container">
                            <div>素性</div>
                            <div>素寒貧</div>
                        </div>
                        <div class="field_container">
                            <div>形見</div>
                            <div>なし</div>
                        </div>
                    </div>
                </div>
                <div class="attributePoints_container">
                    <div class="attributePoints_left_line_container">
                        <div class="history_left_line"></div>
                    </div>
                    <div class="attributePoints_inline_container">
                        <div class="field_title_container">
                            <div>経歴</div>
                        </div>
                        <div>2020年の9月から独学でプログラミングを始める</div>
                        <div>ポートフォリオの為にこのサイトを作る事にしたがポートフォリオ自体がどういうものなのかよく分かっていない</div>
                        <div>使用したフレームワークはVueとNuxt、スキルは無いが好奇心はある</div>
                        <div>どちらかといえばフロントエンドの方が好き</div>
                        <br>
                        <div>趣味はゲームと麻雀</div>
                        <div>このサイトのデザインの元はゲーム「ELDEN RING」から</div>
                        <div>プレイ時間はおぞましいものになっている</div>
                        <br>
                        <div>Mリーグを見る為だけにABEMAプレミアム会員になった</div>
                    </div>
                </div>
            </div>

            <div class="container_end">
                <div class="attackPower_container">
                    <div class="attackPower_left_line_container">
                        <div class="created_left_line"></div>
                    </div>
                    <div class="attackPower_inline_container">
                        <div class="field_title_container">
                            <div>成果物</div>
                        </div>
                        <a href="https://demoooo.com/" class="app_link">オンラインメモ帳アプリ-Nemo-</a>
                        <div>SvelteKitとFastAPIで作ったオンラインメモ帳アプリ</div>
                        <div>JWTによるシンプルな認証機能付き</div>
                        <br>
                        <div>Nginx上で動いていてCertbotによる証明書取得まで一通り行った</div>
                        <div>今はtmuxさんが頑張って動かしている</div>
                        <br>
                        <div>CPU 1Core メモリ512MBの最低限のVPSサーバーで運営されている</div>
                        <div>ちなみに月額は600円ちょい</div>
                    </div>
                </div>
                <div class="attackPower_container">
                    <div class="attackPower_left_line_container">
                        <div class="skill_left_line"></div>
                    </div>
                    <div class="attackPower_inline_container">
                        <div class="field_title_container">
                            <div>技術スタック</div>
                        </div>
                        <div>使用した事のある技術スタックの詳細は<a href="/inventory/" class="app_link">インベントリ</a>にて</div>
                    </div>
                </div>
            </div>

        </div>
        <div class="container_foot">
            <div>キャラクターのプロフィールを確認します</div>
            <a href="/" class="return">戻る</a>
        </div>
    </div>
</template>

<style scoped>
.birth_left_line {
    height: 200px;
    width: 8px;
    background-image: radial-gradient(at 50% 50%, var(--color-separator) 0%, transparent 72%);
}

.history_left_line {
    height: 400px;
    width: 8px;
    background-image: radial-gradient(at 50% 50%, var(--color-separator) 0%, transparent 72%);
}

.created_left_line {
    height: 360px;
    width: 8px;
    background-image: radial-gradient(at 50% 50%, var(--color-separator) 0%, transparent 72%);
}

.skill_left_line {
    height: 80px;
    width: 8px;
    background-image: radial-gradient(at 50% 50%, var(--color-separator) 0%, transparent 72%);
}

.app_link {
    text-decoration: underline;
}

.container {
    font-size: 20px;
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    min-height: 100vh;
    background-image: linear-gradient(45deg, var(--color-bg-translucent), rgb(17 16 13 / 94%));
}

.title_container {
    display: flex;
    align-items: center;
    height: 112px;
    /* background-image: linear-gradient(0deg,
            transparent 0%,
            rgb(67 63 49 / 94%) 20%,
            rgb(67 63 49 / 94%) 80%,
            transparent 100%); */

    /* background-image: radial-gradient(ellipse 50% 50px,
            rgb(67 63 49 / 94%) 10%,
            transparent); */

    background-image: radial-gradient(at 0% 50%, rgb(67 63 49 / 94%) 0%, transparent 50%);
}

.title {
    color: var(--color-text-secondary);
    font-size: 34px;
    letter-spacing: -3px;
    line-height: 1;
    padding-left: 104px;
}

.name {
    font-size: 32px;
    line-height: 1;
    padding-left: 104px;
}

.name_underline {
    height: 28px;
    background-image: radial-gradient(at 0% 50%, var(--color-separator) 0%, transparent 24%);
    transform: translateY(-8px);
}

.container_main {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.container_start {
    padding-left: 104px;
    padding-right: 104px;
}

.level_rune_container {
    display: grid;
    grid-template-columns: 24px 1fr;
}

.level_rune_left_line {
    height: 135px;
    width: 8px;
    background-image: radial-gradient(at 50% 50%, var(--color-separator) 0%, transparent 72%);
}

.attributePoints_container {
    display: grid;
    grid-template-columns: 24px 1fr;
}

.attributePoints_left_line {
    height: 333px;
    width: 8px;
    background-image: radial-gradient(at 50% 50%, var(--color-separator) 0%, transparent 72%);
}

.container_mid {
    padding-left: 48px;
}

.baseStats_container {
    display: grid;
    grid-template-columns: 24px 1fr;
}

.baseStats_left_line {
    height: 600px;
    width: 8px;
    background-image: radial-gradient(at 50% 50%, var(--color-separator) 0%, transparent 72%);
}


.container_end {
    padding-left: 48px;
    padding-right: 112px;
}

.attackPower_container {
    display: grid;
    grid-template-columns: 24px 1fr;
}

.attackPower_left_line {
    height: 200px;
    width: 8px;
    background-image: radial-gradient(at 50% 50%, var(--color-separator) 0%, transparent 72%);
}

.defenseDmgNegation_container {
    display: grid;
    grid-template-columns: 24px 1fr;
}

.defenseDmgNegation_left_line {
    height: 260px;
    width: 8px;
    background-image: radial-gradient(at 50% 50%, var(--color-separator) 0%, transparent 72%);
}

.resistance_container {
    display: grid;
    grid-template-columns: 24px 1fr;
}

.resistance_left_line {
    height: 148px;
    width: 8px;
    background-image: radial-gradient(at 50% 50%, var(--color-separator) 0%, transparent 72%);
}

.field_title_container {
    color: var(--color-text-secondary);
}

.field_container {
    display: flex;
    justify-content: space-between;
}



.attackPower_container {
    margin-bottom: 16px;
}

.defenseDmgNegation_container {
    margin-bottom: 16px;
}

.column3_field_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.inline_field_container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.container_foot {
    padding-top: 16px;
    padding-bottom: 24px;
    padding-left: 120px;
    padding-right: 120px;
}

.container_foot kbd {
    padding-left: 4px;
}

.return:hover {
    text-decoration: underline;
}
</style>