<template>
    <div class="mobile">
        <InventoryMobile />
    </div>
    <div class="desktop">
        <Inventory />
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