import { TouchableOpacity, StyleSheet } from "react-native";
import styled, { css } from "styled-components/native";

//importação da biblioteca de icones abaixo deu problema. Fiz manualmente
//import {UsersThree} from "phosphor-react-native"

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 90px;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
    border-radius: 6px;
    flex-direction:  row;
    align-items: center;
    padding: 24px;
    margin-bottom: 12px;
`;



export const Title = styled.Text`
${({theme}) => css`
font-size: ${theme.FONT_SIZE.MD}px;
font-family: ${theme.FONT_FAMILY.REGULAR};
color: ${theme.COLORS.GRAY_200};
`}; /* Usar o theme mas importando apenas uma unica vez */

   /* font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
   color: ${({theme}) => theme.COLORS.GRAY_200};
   font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR}; */
`;



// export const Icon = styled(UsersThree).attrs(({theme}) => ({
//     size: 32,
//     color: theme.COLORS.GREEN_700,
//     weight: 'fill'
// }))`
//     margin-right: 20px;
// `;



export const styles = StyleSheet.create({
    users3: {
      //tintColor: theme.COLORS.GREEN_700,
      tintColor: '#00875F',
      marginRight: 20
    },
  });