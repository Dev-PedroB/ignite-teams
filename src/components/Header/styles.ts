import styled from "styled-components/native";
import { StyleSheet } from "react-native";
//importação da biblioteca de icones abaixo deu problema. Fiz manualmente
//import {CaretLeft} from 'phosphor-react-native'


export const Container = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
justify-content: center;
`;



export const Logo = styled.Image`
width: 46px; 
height: 55px;
`; 



// export const BackIcon = styled(CaretLeft).attrs(({theme}) => ({
// size: 32,
// color: theme.COLORS.WHITE

// }))``;



// export const BackButton = styled.TouchableOpacity`
// flex: 1;
// `;



export const styles = StyleSheet.create({
    seta: {
      tintColor: 'white',
      transform: [{ rotate: '-90deg' }]
    },
    backButton: {
        flex: 1
    }
  });