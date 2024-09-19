// OBS: Há o SafeAreaView no proprio react-native
// mas o react-native-safe-area-context performa melhor
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

//importação da biblioteca de icones abaixo deu problema. Fiz manualmente
//import {UsersThree} from "phosphor-react-native"

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    padding: 24px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: center;
`;

// export const Icon = styled(UsersThree).attrs(({theme}) => ({
//     size: 56,
//     color: theme.COLORS.GREEN_700,
//     weight: 'fill'
// }))`
//     align-self: center; 
// `;

export const styles = StyleSheet.create({
    users3: {
      //tintColor: theme.COLORS.GRAY_200,
      tintColor: '#00875F',
      alignSelf: 'center',
      width: 56,
      height: 56
    },
  });