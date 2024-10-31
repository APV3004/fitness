import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PersonalInfo from './PersonalInfo';
import ContactInfo from './ContactInfo';
import TrainingPreferences from './TrainingPreferences';
import PaymentInfo from './PaymentInfo';

const schema = Yup.object().shape({
    nombre: Yup.string().required('El nombre es obligatorio'),
    email: Yup.string().email('Introduce un email válido').required('El email es obligatorio'),
    telefono: Yup.string().required('El teléfono es obligatorio'),
    direccion: Yup.string().required('La dirección es obligatoria'),
    ciudad: Yup.string().required('La ciudad es obligatoria'),
    codigoPostal: Yup.string().matches(/^[0-9]{5}$/, 'El código postal debe tener 5 dígitos').required('El código postal es obligatorio'),
    tipoEntrenamiento: Yup.string().required('El tipo de entrenamiento es obligatorio'),
    objetivos: Yup.string().required('Los objetivos son obligatorios'),
    disponibilidad: Yup.string().required('La disponibilidad es obligatoria'),
    metodoPago: Yup.string().required('El método de pago es obligatorio'),
    informacionTarjeta: Yup.string().required('La información de la tarjeta es obligatoria')
});

const RegistrationForm = () => {
    const methods = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            const response = await fetch('https://api.fitlife.com/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Usuario registrado correctamente');
            } else {
                console.log('Error al registrar usuario');
            }
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <PersonalInfo />
                <ContactInfo />
                <TrainingPreferences />
                <PaymentInfo />
                <button type="submit">Enviar</button>
            </form>
        </FormProvider>
    );
};

export default RegistrationForm;