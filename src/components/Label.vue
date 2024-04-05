<script setup>
    // Importar la función defineProps desde Vue para definir las propiedades del componente
    import { defineProps } from "vue";

    // Definir las propiedades 'title' y 'value' del componente
    const props = defineProps(['title', 'value']);
</script>

<template>
    <!-- Estructura del componente para mostrar un título y un valor formateado como moneda -->
    <div>
        <!-- Mostrar el título utilizando la propiedad 'title' definida en las props -->
        <span class="title">{{ props.title }}</span>
        <!-- Mostrar el valor formateado como moneda utilizando la propiedad 'value' definida en las props -->
        <span class="value">{{
            // Formatear el valor utilizando el objeto Intl.NumberFormat para mostrarlo como moneda en formato USD
            new Intl.NumberFormat('en-Us',{
                style: 'currency',
                currency: 'USD'
            }).format(props.value)
        }}</span>
    </div>
</template>

<style scoped>
    /* Estilos específicos del componente */
</style>
