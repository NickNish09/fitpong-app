import React, {Component} from 'react';
import { Container, Header, Content, View, Button, Title, Body, Left, Right } from 'native-base';
import MainFooter from '../components/MainFooter';
import DesafioCardPendente from '../components/DesafioCardPendente';
import StatsCard from '../components/StatsCard';
import {ScrollView, StatusBar} from 'react-native';
import Icon from '../components/MIcon';
import {colors, fonts, padding, dimensions} from '../styles/base.js';
import Fab from '../components/FabButton';

import createStyles from '../styles/base.js';

const styles = createStyles();

export default class DesafiosPendentes extends Component{

    static navigationOptions = {
        header: null,
        tabBarVisible: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    componentWillMount(){

    }

    render(){
        return(
            <View style={{flex: 1}}>
                <ScrollView style={{flex: 1}}>
                    <DesafioCardPendente
                        name="Ding Ning"
                        points={348}
                        url="http://wiki.china.org.cn/wiki/images/thumb/8/81/Ding_Ning_in_Rio.JPEG/300px-Ding_Ning_in_Rio.JPEG"
                    />
                </ScrollView>
            </View>
        )
    }
}