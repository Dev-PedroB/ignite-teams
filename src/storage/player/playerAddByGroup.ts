import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/appError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from './playerStorageDTO'
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string){
    try {
        // Pega os jogadores
        const storedPlayers = await playersGetByGroup(group);

        //Verifica se o jogador já existe em outro grupo com filter
        const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name);

        //Lança um erro caso jogador seja duplicado
        if(playerAlreadyExists.length > 0) {
            throw new AppError('Essa pessoa já está adicinada em outro time.')
        }

        // Cria um array com os dados
        const storage = JSON.stringify([...storedPlayers, newPlayer])

        // Armazena os dados em Local Storage
        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);

    } catch (error) {
        throw(error);
    }
}