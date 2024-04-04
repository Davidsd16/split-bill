<script setup>
    import { ref } from "vue";

    const total = ref(0);
    const tip = ref(0);
    const people = ref(0);

</script>

<template>
    <form action="">
        <div class="form-container">
            <div>
                <label for="total">Total</label>
                <input type="number" required v-model="total">
            </div>
            <div>
                <label for="tip">Tip %</label>
                <input type="number" required v-model="tip">
            </div>
            <div>
                <label for="people">People</label>
                <input type="number" required v-model="people">
            </div>
            <div>
                <input type="submit" value="Calculate">
            </div>
        </div>
    </form>
</template>

<style scoped>

</style>