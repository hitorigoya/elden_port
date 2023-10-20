<script setup>
import status from "~/lib/status"

</script>

<template>
    <div class="container">
        <div class="title_container">
            <div class="title">ステータス</div>
        </div>
        <!-- <div class="test_container">
            <div class="name">{{ status.name }}</div>
            <div class="name_underline"></div>
        </div> -->
        <div class="container_main">
            <div class="container_start">
                <div class="level_rune_container">
                    <div class="level_rune_left_line"></div>
                    <div>
                        <div class="field_container">
                            <div>レベル</div>
                            <div>{{ status.level }}</div>
                        </div>
                        <div>　</div>
                        <div class="field_container">
                            <div>所持ルーン</div>
                            <div>{{ status.runesHeld }}</div>
                        </div>
                        <div class="field_container">
                            <div>必要ルーン</div>
                            <div>{{ status.runesNeeded }}</div>
                        </div>
                    </div>

                </div>
                <div class="attributePoints_container">
                    <div class="attributePoints_left_line"></div>
                    <div>
                        <div class="field_title_container">
                            <div>能力値</div>
                        </div>
                        <div v-for="key in status.attributePoints" class="field_container">
                            <div>{{ key.text }}</div>
                            <div>{{ key.value }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container_mid">
                <div class="baseStats_container">
                    <div class="baseStats_left_line"></div>
                    <div>
                        <div class="field_title_container">
                            <div>基礎力</div>
                        </div>
                        <div class="field_container">
                            <div>HP</div>
                            <div>{{ status.baseStats.hp.current }} / {{ status.baseStats.hp.max }}</div>
                        </div>
                        <div class="field_container">
                            <div>FP</div>
                            <div>{{ status.baseStats.fp.current }} / {{ status.baseStats.fp.max }}</div>
                        </div>
                        <div class="field_container">
                            <div>スタミナ</div>
                            <div>{{ status.baseStats.stamina }}</div>
                        </div>
                        <div>　</div>
                        <div class="field_container">
                            <div>装備重量</div>
                            <div>{{ status.baseStats.equipLoad.current }} / {{ status.baseStats.equipLoad.max }}</div>
                        </div>
                        <div class="field_container">
                            <div></div>
                            <div>{{ status.baseStats.equipLoad.name }}</div>
                        </div>
                        <div class="field_container">
                            <div>強靭度</div>
                            <div>{{ status.baseStats.poise }}</div>
                        </div>
                        <div class="field_container">
                            <div>発見力</div>
                            <div>{{ status.baseStats.discovery }}</div>
                        </div>
                        <div class="field_container">
                            <div>記憶スロット</div>
                            <div>{{ status.baseStats.memorySlots }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container_end">
                <div class="attackPower_container">
                    <div class="attackPower_left_line"></div>
                    <div>
                        <div class="field_title_container">
                            <div>攻撃力</div>
                        </div>
                        <div v-for="key in status.attackPower" class="field_container">
                            <div>{{ key.text }}</div>
                            <div>{{ key.value }}</div>
                        </div>
                    </div>
                </div>
                <div class="defenseDmgNegation_container">
                    <div class="defenseDmgNegation_left_line"></div>
                    <div>
                        <div class="field_title_container">
                            <div>物理防御／カット率</div>
                        </div>
                        <div v-for="key in status.defenseDmgNegation" class="column3_field_container">
                            <div>{{ key.text }}</div>
                            <div class="inline_field_container">
                                <div>{{ key.value.defense }} /</div>
                                <div>{{ key.value.dmgNegation }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="resistance_container">
                    <div class="resistance_left_line"></div>
                    <div>
                        <div class="field_title_container">
                            <div>耐性値（肉体／防具）</div>
                        </div>
                        <div v-for="key in status.resistance" class="column3_field_container">
                            <div>{{ key.text }}</div>
                            <div class="inline_field_container">
                                <div>{{ key.value.body }} /</div>
                                <div>{{ key.value.armor }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container_foot">
            <div>キャラクターのステータスを確認します</div>
            <a href="/">戻る</a>
        </div>
    </div>
</template>

<style scoped>
a {
    text-decoration: underline;
}

.container {
    font-size: 20px;
    display: grid;
    grid-template-rows: auto 1fr auto;
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
    grid-template-columns: 1fr 1fr 1fr;
}

.container_start {
    padding-left: 104px;
}

.level_rune_container {
    display: grid;
    grid-template-columns: 24px 1fr;
}

.level_rune_left_line {
    height: 100%;
    width: 8px;
    background-image: radial-gradient(at 50% 50%, var(--color-separator) 0%, transparent 72%);
}

.attributePoints_container {
    display: grid;
    grid-template-columns: 24px 1fr;
    margin-top: 104px;
}

.attributePoints_left_line {
    height: 100%;
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
    margin-bottom: 16px;
}

.attackPower_left_line {
    height: 100%;
    width: 8px;
    background-image: radial-gradient(at 50% 50%, var(--color-separator) 0%, transparent 72%);
}

.defenseDmgNegation_container {
    display: grid;
    grid-template-columns: 24px 1fr;
    margin-bottom: 16px;
}

.defenseDmgNegation_left_line {
    height: 100%;
    width: 8px;
    background-image: radial-gradient(at 50% 50%, var(--color-separator) 0%, transparent 72%);
}

.resistance_container {
    display: grid;
    grid-template-columns: 24px 1fr;
}

.resistance_left_line {
    height: 100%;
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
</style>