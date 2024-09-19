import { playersGetByGroup } from "./playersGetByGroup";

export async function playersGetByGroupAndTeam(group: string, team: string) {
    try {
        // Pega os jogadores do grupo selecionado
        const storage = await playersGetByGroup(group);

        // Verifica quem é de qual time
        const players = storage.filter(player => player.team === team)

        return players;

    } catch (error) {
        throw error;
        
    }
}