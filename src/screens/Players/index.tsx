import { useState, useEffect, useRef } from "react";
import { Alert, FlatList, Keyboard, TextInput } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { Loading } from "@components/Loading";

import { AppError } from "@utils/appError";

import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/playerStorageDTO";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";

// Sem essa tipagem funciona mas o typescript sublinha group
// como erro. Com essa tipagem e o alias (as routeParams) resolvemos isso.
type RouteParams = {
    group: string;
}

export function Players() {

    const [isLoading, setIsLoading] = useState(true);
    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
    //const [players, setPlayers] = useState(['Pedro', 'Joao', 'Marcos', 'Ana', 'Mike', 'Lucas', 'Urist', 'Goku', 'Gohan'])
    const [newPlayerName, setNewPlayerName] = useState('');




    const navigation = useNavigation();

    const route = useRoute();
    const {group} = route.params as RouteParams // forma desestruturada

    const newPlayerNameInputRef = useRef<TextInput>(null)





    async function handleAddPlayer() {
        if(newPlayerName.trim().length === 0) {
            return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar');
        }

        const newPlayer = {
            name: newPlayerName,
            team,
        }

        try {
            await playerAddByGroup(newPlayer, group);
            newPlayerNameInputRef.current?.blur(); // tira o Foco do Input
            Keyboard.dismiss();
            setNewPlayerName('');
            fetchPlayersByTeam();

        } catch (error) {
            if(error instanceof AppError) {
                Alert.alert('Nova pessoa', error.message)
            } else {
                console.log(error)
                Alert.alert('Nova pessoa', 'Não foi possivel adicionar')
            }
        }
    }







    async function fetchPlayersByTeam() { 
        try {
            setIsLoading(true);

            const playersByTeam = await playersGetByGroupAndTeam(group, team)
            setPlayers(playersByTeam);

            setIsLoading(false);
        } catch (error) {
            console.log(error);
            Alert.alert('Pessoas', 'Não foi possivel carregar o time selecionado')
        }
        finally {
            setIsLoading(false);
        }
    }



    async function handlePlayerRemove(playerName: string) {
        try {
            await playerRemoveByGroup(playerName, group)
            fetchPlayersByTeam();
        } 
        catch (error) {
            console.log (error);
            Alert.alert('Remover pessoa', 'Não foi possivel remover esta pessoa.');
        }
    }

    async function groupRemove() {
        try {
            await groupRemoveByName(group);
            navigation.navigate('groups')
        } 
        catch (error) {
            console.log(error);
            Alert.alert('Remover grupo','Não foi possivel remover o grupo.');
        }
    }

    
    async function handleGroupRemove() {
        Alert.alert(
            'Remover', 
            'Deseja remover a turma?',
        [
            {text: 'Não', style: 'cancel'},
            {text: 'Sim', onPress:() => groupRemove()}
        ]
        )
    }

    useEffect(() => {
        console.log('useEffect executado!')
        fetchPlayersByTeam()
    }, [team])





    return (
        <Container>
            <Header showBackButton />
            
            <Highlight 
            //title={route.params.group}
            title={group}
            subtitle="Adicione a galera e separe os times"
            /> 
            <Form>
                <Input 
                inputRef={newPlayerNameInputRef}
                onChangeText={setNewPlayerName}
                value={newPlayerName}
                placeholder="Nome da pessoa"
                autoCorrect={false}
                onSubmitEditing={handleAddPlayer}
                returnKeyType="done"
                />
                <ButtonIcon
                icon="add"
                onPress={handleAddPlayer}
                />
            </Form>

            <HeaderList>
            <FlatList 
            data={['Time A', 'Time B']}
            keyExtractor={item => item}
            horizontal
            renderItem={({item}) => (
                <Filter 
                title={item}
                isActive={item === team}
                onPress={() => setTeam(item)}
                />
            )}
            />
            <NumbersOfPlayers>
                {players.length}
            </NumbersOfPlayers>

            </HeaderList>

            {
                isLoading ? <Loading /> : 
            
            <FlatList 
            data={players}
            keyExtractor={item => item.name}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[{paddingBottom: 100}, players.length === 0 && {flex: 1}]}
            ListEmptyComponent={() => (
                <ListEmpty message="Não há pessoas neste time."/>
            )}
            renderItem={({item}) => (
                <PlayerCard 
                name={item.name}
                onRemove={() => handlePlayerRemove(item.name)}
                />
            )}
            />

            }

            <Button 
            title="Remover turma"
            type="SECONDARY"
            onPress={handleGroupRemove}
            />

        </Container>
    )
}