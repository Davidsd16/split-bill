<script setup>
    // Importaciones de Vue
    import { ref } from "vue";
    // Importación del store y la función calculate
    import { store, calculate } from "../store/store";

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
                <input type="number" id="total" name="total" required v-model="store.params.total">
            </div>
            <div>
                <label for="tip">Tip %</label>
                <input type="number" id="tip" name="tip" required v-model="store.params.tip">
            </div>
            <div>
                <label for="people">People</label>
                <input type="number" id="people" name="people" required v-model="store.params.people">
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
        max-width: 300px; /* Ajustar el ancho máximo del formulario */
        background-color: rgb(23, 129, 78);
        display: flex;
        align-items: center;
        color: white;
        font-size: 18px;
        padding: 20px;
        margin: auto; /* Centrar el formulario horizontalmente */
        border-radius: 10px; /* Añadir bordes redondeados */
    }

    .form-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    form label {
        display: block;
        margin-bottom: 5px; /* Agregar un pequeño espacio entre etiqueta y campo de entrada */
    }

    form input {
        padding: 10px;
        width: calc(100% - 20px); /* Ajustar el ancho del campo de entrada restando el padding */
        box-sizing: border-box;
        font-size: 18px;
        border-radius: 5px; /* Añadir bordes redondeados */
        border: none; /* Eliminar borde */
        background-color: #f0f0f0; /* Color de fondo */
    }

    /* Estilos para el botón de enviar */
    input[type="submit"] {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
