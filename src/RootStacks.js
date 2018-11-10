import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import RankingScreen from './screens/Ranking';
import DesafiosScreen from './screens/Desafios';
import PerfilScreen from './screens/Perfil';

export default createBottomTabNavigator(
    {
        Home: HomeScreen,
        Ranking: RankingScreen,
        Desafios: DesafiosScreen,
        Perfil: PerfilScreen,
    },
    {
        initialRouteName: 'Home',
    }
);