<script setup>

</script>

<template>
    <div class="mobile">
        <TopMobile />
    </div>
    <div class="desktop">
        <Top />
    </div>
</template>

<style scoped>
.desktop {
    display: none;
}

@media (min-width: 768px) {
    .desktop {
        display: block;
    }

    .mobile {
        display: none;
    }
}
</style>