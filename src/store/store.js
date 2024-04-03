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