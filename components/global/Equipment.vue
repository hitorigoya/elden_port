<script setup>
import status from "~/lib/status"
import equipment from "~/lib/equipment";

const select_eq_part = ref("右手武器１")
const select_eq_name = ref("-")
const select_eq_text = ref("-")
const select_eq_img = ref()

function select_eq_id(id) {
    const eq = equipment.find(el => el.id === id)
    select_eq_name.value = eq.name
    select_eq_text.value = eq.text
    select_eq_img.value = eq.img
}

select_eq_id(1)

function getEquipmentImg(id) {
    const eq = equipment.find(el => el.id === id)
    return eq.img
}
</script>

<template>
    <div class="container">
        <div class="title_container">
            <div class="title">装備</div>
        </div>
        <div class="container_main">
            <div class="container_start">
                <div class="container_start_inline">
                    <div class="select_eq_part">{{ select_eq_part }}</div>
                    <div class="select_equipment">{{ select_eq_name }}</div>
                    <div class="equipment_icon_container">
                        <!-- 1 -->
                        <div class="equipment_icon" @mouseover="select_eq_part = '右手武器１'; select_eq_id(1)">
                            <img v-bind:src="getEquipmentImg(1)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = '右手武器２'; select_eq_id(2)">
                            <img v-bind:src="getEquipmentImg(2)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = '右手武器３'; select_eq_id(3)">
                            <img v-bind:src="getEquipmentImg(3)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = '矢１'"></div>
                        <div class="equipment_icon" @mouseover="select_eq_part = '矢２'"></div>
                        <!-- 2 -->
                        <div class="equipment_icon" @mouseover="select_eq_part = '左手武器１'; select_eq_id(4)">
                            <img v-bind:src="getEquipmentImg(4)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = '左手武器２'; select_eq_id(12)">
                            <img v-bind:src="getEquipmentImg(12)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = '左手武器３'; select_eq_id(6)">
                            <img v-bind:src="getEquipmentImg(6)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = 'ボルト１'; select_eq_id(7)">
                            <img v-bind:src="getEquipmentImg(7)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = 'ボルト２'"></div>
                        <!-- 3 -->
                        <div class="equipment_icon" @mouseover="select_eq_part = '兜'; select_eq_id(8)">
                            <img v-bind:src="getEquipmentImg(8)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = '胴鎧'; select_eq_id(9)">
                            <img v-bind:src="getEquipmentImg(9)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = '手甲'; select_eq_id(10)">
                            <img v-bind:src="getEquipmentImg(10)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = '足甲'; select_eq_id(11)">
                            <img v-bind:src="getEquipmentImg(11)" alt="" />
                        </div>
                        <div class="equipment_icon equipment_icon_hidden"></div>
                        <!-- 4 -->
                        <div class="equipment_icon" @mouseover="select_eq_part = 'タリスマン１'; select_eq_id(5)">
                            <img v-bind:src="getEquipmentImg(5)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = 'タリスマン２'; select_eq_id(13)">
                            <img v-bind:src="getEquipmentImg(13)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = 'タリスマン３'; select_eq_id(14)">
                            <img v-bind:src="getEquipmentImg(14)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = 'タリスマン４'; select_eq_id(16)">
                            <img v-bind:src="getEquipmentImg(16)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = 'タリスマン５'; select_eq_id(15)">
                            <img v-bind:src="getEquipmentImg(15)" alt="" />
                        </div>
                        <!-- 5 -->
                        <div class="equipment_icon" @mouseover="select_eq_part = '使用アイテム１'; select_eq_id(17)">
                            <img v-bind:src="getEquipmentImg(17)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = '使用アイテム２'; select_eq_id(18)">
                            <img v-bind:src="getEquipmentImg(18)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = '使用アイテム３'; select_eq_id(19)">
                            <img v-bind:src="getEquipmentImg(19)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = '使用アイテム４'; select_eq_id(20)">
                            <img v-bind:src="getEquipmentImg(20)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = '使用アイテム５'"></div>
                        <!-- 6 -->
                        <div class="equipment_icon" @mouseover="select_eq_part = '使用アイテム６'; select_eq_id(21)">
                            <img v-bind:src="getEquipmentImg(21)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = '使用アイテム７'; select_eq_id(22)">
                            <img v-bind:src="getEquipmentImg(22)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = '使用アイテム８'; select_eq_id(23)">
                            <img v-bind:src="getEquipmentImg(23)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = '使用アイテム９'; select_eq_id(24)">
                            <img v-bind:src="getEquipmentImg(24)" alt="" />
                        </div>
                        <div class="equipment_icon" @mouseover="select_eq_part = '使用アイテム１０'; select_eq_id(25)">
                            <img v-bind:src="getEquipmentImg(25)" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="container_mid">
                <div class="select_equipment_mid">{{ select_eq_name }}</div>
                <div class="container_mid_inline">
                    <div class="letf_line_mid_container">
                        <div class="letf_line_mid"></div>
                    </div>
                    <div class="mid_select_eq_img_text_container">
                        <div class="select_eq_img_container">
                            <img v-bind:src="select_eq_img" class="select_eq_img" />
                        </div>
                        <div class="select_eq_text">{{ select_eq_text }}</div>
                    </div>
                </div>
            </div>
            <div class="container_end">
                <div class="character_data">
                    <div class="character_data_title">キャラクターデータ</div>
                    <div class="character_data_inline_container">
                        <div class="character_data_left_line"></div>
                        <div>
                            <div class="field_container">
                                <div>レベル</div>
                                <div>{{ status.level }}</div>
                            </div>
                            <div class="field_container">
                                <div>所持ルーン</div>
                                <div>{{ status.runesHeld }}</div>
                            </div>
                            <div>　</div>
                            <div class="attributePoints_container">
                                <div v-for="key in status.attributePoints" class="field_container">
                                    <div>{{ key.text }}</div>
                                    <div>{{ key.value }}</div>
                                </div>
                            </div>
                            <div>　</div>
                            <div class="baseStats_container">
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
                                    <div>{{ status.baseStats.equipLoad.current }} / {{ status.baseStats.equipLoad.max }}
                                    </div>
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
                </div>
            </div>
        </div>
        <div class="container_foot">
            <div>装備スロットを選択してください</div>
            <NuxtLink to="/">戻る</NuxtLink>
        </div>
    </div>
