// OBS: Há o SafeAreaView no proprio react-native
// mas o react-native-safe-area-context performa melhor
import { SafeAreaView } from "react-native-safe-area-context";
import styled, {css} from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding: 24px;
`;


export const Form = styled.View`
width: 100%;
background-color: ${({theme}) => theme.COLORS.GRAY_700};
flex-direction: row;
justify-content: center;
border-radius: 6px;
`;


export const HeaderList = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
margin: 32px 0 12px;
`;

export const NumbersOfPlayers = styled.Text`
${({theme}) => css`
font-size: ${theme.FONT_SIZE.SM}px;
font-family: ${theme.FONT_FAMILY.BOLD};
color: ${theme.COLORS.GRAY_200};
`} /* Usar o theme mas importando apenas uma unica vez */
`;