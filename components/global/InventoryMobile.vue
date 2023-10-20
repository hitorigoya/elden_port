<script setup>
import inventory from "~/lib/inventory";

</script>

<template>
    <div class="container">
        <div class="title_container">
            <div class="title">インベントリ</div>
        </div>
        <div v-for="eq in inventory" class="equipment_container">
            <div class="equipment_img_container"> <img v-bind:src="eq.img" class="equipment_img" /></div>
            <div>
                <div class="equipment_name">{{ eq.name }}</div>
                <div class="equipment_text">{{ eq.text }}</div>
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

.equipment_container {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 16px;
    padding: 16px;
}

.equipment_img {
    display: block;
    height: 72px;
    width: 72px;
}

.equipment_name {
    color: var(--color-text-secondary);
    font-size: 20px;
}

.return {
    display: block;
    text-align: center;
    text-decoration: underline;
    padding-bottom: 24px;
}
</style>