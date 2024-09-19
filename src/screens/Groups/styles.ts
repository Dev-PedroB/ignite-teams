// OBS: Há o SafeAreaView no proprio react-native
// mas o react-native-safe-area-context performa melhor
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    //align-items: center;
    //justify-content: center;
    padding:  24px;
`;

// export const Title = styled.Text`
// color: #FFF;
// font-size: 32px;
// `;