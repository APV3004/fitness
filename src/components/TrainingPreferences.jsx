import React from 'react';
import { useFormContext } from 'react-hook-form';

const TrainingPreferences = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div>
            <select {...register('tipoEntrenamiento', { required: 'El tipo de entrenamiento es obligatorio' })}>
                <option value="">Selecciona un tipo de entrenamiento</option>
                <option value="cardio">Cardio</option>
                <option value="fuerza">Fuerza</option>
                <option value="flexibilidad">Flexibilidad</option>
            </select>
            {errors.tipoEntrenamiento && <p className="error">{errors.tipoEntrenamiento.message}</p>}

            <inputField 
                {...register('objetivos', { required: 'Los objetivos son obligatorios' })} 
                placeholder="Objetivos" 
            />
            {errors.objetivos && <p className="error">{errors.objetivos.message}</p>}

            <input 
                {...register('disponibilidad', { required: 'La disponibilidad es obligatoria' })} 
                placeholder="Disponibilidad" 
            />
            {errors.disponibilidad && <p className="error">{errors.disponibilidad.message}</p>}
        </div>
    );
};

export default TrainingPreferences;