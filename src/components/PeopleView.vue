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
                <Label title="Total + Tip" :value="getGrandTotal()" />
            </div>
            <div>
                <div>{{ store.params.remaining }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
  /* Estilos específicos del componente */
</style>
