<script setup>
    // Importar las funciones defineProps y ref desde Vue para definir propiedades reactivas
    import { defineProps, ref } from "vue";

    // Importar la función pay desde el archivo de la tienda
    import { pay } from '../store/store';

    // Definir las propiedades 'id', 'numberOfPerson', 'totalPerPerson' y 'paid' del componente
    const props = defineProps(['id', 'numberOfPerson', 'totalPerPerson', 'paid' ]);

    // Crear una referencia reactiva para el estado de pago de la persona
    const paid = ref(false);

    // Función para manejar el cambio en el estado de pago
    function handleChange(e){
        // Actualizar el estado de pago con el valor del evento de cambio
        paid.value = e.target.value;

        // Llamar a la función de la tienda para actualizar el estado de pago en la lista de personas
        pay(props.id, paid.value);
    }
</script>

<template>
    <div>
        <!-- Mostrar el número de persona -->
        <div class="person-number">
            Person {{ props.numberOfPerson }}
        </div>
        <!-- Mostrar el total por persona formateado como moneda -->
        <div class="person-to-pay">
            {{
                new Intl.NumberFormat('en-Us',{
                    style: 'currency',
                    currency: 'USD'
                }).format(props.totalPerPerson)
            }}
        </div>
        <!-- Input para marcar si la persona ha pagado o no -->
        <div class="pay">
            <input type="checkbox" name="" id="" @change="handleChange"> Paid
        </div>
    </div>
</template>

<style scoped>
    /* Estilos específicos del componente */
</style>
