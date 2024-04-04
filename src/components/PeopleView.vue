<script setup>
    // Importar la función getGrandTotal y el objeto store desde el archivo de la tienda
    import { getGrandTotal, store } from "../store/store";
</script>

<template>
    <!-- Mostrar mensaje "No items" si no hay elementos en la lista de personas -->
    <div class="no-items" v-if="store.people.length === 0">No items</div>

    <!-- Mostrar la vista de personas si hay elementos en la lista de personas -->
    <div class="people-view" v-if="store.people.length > 0">
        <!-- Encabezado de la vista de personas -->
        <div class="header">
            <div>
                <!-- Mostrar el resultado del total obtenido a través de la función getGrandTotal() -->
                <div>{{ getGrandTotal() }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    /* Estilos específicos del componente */
</style>
