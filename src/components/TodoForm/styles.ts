import styled from 'styled-components';

export const Container = styled.div`
    width: 500px;
    margin: 20px auto;

    h1 {
        text-align: center;
    }

    form {
        display: flex;
        justify-content: center;
    }
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;

    input {
        width: 250px;
    }

    span {
        color: red;
    }
`;

export const FormSubmit = styled.button`
    height: 21px;
    margin-left: 5px;
`;