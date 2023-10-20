<template>
    <div class="mobile">
        <StatusMobile />
    </div>
    <div class="desktop">
        <Status />
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