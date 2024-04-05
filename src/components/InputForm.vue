<script setup>
    // Importaciones de Vue
    import { ref } from "vue";
    // Importación del store y la función calculate
    import { store, calculate } from "../store/store"

    // Definición de referencias reactivas para total, tip y people
    const total = ref(0);
    const tip = ref(0);
    const people = ref(0);

    // Función para manejar el envío del formulario
    function handleSubmit(){
        // Asignación de los valores al store
        store.params.total = total;
        store.params.tip = tip;
        store.params.people = people;
        // Llamada a la función calculate del store
        calculate();
    }
</script>

<template>
    <!-- Formulario -->
    <form action="" @submit.prevent="handleSubmit">
        <div class="form-container">
            <!-- Campos del formulario -->
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
    /* Estilos específicos del formulario */
    form {
        width: 400px;
        background-color: rgb(23, 129, 78);
        height: 100vh;
        display: flex;
        align-items: center;
        color: white;
        font-size: 18px;
        padding: 20px;
    }

    .form-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    form label {
        display: block;
    }

    form input {
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
        font-size: 18px;
    }
</style>
