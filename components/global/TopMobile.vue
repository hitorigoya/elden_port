<template>
    <div class="container">
        <div class="header">
            <div class="rune_slot"></div>
            <div class="status">
                <div class="hp"></div>
                <div class="fp"></div>
                <div class="stamina"></div>
            </div>
        </div>
        <div class="main">
            <div class="menu">
                <NuxtLink to="/equipment/" class="menu_item">
                    <div class="menu_icon"><img src="/img/menu/swords-emblem.png" alt=""></div>
                    <div class="menu_text">装備</div>
                </NuxtLink>
                <div class="menu_item no_link">
                    <div class="menu_icon"><img src="/img/menu/loincloth.png" alt=""></div>
                    <div class="menu_text">アイテム製作</div>
                </div>
                <NuxtLink to="/inventory/" class="menu_item">
                    <div class="menu_icon"><img src="/img/menu/swap-bag.png" alt=""></div>
                    <div class="menu_text">インベントリ</div>
                </NuxtLink>
                <NuxtLink to="/status/" class="menu_item">
                    <div class="menu_icon"><img src="/img/menu/strong.png" alt=""></div>
                    <div class="menu_text">ステータス</div>
                </NuxtLink>
                <div class="menu_item no_link">
                    <div class="menu_icon"><img src="/img/menu/tied-scroll.png" alt=""></div>
                    <div class="menu_text">メッセージ</div>
                </div>
                <div class="menu_item no_link">
                    <div class="menu_icon"><img src="/img/menu/scissors.png" alt=""></div>
                    <div class="menu_text">マルチプレイ</div>
                </div>
                <NuxtLink to="/profile/" class="menu_item">
                    <div class="menu_icon"><img src="/img/menu/gears.png" alt=""></div>
                    <div class="menu_text">プロフィール</div>
                </NuxtLink>
            </div>
        </div>
        <div class="footer">
            <!-- <div class="runesHeld">0</div> -->
            <div class="footer_icons">Icons : <a href="https://game-icons.net/">https://game-icons.net/</a></div>
        </div>
    </div>
</template>

<style scoped>
.container {
    min-height: 100vh;
    background-image: linear-gradient(to right,
            var(--color-bg-translucent) 50%,
            transparent 100%);
    display: grid;
}

.header {
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
    gap: 16px;
    padding-left: 24px;
    padding-top: 8px;
    padding-bottom: 24px;
}

.rune_slot {
    height: 72px;
    width: 72px;
    background-color: #11100D;
    border-radius: 8px;
    border: 1px solid var(--color-separator);
}

.hp,
.fp,
.stamina {
    height: 13px;
    border: 2px solid var(--color-separator);
    border-right-color: #918369;
    border-top-color: transparent;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 1px;
}

.hp {
    width: 60vw;
    background-color: #591111;
    margin-bottom: 4px;
}

.fp {
    width: 16vw;
    background-color: #193A4B;
    margin-bottom: 4px;
}

.stamina {
    width: 40vw;
    background-color: #194026;
}

.menu_item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-left: 24px;
    padding-bottom: 8px;
    color: #DED5CA;
}

.no_link {
    opacity: .5;
}

.menu_icon {
    height: 72px;
    width: 72px;
    background-color: rgb(36 35 34 /64%);
    border-radius: 10% /20%;
    border: 1px solid var(--color-separator);
}

.menu_icon img {
    display: block;
    height: 72px;
    width: 72px;
}

.footer {
    display: grid;
    padding: 24px;
}

.runesHeld {
    text-align: end;
    padding: 4px 16px;
    background-color: #11100D;
    border: 1px solid var(--color-separator);
    border-left: 2px solid #918369;
    border-right: 2px solid #918369;
    border-radius: 1px;
}

.footer_icons {
    text-align: center;
}
</style>