import {createTabNavigator} from 'react-navigation';
import DesafiosHistory from '../screens/DesafiosHistory';
import Desafios from '../screens/Desafios';

export default createTabNavigator(
    {
        Desafios: {
            screen: Desafios,
            navigationOptions: {
                tabBarVisible: false,
            },
        },
        DesafiosHistory: DesafiosHistory,
    },
    {
        navigationOptions: {
            tabBarVisible: false,
            header: null,
        },
    }

);