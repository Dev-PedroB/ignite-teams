import styled, { css } from "styled-components/native";

export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

export const Message = styled.Text`
${({theme}) => css`
font-size: ${theme.FONT_SIZE.SM}px;
font-family: ${theme.FONT_FAMILY.REGULAR};
color: ${theme.COLORS.GRAY_300};
`}; /* Usar o theme mas importando apenas uma unica vez */
text-align: center;

/* font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
color: ${({theme}) => theme.COLORS.GRAY_300}; */
`;