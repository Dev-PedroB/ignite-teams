import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

//tipagem do tipo do botão
type Props = {
    type: ButtonTypeStyleProps;
}



export const Container = styled(TouchableOpacity)<Props>`
flex: 1;
min-height: 56px;
max-height: 56px;
background-color: ${({theme, type}) => type == 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
border-radius: 6px;
justify-content: center;
align-items: center;
`;



export const Title = styled.Text`
${({theme}) => css`
font-size: ${theme.FONT_SIZE.MD}px;
font-family: ${theme.FONT_FAMILY.BOLD};
color: ${theme.COLORS.WHITE};
`}; /* Usar o theme mas importando apenas uma unica vez */


/* font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
color: ${({theme}) => theme.COLORS.WHITE}; */
`;