// Config para identificar melhor dentro do 
// navigation.navigate as rotas desejadas

//Ao “tipar” as rotas, você tem a vantagem de no 
// momento da navegação saber se uma rota recebe 
// parâmetros ou não e qual o formato dos parâmetros.

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            groups: undefined;
            new: undefined;
            players: {
                group: string;
            }
        }
    }
}