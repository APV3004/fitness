import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './validationSchema';
import PersonalDetails from './PersonalDetails';
import ContactInfo from './ContactInfo';
import TrainingPreferences from './TrainingPreferences';
import PaymentInfo from './PaymentInfo';
import { FormContainer, SubmitButton } from '../styles/StyledComponents';

const FitLifeForm = () => {
    const methods = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            nombre: '',
            email: '',
            telefono: '',
            direccion: '',
            // Define valores iniciales para otros campos si es necesario
        },
    });

    const onSubmit = async (data) => {
        try {
            const response = await fetch('https://api.fitlife.com/registro', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                console.log('Usuario registrado correctamente');
            } else {
                console.log('Error al registrar usuario');
            }
        } catch (error) {
            console.log('Error en la conexión', error);
        }
    };

    return (
        <FormProvider {...methods}>
            <FormContainer onSubmit={methods.handleSubmit(onSubmit)}>
                <PersonalDetails />
                <ContactInfo />
                <TrainingPreferences />
                <PaymentInfo />
                <SubmitButton type="submit">Unirse a FitLife</SubmitButton>
            </FormContainer>
        </FormProvider>
    );
};

export default FitLifeForm;