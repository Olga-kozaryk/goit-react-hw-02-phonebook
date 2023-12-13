import styled from "styled-components";

export const FormStyled = styled('form')(() =>{
    return {
        backgroundColor: 'rgb(170, 225, 180)',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        border: '1px solid #000',
        padding: '20px',
        borderRadius: '10px',
    }
})