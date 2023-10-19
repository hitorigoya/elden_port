<script setup>
import status from "~/lib/status"
</script>

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
                <div class="menu_item">
                    <div class="menu_icon"><img src="/img/menu/gears.png" alt=""></div>
                    <div class="menu_text">システム</div>
                </div>
            </div>
            <div class="shortcut">
                <div class="pouch">
                    <div class="pouch_left_line"></div>
                    <div class="pouch_inline_container">
                        <div class="pouch_title">ポーチ</div>
                        <div class="pouch_icon_conteiner">
                            <div class="shortcut_icon"><img src="/img/item/binoculars.png" alt=""></div>
                            <div class="shortcut_icon"><img src="/img/item/round-potion.png" alt=""></div>
                            <div class="shortcut_icon"><img src="/img/item/tiara.png" alt=""></div>
                            <div class="shortcut_icon"><img src="/img/item/ring.png" alt=""></div>
                            <div class="shortcut_icon"></div>
                            <div class="shortcut_icon"></div>
                        </div>
                    </div>
                </div>
                <div class="gestures">
                    <div class="gestures_left_line"></div>
                    <div class="gestures_inline_container">
                        <div class="gestures_title">ジェスチャー</div>
                        <div class="gestures_icon_conteiner">
                            <div class="shortcut_icon"><img src="/img/gestures/shrug.png" alt=""></div>
                            <div class="shortcut_icon"><img src="/img/gestures/kneeling.png" alt=""></div>
                            <div class="shortcut_icon"><img src="/img/gestures/despair.png" alt=""></div>
                            <div class="shortcut_icon"><img src="/img/gestures/rear-aura.png" alt=""></div>
                            <div class="shortcut_icon"><img src="/img/gestures/body-balance.png" alt=""></div>
                            <div class="shortcut_icon"><img src="/img/gestures/jumping-rope.png" alt=""></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer_control">クリック：決定</div>
            <div class="runesHeld">{{ status.runesHeld }}</div>
        </div>
        <!-- <NuxtLink to="/status/">Status</NuxtLink> -->
    </div>
</template>


<style scoped>
.container {
    height: 100vh;
    background-image: linear-gradient(to right,
            var(--color-bg-translucent) 10%,
            transparent 50%,
            var(--color-bg-translucent) 90%);
    display: grid;
    grid-template-rows: auto 1fr auto;
    font-size: 23px;
}



.header {
    display: grid;
    align-items: center;
    grid-template-columns: 80px 1fr;
    gap: 16px;
    padding-left: 48px;
    padding-top: 32px;
    padding-bottom: 32px;
}

.rune_slot {
    height: 80px;
    width: 80px;
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
    width: 800px;
    background-color: #591111;
    margin-bottom: 4px;
}

.fp {
    width: 160px;
    background-color: #193A4B;
    margin-bottom: 4px;
}

.stamina {
    width: 480px;
    background-color: #194026;
}

.main {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.menu {
    display: grid;
}

.menu_item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-left: 52px;
    color: #DED5CA;
}

.menu_item:hover {
    background-image: radial-gradient(at 0% 50%, rgb(67 63 49 / 60%) 0%, transparent 70%);
    /* background-image: radial-gradient(at 0% 50%, #AFA181, transparent 70%); */
}

a.menu_item:hover {
    cursor: pointer;
}

.no_link {
    opacity: .5;
}

.menu_icon {
    height: 72px;
    width: 72px;
    /* background-color: #242322; */
    background-color: rgb(36 35 34 /64%);
    border-radius: 10% /20%;
    border: 1px solid var(--color-separator);
}

.menu_icon img {
    display: block;
    height: 72px;
    width: 72px;
}

.shortcut {
    padding-right: 52px;
    color: #DED5CA;
}

.pouch {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
}

.pouch_left_line {
    height: 269px;
    width: 6px;
    background-image: radial-gradient(at 50% 50%, var(--color-separator) 0%, transparent 72%);
}

.pouch_icon_conteiner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}

.shortcut_icon {
    height: 72px;
    width: 72px;
    background-color: rgb(36 35 34 /64%);
    border-radius: 10% /20%;
    border: 1px solid #24211A;
}

.shortcut_icon img {
    height: 72px;
    width: 72px;

}

.gestures {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
}

.gestures_left_line {
    height: 269px;
    width: 6px;
    background-image: radial-gradient(at 50% 50%, var(--color-separator) 0%, transparent 72%);
}

.gestures_icon_conteiner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}

.footer {
    line-height: 1;
    padding-left: 64px;
    padding-right: 64px;
    padding-top: 64px;
    padding-bottom: 32px;
    display: flex;
    justify-content: space-between;
}

.runesHeld {
    text-align: end;
    width: 200px;
    padding: 4px 16px;
    background-color: #11100D;
    border: 1px solid var(--color-separator);
    border-left: 2px solid #918369;
    border-right: 2px solid #918369;
    border-radius: 1px;
}
</style>