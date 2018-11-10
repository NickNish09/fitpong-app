import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import HomeScreen from './navigators/DesafioNavigator';
import RankingScreen from './navigators/DesafioNavigatorRanking';
import DesafiosScreen from './navigators/DesafioNavigatorDesafios';
import PerfilScreen from './navigators/DesafioNavigatorPerfil';

export default createBottomTabNavigator(
    {
        Home: HomeScreen,
        Ranking: RankingScreen,
        Desafios: DesafiosScreen,
        Perfil: PerfilScreen,
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
          tabBarVisible: false,
        },
    }
);