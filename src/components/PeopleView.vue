<script setup>
    // Importar la función getGrandTotal y el objeto store desde el archivo de la tienda
    import { getGrandTotal, store } from "../store/store";

    // Importar el componente Label.vue para mostrar etiquetas personalizadas
    import Label from "./Label.vue";

    import Person from "./Person.vue";

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
                <Person
                    v-for="person in store.people" :key="person.id"
                    id="person.id" 
                    :number-of-person="person.numberOfPerson" 
                    :total-per-person="person.totalPerPerson"
                    :paid="person.paid"
                />
        </div>
    </div>
</template>

<style scoped>
    .no-items {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
    }
    .people-view {
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .people-container {
        width: 800px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        gap: 10px;
    }

    .header {
        color: white;
        font-weight: bolder;
        padding: 20px 0;
        font-size: 28px;
        display: flex;
        justify-content: space-between;
        gap: 10px;
        flex-direction: column;
    }
</style>
