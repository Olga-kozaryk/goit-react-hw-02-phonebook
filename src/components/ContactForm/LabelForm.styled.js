import styled from "styled-components";

export const LabelStyled = styled('label')(() => {
    return {
            marginBottom: '20px',
            color: 'black',
            fontSize: '24px',
          
          span: {
            marginRight: '15px'
          }, 

          input: {
            
            padding: '10px',
            fontSize: '20px',
            borderRadius: '20px',
            border: '1px solid #000',
          
          }
    }
})