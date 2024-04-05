<script setup>
    // Importar la función getGrandTotal y el objeto store desde el archivo de la tienda
    import { getGrandTotal, store } from "../store/store";

    // Importar el componente Label.vue para mostrar etiquetas personalizadas
    import Label from "./Label.vue";
</script>

<template>
    <!-- Mostrar mensaje "No items" si no hay elementos en la lista de personas -->
    <div class="no-items" v-if="store.people.length === 0">No items</div>

    <!-- Mostrar la vista de personas si hay elementos en la lista de personas -->
    <div class="people-view" v-if="store.people.length > 0">
        <!-- Encabezado de la vista de personas -->
        <div class="header">
            <!-- Mostrar el total más el consejo utilizando el componente Label -->
            <div>
                <Label title="Total + Tip " :value="getGrandTotal()" />
            </div>
            <!-- Mostrar el valor restante utilizando el componente Label -->
            <div>
                <Label title="Remaining " :value="store.params.remaining" />
            </div>
        </div>

        <!-- Contenedor de personas -->
        <div class="people-container">
            <!-- Iterar sobre la lista de personas y mostrar el total por persona -->
            <div v-for="person in store.people" :key="person.id">
                {{ person.totalPerPerson }}
            </div>
        </div>
    </div>
</template>

<style scoped>
  /* Estilos específicos del componente */
</style>
