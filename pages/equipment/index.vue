<template>
    <div class="mobile">
        <EquipmentMobile />
    </div>
    <div class="desktop">
        <Equipment />
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