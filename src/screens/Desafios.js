import React, {Component} from 'react';
import { Container, Header, Content, View, Button, Fab, Title, Body, Left, Right } from 'native-base';
import MainFooter from '../components/MainFooter';
import PersonCard from '../components/PersonCard';
import StatsCard from '../components/StatsCard';
import {ScrollView, StatusBar} from 'react-native';
import Icon from '../components/MIcon';
import {colors, fonts, padding, dimensions} from '../styles/base.js';

import createStyles from '../styles/base.js';

const styles = createStyles();

export default class Desafios extends Component{

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
            <Container>

                <Header style={styles.header}>
                    <Left/>
                    <Body>
                    <Title>Estatísticas</Title>
                    </Body>
                    <Right/>
                </Header>
                <View style={{flex: 1}}>
                    <ScrollView style={{flex: 1}}>
                        <StatsCard/>
                    </ScrollView>
                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{ }}
                        style={{ backgroundColor: colors.secondary }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}>
                        <Icon name='sword-cross'
                              family='MaterialCommunityIcons'
                              style={styles.iconPrimary}
                              color='#ffffff'

                        />
                    </Fab>
                </View>
                <MainFooter/>
            </Container>
        )
    }
}