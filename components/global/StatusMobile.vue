<script setup>
import status from "~/lib/status"

</script>

<template>
    <div class="container">
        <div class="title_container">
            <div class="title">ステータス</div>
        </div>
        <div class="status_container">
            <div class="level_rune_container">
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
            <div class="attributePoints_container">
                <div class="field_title">能力値</div>
                <div v-for="key in status.attributePoints" class="field_container">
                    <div>{{ key.text }}</div>
                    <div>{{ key.value }}</div>
                </div>
            </div>
            <div class="baseStats_container">
                <div class="field_title">基礎力</div>
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
            <div class="attackPower_inline_container">
                <div class="field_title">攻撃力</div>
                <div v-for="key in status.attackPower" class="field_container">
                    <div>{{ key.text }}</div>
                    <div>{{ key.value }}</div>
                </div>
            </div>
            <div class="defenseDmgNegationcontainer">
                <div class="field_title">物理防御／カット率</div>
                <div v-for="key in status.defenseDmgNegation" class="column3_field_container">
                    <div>{{ key.text }}</div>
                    <div class="inline_field_container">
                        <div>{{ key.value.defense }} /</div>
                        <div>{{ key.value.dmgNegation }}</div>
                    </div>
                </div>
            </div>
            <div class="resistance_container">
                <div class="field_title">
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
        <NuxtLink to="/" class="return">戻る</NuxtLink>
    </div>
</template>

<style scoped>
.container {
    background-image: linear-gradient(45deg, var(--color-bg-translucent), rgb(17 16 13 / 94%));
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

.status_container {
    padding: 24px;
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

.column3_field_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.inline_field_container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.return {
    display: block;
    text-align: center;
    text-decoration: underline;
    padding-bottom: 24px;
}
</style>