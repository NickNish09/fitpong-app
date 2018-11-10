import {createStackNavigator} from 'react-navigation';
import DesafiosScreen from '../navigators/DesafioHistoricoNav';
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
    {
        navigationOptions: {
            tabBarVisible: false,
            header: null,
        },
    }
);