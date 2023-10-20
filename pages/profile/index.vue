<template>
    <div class="mobile">
        <ProfileMobile />
    </div>
    <div class="desktop">
        <Profile />
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