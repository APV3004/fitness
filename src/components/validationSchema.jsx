import * as Yup from 'yup';

export const validationSchema = Yup.object({
    nombre: Yup.string().required('El nombre es obligatorio'),
    email: Yup.string().email('Introduce un email válido').required('El email es obligatorio'),
    telefono: Yup.string().required('El teléfono es obligatorio'),
    direccion: Yup.string().required('La dirección es obligatoria'),
    // Agrega más validaciones según las necesidades
});