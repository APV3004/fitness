import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import { Header, Container } from './styles/StyledComponents';

const App = () => {
    return (
        <Container>
            <Header>Registro en FitLife</Header>
            <RegistrationForm />
        </Container>
    );
};

export default App;