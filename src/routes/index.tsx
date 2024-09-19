import { View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { AppRoutes } from './app.routes'
import { useTheme } from 'styled-components/native';


export function Routes() {
    const {COLORS} = useTheme();

    // OBS: Aqui a View com background serve para acabar
    // com o "glitch da piscada branca"
    return(
        <View style={{flex: 1, backgroundColor: COLORS.GRAY_600}}>
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
        </View>
    );
}