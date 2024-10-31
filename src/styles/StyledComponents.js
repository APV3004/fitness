import styled from 'styled-components';

// Contenedor principal del formulario
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    padding: 40px;
    background-color: rgba(255, 255, 255, 0.9); /* Fondo blanco semi-transparente */
    border-radius: 10px; /* Bordes redondeados */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Sombra sutil */
    width: 100%;
    max-width: 500px; /* Ancho máximo */
    margin: 50px auto; /* Centrar el formulario */
    font-family: 'Arial', sans-serif; /* Tipografía clara */
`;

// Campo de entrada
export const InputField = styled.input`
    padding: 12px; /* Espaciado interno */
    margin-bottom: 15px; /* Espaciado inferior */
    width: 100%; /* Ancho completo */
    box-sizing: border-box; /* Incluir padding y borde en el ancho */
    border: 1px solid #ccc; /* Borde gris claro */
    border-radius: 5px; /* Bordes redondeados */
    font-size: 16px; /* Tamaño de fuente */
    transition: border-color 0.3s ease-in-out; /* Transición suave */

    &:focus {
        outline: none; /* Sin contorno al enfocar */
        border-color: #007BFF; /* Color del borde al enfocar */
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.2); /* Sombra al enfocar */
    }
`;

// Mensajes de error
export const ErrorText = styled.p`
    color: #d9534f; /* Color rojo para errores */
    font-size: 14px; /* Tamaño de fuente */
    margin: -8px 0 10px; /* Espaciado superior e inferior */
`;

// Botón de envío
export const SubmitButton = styled.button`
    padding: 12px; /* Espaciado interno */
    background-color: #007BFF; /* Color azul */
    color: white; /* Texto blanco */
    border: none; /* Sin borde */
    border-radius: 5px; /* Bordes redondeados */
    font-size: 18px; /* Tamaño de fuente */
    font-weight: bold; /* Negrita */
    cursor: pointer; /* Cambiar cursor al pasar */
    transition: background-color 0.3s ease-in-out; /* Transición suave */
    margin-top: 20px; /* Espaciado superior */

    &:hover {
        background-color: #0056b3; /* Color más oscuro al pasar el mouse */
    }

    &:active {
        background-color: #004085; /* Color al hacer clic */
    }
`;

// Títulos
export const Header = styled.h1`
    text-align: center; /* Centrar el texto */
    color: #333; /* Color gris oscuro */
    margin-bottom: 30px; /* Espaciado inferior */
    font-size: 24px; /* Tamaño de fuente */
`;

export const FormTitle = styled.h2`
    text-align: center; /* Centrar el texto */
    color: #007BFF; /* Color azul */
    font-size: 20px; /* Tamaño de fuente */
    margin-bottom: 20px; /* Espaciado inferior */
`;

// Contenedor general
export const Container = styled.div`
    max-width: 600px; /* Ancho máximo */
    margin: 50px auto; /* Centrar el contenedor */
    padding: 30px; /* Espaciado interno */
    background-size: cover; /* Cubrir todo el contenedor */
    background-position: center; /* Centrar la imagen */
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1); /* Sombra */
    border-radius: 10px; /* Bordes redondeados */
`;