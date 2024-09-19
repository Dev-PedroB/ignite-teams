import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Container, Logo } from "./styles";
import logoImg from '@assets/logo.png'

//importação da biblioteca de icones abaixo deu problema. Fiz manualmente
//import {CaretLeft} from 'phosphor-react-native'

type Props = {
    showBackButton?: boolean;
}

export function Header({showBackButton = false}: Props ) {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate('groups')
    }

    return (
        <Container>
            {/* <CaretLeft /> 
            <BackButton>
            <BackIcon />
            </BackButton>
            <Logo source={logoImg} /> */}

            {
            showBackButton &&
            <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
            <Image source={require("../../assets/Icons/seta.png")} style={styles.seta} />
            </TouchableOpacity>
            }
            <Logo source={logoImg} />
        </Container>
    )
}
    