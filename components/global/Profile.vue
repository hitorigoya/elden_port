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
                <div class="created_container">
                    <div class="created_left_line"></div>
                    <div>
                        <div class="field_title_container">
                            <div>成果物</div>
                        </div>
                        <a href="https://demoooo.com/">オンラインメモ帳アプリ-Nemo-</a>
                        <div>SvelteKitとFastAPIで作ったオンラインメモ帳アプリ</div>
                        <br>
                        <div>JWTによるシンプルな認証機能付き</div>
                        <div>Nginx上で動いていてCertbotによる証明書取得まで一通り行った</div>
                        <br>
                        <div>1Core 512MBの最低限のVPSサーバーで運営されている</div>
                        <div>ちなみに月額は600円ほど</div>
                        <br>
                        <a href="https://markdown-html.pages.dev/">Markdown to html</a>
                        <div>Markdownエディター+HTML変換アプリ</div>
                        <div>Rustライブラリの<a href="https://github.com/raphlinus/pulldown-cmark">pulldown-cmark</a>を使用した実装</div>
                    </div>
                </div>
                <div class="skill_container">
                    <div class="skill_left_line"></div>
                    <div>
                        <div class="field_title_container">
                            <div>技術スタック</div>
                        </div>
                        <div>使用した事のある技術スタックの詳細は<NuxtLink to="/inventory/">インベントリ</NuxtLink>にて</div>
                    </div>
                </div>
            </div>
            <div class="container_end">
                <div class="birth_container">
                    <div class="birth_left_line"></div>
                    <div>
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
                <div class="history_container">
                    <div class="history_left_line"></div>
                    <div>
                        <div class="field_title_container">
                            <div>経歴</div>
                        </div>
                        <div>2020年9月から独学でWeb開発を始める</div>
                        <div>ポートフォリオの為にこのサイトを作る事にした</div>
                        <div>使用したフレームワークはVue3とNuxt3</div>
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
        </div>
        <div class="container_foot">
            <div>キャラクターのプロフィールを確認します</div>
            <NuxtLink to="/">戻る</NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.birth_left_line,
.history_left_line,
.created_left_line,
.skill_left_line {
    height: 100%;
    width: 8px;
    background-image: radial-gradient(at 50% 50%, var(--color-separator) 0%, transparent 72%);
}

a {
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


.birth_container {
    display: grid;
    grid-template-columns: 24px 1fr;
    margin-bottom: 32px;
}

.history_container {
    display: grid;
    grid-template-columns: 24px 1fr;
}

.created_container {
    display: grid;
    grid-template-columns: 24px 1fr;
    margin-bottom: 32px;
}

.skill_container {
    display: grid;
    grid-template-columns: 24px 1fr;
}

.container_end {
    padding-right: 112px;
}


.field_title_container {
    color: var(--color-text-secondary);
}

.field_container {
    display: flex;
    justify-content: space-between;
}

.container_foot {
    padding-top: 16px;
    padding-bottom: 24px;
    padding-left: 120px;
    padding-right: 120px;
}
</style>