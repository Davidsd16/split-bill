<script setup>

    import { getGrandTotal, store } from "../store/store";

</script>

<template>
    <div class="no-items" v-if="store.people.length === 0">No items</div>
    <div class="people-view" v-if="store.people.length > 0">
        <div class="header">
            <div>
                <div>{{ getGrandTotal() }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>