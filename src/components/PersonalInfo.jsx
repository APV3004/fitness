
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { InputF, InputFieldield } from '../styles/StyledComponents';

const PersonalInfo = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div>
            <input 
                {...register('nombre', { required: 'El nombre es obligatorio' })} 
                placeholder="Nombre" 
            />
            {errors.nombre && <p className="error">{errors.nombre.message}</p>}

            <input 
                {...register('email', { 
                    required: 'El email es obligatorio', 
                    pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: 'Introduce un email válido'
                    }
                })} 
                placeholder="Email" 
            />
            {errors.email && <p className="error">{errors.email.message}</p>}

            <input
                {...register('telefono', { required: 'El teléfono es obligatorio' })} 
                placeholder="Teléfono" 
            />
            {errors.telefono && <p className="error">{errors.telefono.message}</p>}
        </div>
    );
};

export default PersonalInfo;