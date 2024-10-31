import React from 'react';
import { useFormContext } from 'react-hook-form';
import { InputField, ErrorText, SelectField } from '../styles/StyledComponents'; // Importar correctamente

const ContactInfo = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div>
            <InputField 
                {...register('direccion', { required: 'La dirección es obligatoria' })} 
                placeholder="Dirección" 
            />
            {errors.direccion && <ErrorText>{errors.direccion.message}</ErrorText>}

            <InputField 
                {...register('ciudad', { required: 'La ciudad es obligatoria' })} 
                placeholder="Ciudad" 
            />
            {errors.ciudad && <ErrorText>{errors.ciudad.message}</ErrorText>}

            <InputField 
                {...register('codigoPostal', { 
                    required: 'El código postal es obligatorio', 
                    pattern: {
                        value: /^[0-9]{5}$/,
                        message: 'El código postal debe tener 5 dígitos'
                    }
                })} 
                placeholder="Código Postal" 
            />
            {errors.codigoPostal && <ErrorText>{errors.codigoPostal.message}</ErrorText>}
        </div>
    );
};

export default ContactInfo;