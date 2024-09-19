import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

export type FilterStyleProps = {
    isActive?: boolean;
}


export const Container = styled(TouchableOpacity)<FilterStyleProps>`
${({theme, isActive}) => isActive && css`
border: 1px solid ${theme.COLORS.GREEN_700};
`}; /* Usar o theme mas importando apenas uma unica vez */

border-radius: 4px;
margin-right: 12px;
height: 38px;
width: 70px;
align-items: center;
justify-content: center;
`;


export const Title = styled.Text`
${({theme}) => css`
font-size: ${theme.FONT_SIZE.SM}px;
font-family: ${theme.FONT_FAMILY.BOLD};
color: ${theme.COLORS.WHITE};
`} /* Usar o theme mas importando apenas uma unica vez */
`; 