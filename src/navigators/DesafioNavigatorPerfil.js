import {createStackNavigator} from 'react-navigation';
import PerfilScreen from '../screens/Perfil';
import NovoDesafioScreen from '../screens/NovoDesafio';

export default createStackNavigator(
    {
        Perfil: {
            screen: PerfilScreen,
            navigationOptions: {
                tabBarVisible: false,
            },
        },
        Desafio: NovoDesafioScreen,
    },
);