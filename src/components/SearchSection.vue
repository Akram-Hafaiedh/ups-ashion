<template>
    <div v-if="isSearchOpen" class="search-model">
        <div class="h-100 d-flex align-items-center justify-content-center">
            <div @click="closeSearch" class="search-close-switch">+</div>
            <form class="search-model-form">
                <input type="text" id="search-input" placeholder="Search here.....">
            </form>
        </div>
    </div>
</template>

<script>
import useSearch from '@/composables/useSearch';
export default {
    name: 'SearchSection',
    data() {
        return {
            ...useSearch()
        };
    }
};
</script>

<style lang="scss" scoped></style>