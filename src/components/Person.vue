<script setup>
    // Importar las funciones defineProps y ref desde Vue para definir propiedades reactivas
    import { defineProps, ref } from "vue";

    // Importar la función pay desde el archivo de la tienda
    import { pay } from '../store/store';

    // Definir las propiedades 'id', 'numberOfPerson', 'totalPerPerson' y 'paid' del componente
    const props = defineProps(['id', 'numberOfPerson', 'totalPerPerson', 'paid' ]);

    // Crear una referencia reactiva para el estado de pago de la persona
    let paid = ref(props.paid); // Inicializar con el valor de props.paid

    // Función para manejar el cambio en el estado de pago
    function handleChange() {
        // Invertir el valor de 'paid' cuando se produce el cambio
        paid.value = !paid.value;

        // Llamar a la función de la tienda para actualizar el estado de pago en la lista de personas
        pay(props.id, paid.value);
    }
</script>

<template>
    <div :class="['person', paid.value ? 'person-paid' : 'person-no-paid']">
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
            <input type="checkbox" name="" id="" :checked="paid.value" @change="handleChange"> Paid
        </div>
    </div>
</template>

<style scoped>
    .person {
        height: 200px;
        border-radius: 5px;
        font-size: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
    }

    .person-paid {
        border: solid 3px #e80808;
    }

    .person-no-paid {
        border: solid 3px #0df023;
    }

    .person-number {
        background-color: black;
        padding: 10px;
        color: white;
        text-align: center;
    }

    .person-topay {
        text-align: center;
        font-size: 30px;
        font-weight: bolder;
        color: greenyellow;
    }

    .paid {
        background-color: rgb(52, 63, 104);
        padding: 10px;
    }
</style>
