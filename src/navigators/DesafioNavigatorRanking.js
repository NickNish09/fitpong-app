import {createStackNavigator} from 'react-navigation';
import RankingScreen from '../screens/Ranking';
import NovoDesafioScreen from '../screens/NovoDesafio';

export default createStackNavigator(
    {
        Ranking: {
            screen: RankingScreen,
            navigationOptions: {
                tabBarVisible: false,
            },
        },
        Desafio: NovoDesafioScreen,
    },
);