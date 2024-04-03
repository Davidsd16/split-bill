/**
 * Este módulo define un almacenamiento reactivable que contiene los parámetros
 * relacionados con el cálculo de una factura dividida, así como una función
 * para calcular el total general de la factura.
 */
import { reactive } from "vue";

// Almacenamiento reactivable para los parámetros de la factura y la lista de personas
export const store = reactive({
    params: {
        total: 0,       // Total de la factura
        tip: 0,         // Propina
        people: 0,      // Número de personas
        remaning: 0,    // Restante
    },
    people: [],         // Lista de personas
});

/**
 * Función para calcular el total general de la factura, incluida la propina.
 * @returns {number} El total general de la factura.
 */
export function getGrandTotal(){
    return store.params.total * (store.params.tip / 100 + 1);
}

/**
 * Esta función calcula el total por persona y distribuye la factura entre el número de personas especificado.
 * También actualiza el almacenamiento reactivable con la lista de personas y el total restante.
 */
export function calculate(){
    // Vacía la lista de personas en el almacenamiento
    store.people = [];

    // Obtiene los valores de los parámetros de la factura
    const total = store.params.total;
    const tip = store.params.tip;
    const people = store.params.people;

    // Calcula el total por persona
    const totalPerPerson = getGrandTotal() / people;

    // Actualiza el valor restante en los parámetros del almacenamiento
    store.params.remaining = getGrandTotal;

    // Genera la lista de personas y sus respectivos detalles
    for (let i = 0; i < people; i++) {
        store.people.push({
            id: crypto.randomUUID(),      // Genera un ID único para cada persona
            numberOfPerson: i + 1,         // Número de la persona
            totalPerPerson,                // Total a pagar por la persona
            paid: false,                   // Indica si la persona ha pagado
        });
    }

    calculateRemaining();
}

/**
 * Función para calcular el monto restante por pagar entre los usuarios.
 * Calcula la cantidad total que falta por pagar entre las personas que aún no han pagado.
 */
function calculateRemaining(){
    // Filtra las personas que aún no han pagado
    const missingToPay = store.people.filter(item => !item.paid);
    
    // Calcula el monto total restante por pagar
    const remaining = missingToPay.reduce(
        (acc, item) => (acc += item.totalPerPerson), // Suma el monto por persona al acumulador
        0 // Valor inicial del acumulador
    );

    // Actualiza el valor de 'remaining' en el almacenamiento global
    store.params.remaining = remaining;  
}

