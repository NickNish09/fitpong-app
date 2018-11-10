import React, {Component} from 'react';
import { Container, Header, Content, View, Button, Title, Body, Left, Right } from 'native-base';
import MainFooter from '../components/MainFooter';
import DesafioCard from '../components/DesafioCard';
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
                    <DesafioCard
                        name="Ding Ning"
                        victory={false}
                        score="1x3"
                    />
                </ScrollView>
            </View>
        )
    }
}