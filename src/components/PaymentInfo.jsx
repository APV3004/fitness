import React from 'react';
import { useFormContext } from 'react-hook-form';

const PaymentInfo = () => {
    const { register, watch, formState: { errors } } = useFormContext();
    const metodoPago = watch('metodoPago', 'tarjeta');

    return (
        <div>
            <select {...register('metodoPago', { required: 'El método de pago es obligatorio' })} defaultValue="tarjeta">
                <option value="tarjeta">Tarjeta de crédito</option>
                <option value="paypal">PayPal</option>
                <option value="bizum">Bizum</option>
            </select>
            {errors.metodoPago && <p className="error">{errors.metodoPago.message}</p>}

            {metodoPago === 'tarjeta' && (
                <>
                    <input 
                        {...register('nombreTarjeta', { required: 'El nombre en la tarjeta es obligatorio' })} 
                        placeholder="Nombre en la tarjeta" 
                    />
                    {errors.nombreTarjeta && <p className="error">{errors.nombreTarjeta.message}</p>}

                    <input 
                        {...register('numeroTarjeta', { required: 'El número de la tarjeta es obligatorio' })} 
                        placeholder="Número de la tarjeta" 
                    />
                    {errors.numeroTarjeta && <p className="error">{errors.numeroTarjeta.message}</p>}

                    <input 
                        {...register('cvvTarjeta', { required: 'El CVV de la tarjeta es obligatorio' })} 
                        placeholder="CVV" 
                    />
                    {errors.cvvTarjeta && <p className="error">{errors.cvvTarjeta.message}</p>}
                </>
            )}

            {metodoPago === 'bizum' && (
                <>
                    <input 
                        {...register('numeroTelefono', { required: 'El número de teléfono es obligatorio' })} 
                        placeholder="Número de teléfono" 
                    />
                    {errors.numeroTelefono && <p className="error">{errors.numeroTelefono.message}</p>}
                </>
            )}

            {metodoPago === 'paypal' && (
                <>
                    <input 
                        {...register('correoPaypal', { required: 'El correo electrónico es obligatorio' })} 
                        placeholder="Correo electrónico" 
                    />
                    {errors.correoPaypal && <p className="error">{errors.correoPaypal.message}</p>}

                    <input 
                        {...register('contrasenaPaypal', { required: 'La contraseña es obligatoria' })} 
                        placeholder="Contraseña" 
                        type="password"
                    />
                    {errors.contrasenaPaypal && <p className="error">{errors.contrasenaPaypal.message}</p>}
                </>
            )}
        </div>
    );
};

export default PaymentInfo;