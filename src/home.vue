
<template>
    <private-view>
        <template #headline>
            <div class="headline">Verify your business</div>
        </template>
        <template #title-outer:append>
            <div class="title-prepend">Verify your business to unlock all the features of Tagrise</div>
        </template>
        <template #navigation>
            <settings-navigation />
        </template>

        <template #sidebar>
            <sidebar-detail icon="info_outline" :title="'Information'" close>
                <div v-md="'This is the PTM users guide module created by .....'" class="page-description"></div>
            </sidebar-detail>
        </template>

        <div class="docs-content selectable">
            fdsfds
        </div>
    </private-view>
</template>

<style lang="css">
.docs-content {
    padding: 0 var(--content-padding) var(--content-padding-bottom);
}
.title-container {
    margin-left : 0 !important;
}
.headline {
    color: #000000 !important;
    font-size: 17px !important;
    font-weight: bold !important;
}

.title-prepend {
    font-size: 11px !important;
    color: #000000 !important;
}
</style>