</template>

<style scoped>
img {
    display: block;
}

a {
    text-decoration: underline;
}

.container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    font-size: 24px;
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

.container_main {
    display: grid;
    grid-template-columns: 1fr 1fr 0.8fr;
}


.container_start {
    padding-left: 104px;
}

.container_start_inline {
    padding: 16px;
    border-radius: 2px;
    background-color: rgb(17 16 13 / 30%);
    box-shadow: rgb(17 16 13 / 30%) 0px 8px 24px;
}

.select_eq_part {
    color: var(--color-text-secondary);
    line-height: 1;
    font-size: 20px;
}

.select_equipment {
    font-size: 20px;
    line-height: 1;
    padding-top: 16px;
    padding-bottom: 16px;
}

.equipment_icon_container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
}

.equipment_icon {
    height: 72px;
    width: 72px;
    background-color: rgb(46 45 44 /64%);
    border-radius: 10% /20%;
}

.equipment_icon img {
    height: 72px;
    width: 72px;
}

.equipment_icon:hover {
    box-shadow: var(--color-separator) 0px 0px 12px;
    background-color: rgb(56 55 54 /64%);
}

.equipment_icon_hidden {
    background-color: transparent;
    border-color: transparent;
}

.equipment_icon_hidden:hover {
    box-shadow: none;
    background-color: transparent;
}


.container_mid {
    padding-left: 16px;
    white-space: pre-line;
}

.mid_select_eq_img_text_container {
    padding-left: 24px;
}

.select_equipment_mid {
    line-height: 1;
    padding-bottom: 16px;
    padding-top: 16px;
}

.letf_line_mid_container {
    display: flex;
    justify-content: center;
}

.container_mid_inline {
    display: grid;
    grid-template-columns: 24px 1fr;
}

.letf_line_mid {
    height: 600px;
    width: 8px;
    background-image: radial-gradient(at 50% 50%, var(--color-separator) 0%, transparent 72%);
}

.select_eq_img_container {
    display: grid;
    justify-content: center;
    padding: 16px;
    border-radius: 2px;
    background-color: rgb(17 16 13 / 30%);
    box-shadow: var(--color-separator) 0px 0px 12px;
}

.select_eq_text {
    padding-top: 16px;
    font-size: 20px;
}

.container_end {
    font-size: 20px;
    padding-left: 32px;
    padding-right: 112px;
}

.character_data_title {
    line-height: 1;
    padding-top: 16px;
    padding-bottom: 8px;
    color: var(--color-text-secondary);
}

.character_data_inline_container {
    display: grid;
    grid-template-columns: 24px 1fr;
}

.character_data_left_line {
    height: 100%;
    width: 8px;
    background-image: radial-gradient(at 50% 50%, var(--color-separator) 0%, transparent 72%);
}

.field_container {
    display: flex;
    justify-content: space-between;
}

.container_foot {
    font-size: 20px;
    padding-left: 104px;
    padding-bottom: 24px;
}
</style>