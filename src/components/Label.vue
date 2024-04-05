<script setup>
    import { defineProps } from "vue";

    const props = defineProps(['title', 'value']);

</script>

<template>
        <div>
            <span class="title">{{ props.title }}</span>
            <span class="value">{{
                new Intl.NumberFormat('en-Us',{
                    style: 'currency',
                    currency: 'USD'
                }).format(props.value)
            }}</span>
        </div>
</template>

<style scoped>

</style>