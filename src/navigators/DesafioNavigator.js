import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../screens/Home';
import NovoDesafioScreen from '../screens/NovoDesafio';

export default createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
              tabBarVisible: false,
            },
        },
        Desafio: NovoDesafioScreen,
    },
);