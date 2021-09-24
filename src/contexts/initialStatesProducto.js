export const initial_state_datos_generales = {
    codigo_barras: '',
    descripcion: '',
};
export const initial_state_precios = {
    iva_activo: true,
    ieps_activo: false,
    ieps: 0,
    iva: 16,
    granel: false,
    precio_de_compra: {
        precio_con_impuesto: 0,
        precio_sin_impuesto: 0,
        iva: 0,
        ieps: 0
    },
    unidad_de_compra: {
        unidad: "Pz",
        cantidad: 1,
        precio_unitario_sin_impuesto: 0,
        precio_unitario_con_impuesto: 0,
    },
};

export const initial_state_preciosVenta = [
    {
        numero_precio: 1,
        utilidad: 0,
        precio_neto: 0,
        unidad_mayoreo: 0,
        precio_venta: 0,
        unitario: false
    },
    {
        numero_precio: 2,
        utilidad: 0,
        precio_neto: 0,
        unidad_mayoreo: 0,
        precio_venta: 0,
        unitario: false
    },
    {
        numero_precio: 3,
        utilidad: 0,
        precio_neto: 0,
        unidad_mayoreo: 0,
        precio_venta: 0,
        unitario: false
    },
    {
        numero_precio: 4,
        utilidad: 0,
        precio_neto: 0,
        unidad_mayoreo: 0,
        precio_venta: 0,
        unitario: false
    },
    {
        numero_precio: 5,
        utilidad: 0,
        precio_neto: 0,
        unidad_mayoreo: 0,
        precio_venta: 0,
        unitario: false
    },
    {
        numero_precio: 6,
        utilidad: 0,
        precio_neto: 0,
        unidad_mayoreo: 0,
        precio_venta: 0,
        unitario: false
    }
]

export const initial_state_unidadesVenta = [];

export const initial_state_preciosPlazos = {
    precio_piezas: [],
    precio_cajas: [],
    precio_costales: [],
};

export const initial_state_imagenes = [];
export const initial_state_imagenes_eliminadas = [];
export const initial_state_onPreview = { index: '', image: '' };
export const initial_state_validacion = { error: false, message: '' };