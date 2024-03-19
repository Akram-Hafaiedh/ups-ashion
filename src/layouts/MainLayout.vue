<template>
    <div>
        <PageHeader />
        <div class="container">
            <router-view />
        </div>
        <PageFooter />
        <SearchSection />
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';
import SearchSection from '@/components/SearchSection.vue';
export default {
    name: 'MainLayout',
    components: {
        PageHeader,
        PageFooter,
        SearchSection,
    },
}
</script>

<style lang="scss" scoped></style>