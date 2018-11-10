import {createStackNavigator} from 'react-navigation';
import DesafiosScreen from '../screens/Desafios';
import NovoDesafioScreen from '../screens/NovoDesafio';

export default createStackNavigator(
    {
        Desafios: {
            screen: DesafiosScreen,
            navigationOptions: {
                tabBarVisible: false,
            },
        },
        Desafio: NovoDesafioScreen,
    },
);