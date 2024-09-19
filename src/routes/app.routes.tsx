import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Groups } from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
import { Players } from '@screens/Players';

//const nativeStack = createNativeStackNavigator();
const {Navigator, Screen} = createNativeStackNavigator(); // forma desestruturada

export function AppRoutes() {
    return(
        <Navigator 
        screenOptions={{headerShown: false}}
        >
            <Screen 
            name='groups'
            component={Groups}
            />
            <Screen 
            name='new'
            component={NewGroup}
            />
            <Screen 
            name='players'
            component={Players}
            />
        </Navigator>
    )
}