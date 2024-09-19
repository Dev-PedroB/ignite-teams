import { useState } from "react";
import { Alert, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, Content } from "./styles";
import { styles } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { AppError } from "@utils/appError";

import { groupCreate } from "@storage/group/groupCreate";

export function NewGroup() {
    const [group, setGroup] = useState('');

    const navigation = useNavigation();


    async function handleCreateNew() {
        try {
            if(group.trim().length === 0) {
                return Alert.alert('Novo Grupo', 'Informe o nome da turma.')
            }

            await groupCreate(group)
            navigation.navigate('players', {group: group})    
        } 
        catch (error) {
            if(error instanceof AppError) {
                Alert.alert('Novo Grupo', error.message)
            } else {
                Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.')
                console.log(error);
            }
        }
        
    }


    return(
        <Container>
            <Header showBackButton />
            <Content>
            <Image source={require("../../assets/Icons/Users3.png")} style={styles.users3} />

            <Highlight 
                title="Nova turma"
                subtitle="Crie a turma para adicionar as pessoas"
            />

            <Input 
            placeholder="Nome da turma"
            onChangeText={setGroup}
            />

            <Button 
                title="Criar"
                onPress={handleCreateNew}
            />
             
            </Content>
        </Container>
    );
}