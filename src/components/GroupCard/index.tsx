import { Image, TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles";
import { styles } from "./styles";

//Importação de tipagem e criação de tipagem custom
type Props = TouchableOpacityProps & {
    title: string;
}

export function GroupCard({title, ...rest}: Props) {
    return (
        <Container {...rest}>
            {/* <Icon /> */}
        <Image source={require("../../assets/Icons/Users3.png")} style={styles.users3} />
            <Title>
                {title}
            </Title>
        </Container>
    );
}