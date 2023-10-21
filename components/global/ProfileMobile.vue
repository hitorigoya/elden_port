<script setup>
import status from "~/lib/status"
</script>

<template>
    <div class="container">
        <div class="title_container">
            <div class="title">プロフィール</div>
        </div>
        <div>
            <div class="name">{{ status.name }}</div>
            <div class="name_underline"></div>
        </div>
        <div class="main_container">
            <div class="birth_container">
                <div class="birth_title">生まれ</div>
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
            <div class="history_container">
                <div class="field_title">経歴</div>
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
            <div class="created_container">
                <div class="field_title">成果物</div>
                <a href="https://demoooo.com/" class="app_link">オンラインメモ帳アプリ-Nemo-</a>
                <div>SvelteKitとFastAPIで作ったオンラインメモ帳アプリ</div>
                <br>
                <div>JWTによるシンプルな認証機能付き</div>
                <div>Nginx上で動いていてCertbotによる証明書取得まで一通り行った</div>
                <br>
                <div>1Core 512MBの最低限のVPSサーバーで運営されている</div>
                <div>ちなみに月額は600円ほど</div>
            </div>
            <div class="skill_container">
                <div class="field_title">技術スタック</div>
                <div>使用した事のある技術スタックの詳細は<a href="/inventory/" class="app_link">インベントリ</a>にて</div>
            </div>
        </div>
        <a href="/" class="return">戻る</a>
    </div>
</template>

<style scoped>
.container {
    min-height: 100vh;
    background-image: linear-gradient(45deg, var(--color-bg-translucent), rgb(17 16 13 / 94%));
    white-space: pre-line;
}

.title_container {
    display: flex;
    align-items: center;
    height: 64px;
    background-image: radial-gradient(at 0% 50%, rgb(67 63 49 / 94%) 0%, transparent 50%);
}

.title {
    color: var(--color-text-secondary);
    font-size: 24px;
    letter-spacing: -3px;
    line-height: 1;
    padding-left: 24px;
}

.name {
    font-size: 24px;
    line-height: 1;
    padding-left: 24px;
}

.name_underline {
    height: 28px;
    background-image: radial-gradient(at 0% 50%, var(--color-separator) 0%, transparent 24%);
    transform: translateY(-8px);
}

.main_container {
    padding: 24px;
}

.birth_title {
    font-size: 18px;
    line-height: 1;
    color: var(--color-text-secondary);
    padding-bottom: 8px;
}

.field_title {
    font-size: 18px;
    line-height: 1;
    color: var(--color-text-secondary);
    padding-top: 32px;
    padding-bottom: 8px;
}

.field_container {
    display: flex;
    justify-content: space-between;
}

.app_link {
    text-decoration: underline;
}

.return {
    display: block;
    text-align: center;
    text-decoration: underline;
    padding-bottom: 24px;
}
</style>