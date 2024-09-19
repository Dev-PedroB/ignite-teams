
import { useState, useEffect, useCallback } from "react";
import { FlatList } from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native'

import { Container } from './styles';
//import * as S from './styles'; 

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { groupsGetAll } from "@storage/group/groupsGetAll";
import { Loading } from "@components/Loading";


// OBS: podemos usar props ou navigation aqui pois o Container de Navegação compartilha essas propriedades
//export function Groups({navigation}) { 

export function Groups() { 

const [isLoading, setIsLoading] = useState(true);
//  const [groups, setGroups] = useState<string[]>(['Galera do DeepRock', 'Galera da Pelada', 'Família']);
const [groups, setGroups] = useState<string[]>([]);

const navigation = useNavigation();

function handleNewGroup() {
//navigation.navigate('new')
navigation.navigate('new')
}


async function fetchGroups() {
  try {
    setIsLoading(true);

    const data = await groupsGetAll();
    setGroups(data);

    setIsLoading(false);
  } 
  catch (error) {
    console.log(error)  ;
  }
  finally {
    setIsLoading(false);
  }
}

function handleOpenGroup(group:string) {
  navigation.navigate('players', {group});
}
 
// O hook UseFocusEffect é mais indicado para carregar informações do Storage ao acessar a tela
useFocusEffect(useCallback(() => {
  console.log("Carregando Grupos...")
  fetchGroups();
},[]));

  return (
    <Container>
      <Header />
      <Highlight
        title="Ignite App"
        subtitle="Jogue com a sua turma"
      />

      {
        isLoading ? <Loading /> : 
      
      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard 
          title={item}
          onPress={() => handleOpenGroup(item)}
          />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
        <ListEmpty 
        message="Que tal cadastrar a primeira turma ?" 
        />)
      }
      />
    
      }

      <Button 
      title="Criar nova turma"
      onPress={handleNewGroup}
      />

    </Container>
  );
}
